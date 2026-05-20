import { eq } from "drizzle-orm"
import { getDB } from ".."
import { product, productImages } from "../schema/products"
import { uuid } from "../uuid"
import { del } from "@vercel/blob"

const db = getDB()

// Create
export async function createProduct(input: {
  name: string
  sku: string
  price: number
  quantity: number
  lowStockAt: number
  userId: string
}) {
  const result = await db
    .insert(product)
    .values({
      id: uuid(),
      createdBy: input.userId,
      name: input.name,
      sku: input.sku,
      price: Math.round(input.price * 100),
      quantity: input.quantity,
      lowStockAt: input.lowStockAt,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning({ id: product.id })
  return result
}

// Add image
export async function addProductImage(input: {
  productId: string
  url: string
  isPrimary?: boolean
}) {
  return await db.insert(productImages).values({
    id: uuid(),
    productId: input.productId,
    url: input.url,
    isPrimary: input.isPrimary ?? false,
  })
}

// Get
export async function getProducts() {
  return await db.select().from(product)
}

// Get (with images)
export async function getProductsWithImages() {
  const products = await db.query.product.findMany({
    with: {
      productImages: true,
    },
  })
  console.log("PRODUCTS WITH IMAGES:", products)
  return products
}

// Delete
export async function deleteProduct(id: string) {
  const foundProduct = await db.query.product.findFirst({
    where: (p, { eq }) => eq(p.id, id),
    with: {
      productImages: true,
    },
  })

  if (!foundProduct) return

  for (const img of foundProduct?.productImages ?? []) {
    try {
      await del(img.url)
    } catch (err) {
      console.error("Failed to delete blob:", img.url, err)
    }
  }
  await db.delete(product).where(eq(product.id, id))
}

// Update

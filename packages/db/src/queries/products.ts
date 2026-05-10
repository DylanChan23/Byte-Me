import { db } from ".."
import { product } from "../schema/products"
import { uuid } from "../uuid"

export async function createProduct(input: {
  name: string
  sku: string
  price: number
  quantity: number
  lowStockAt: number
  organizationId: string
  userId: string
}) {
  return await db
    .insert(product)
    .values({
      id: uuid(),
      organizationId: input.organizationId,
      createdBy: input.userId,
      name: input.name,
      sku: input.sku,
      price: input.price,
      quantity: input.quantity,
      lowStockAt: input.lowStockAt,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning()
}

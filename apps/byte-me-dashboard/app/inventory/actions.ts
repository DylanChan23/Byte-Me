"use server"

import { addProductImage, createProduct, deleteProduct } from "@workspace/db"
import { getSession } from "@workspace/auth"

// Create
export async function createProductAction(input: {
  name: string
  sku: string
  price: number
  quantity: number
  lowStockAt: number
  imageUrl?: string
}) {
  const session = await getSession()

  if (!session) {
    throw new Error("Unauthorized")
  }

  const [created] = await createProduct({
    ...input,
    userId: session.user.id,
  })
  if (!created) {
    throw new Error("Failed to create product")
  }

  if (input.imageUrl) {
    await addProductImage({
      productId: created.id,
      url: input.imageUrl,
      isPrimary: true,
    })
  }

  return created
}

// Delete
export async function deleteProductAction(id: string) {
  await deleteProduct(id)
}

import { eq } from "drizzle-orm"
import { db } from "./index"
import { organization, user } from "./schema/users"

async function seed() {
  await db.insert(organization).values({
    id: "9c7e-123abc456def-c1f7b6d2-8a2c-4e3b",
    name: "A La Cart",
    slug: "a-la-cart",
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  await db
    .update(user)
    .set({
      organizationId: "9c7e-123abc456def-c1f7b6d2-8a2c-4e3b",
      role: "manager",
    })
    .where(eq(user.email, "chan0566@algonquinlive.com"))
  console.log("Manager Seed complete ✅")
}

seed()

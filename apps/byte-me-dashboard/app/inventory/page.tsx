import { getSession } from "@workspace/auth/src/lib/auth"
import { redirect } from "next/navigation"
import Inventory from "./_components/inventory"
import { getProductsWithImages } from "@workspace/db"

export default async function Page() {
  const session = await getSession()
  if (!session) redirect("/login")

  const products = await getProductsWithImages()

  return (
    <div className="h-screen w-screen">
      <Inventory products={products} />
    </div>
  )
}

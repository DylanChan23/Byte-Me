import { getSession } from "@workspace/auth"
import Overview from "./_components/overview"
import { redirect } from "next/navigation"
import { getDB, getProductsWithImages } from "@workspace/db"
import { eq } from "drizzle-orm"
import { user as userTable } from "@workspace/db/src/schema/users"

export default async function Page() {
  const session = await getSession()
  if (!session) redirect("/login")

  const products = await getProductsWithImages()

  const db = getDB()
  const [user] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, session.user.id))
    .limit(1)

  return (
    <div className="h-full w-screen">
      <Overview products={products} user={user} />
    </div>
  )
}

import { getSession } from "@workspace/auth/src/lib/auth"
import { redirect } from "next/navigation"
import Inventory from "./_components/inventory"

export default async function Page() {
  const session = await getSession()
  if (!session) redirect("/login")

  return (
    <div className="h-screen w-screen">
      <Inventory />
    </div>
  )
}

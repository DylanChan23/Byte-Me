import { redirect } from "next/navigation"
import Login from "./_components/login"
import { getSession } from "@workspace/auth"

export default async function Page() {
  const session = await getSession()
  if (session) redirect("/overview")

  return (
    <div className="h-screen w-screen">
      <Login />
    </div>
  )
}

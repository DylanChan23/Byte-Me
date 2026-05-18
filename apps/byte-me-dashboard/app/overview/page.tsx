import { getSession } from "@workspace/auth"
import { redirect } from "next/navigation"
import Overview from "./_components/overview"

export default async function Page() {
  const session = await getSession()
  if (!session) redirect("/login")

  return (
    <div className="h-screen w-screen">
      <Overview />
    </div>
  )
}

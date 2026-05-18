import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import { getSession } from "@workspace/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getSession()
  if (session) {
    redirect("/overview")
  }

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">A La Cart</h1>
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  )
}

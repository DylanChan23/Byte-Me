import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Byte Me Dashboard</h1>
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  )
}

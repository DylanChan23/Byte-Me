"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { LoginButtons } from "@workspace/auth"

export default function Login() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-[350] text-center">
        <CardHeader>
          <CardTitle className="text-xl">Dashboard Access</CardTitle>
          <CardDescription>
            Discover items from the Byte Me storefront. <br />
            All products are pulled live from the inventory system in real time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-4 flex items-center">
            <Separator className="flex-1" />
            <span className="px-4 text-xs text-muted-foreground uppercase">
              Log in below to get started
            </span>
            <Separator className="flex-1" />
          </div>
          <LoginButtons />
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import LoginButtons from "./loginButtons"
import { Button } from "@workspace/ui/components/button"

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-[350] text-center">
        <CardHeader>
          <CardTitle className="text-xl">Dashboard Access</CardTitle>
          <CardDescription>
            Manage your site from one central place. <br />
            You can view your analytics, update inventory, and keep your content
            up to date.
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
        <CardFooter>
          <Button className="w-full">Create Account</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

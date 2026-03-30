"use client"

import { Avatar, AvatarImage } from "@workspace/ui/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar"
import { ChevronsUpDownIcon } from "lucide-react"
import LogoutIcon from "@workspace/ui/icons/logout-icon"
import GearIcon from "@workspace/ui/icons/gear-icon"
import { authClient } from "@workspace/auth/src/lib/auth-client"
import { redirect } from "next/navigation"

export default function MySidebar() {
  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/login"
          },
        },
      })
    } catch (err) {
      console.error("Sign out failed:", err)
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <p className="font-bold">Byte Me Dashboard</p>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <SidebarMenuButton size="lg" className="flex justify-between">
                  <div className="flex gap-2">
                    <Avatar className="h-fill">
                      <AvatarImage />
                    </Avatar>
                    <div>
                      <p className="text-xs font-bold">Username</p>
                      <p className="text-xs">email@email.com</p>
                    </div>
                  </div>
                  <ChevronsUpDownIcon className="h-5! w-5!" />
                </SidebarMenuButton>
              }
            />
            <DropdownMenuContent side="right">
              <DropdownMenuGroup>
                <DropdownMenuItem className="pointer-events-none">
                  <div className="flex gap-2">
                    <Avatar className="h-fill">
                      <AvatarImage />
                    </Avatar>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground">
                        Username
                      </p>
                      <p className="text-xs text-muted-foreground">
                        email@email.com
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <Separator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <GearIcon className="absolute w-full" />
                  <p className="pl-6">Settings</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <Separator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogoutIcon className="absolute w-full" />
                  <p className="pl-6">Logout</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

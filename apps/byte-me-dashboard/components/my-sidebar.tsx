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
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { ChevronRight, ChevronsUpDownIcon, Sun } from "lucide-react"
import LogoutIcon from "@workspace/ui/icons/logout-icon"
import GearIcon from "@workspace/ui/icons/gear-icon"
import CartIcon from "@workspace/ui/icons/cart-icon"
import MoonIcon from "@workspace/ui/icons/moon-icon"
import { authClient } from "@workspace/auth/src/lib/auth-client"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function MySidebar() {
  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/"
          },
        },
      })
    } catch (err) {
      console.error("Sign out failed:", err)
    }
  }
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Sidebar className="w-60">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Link href="/overview" className="w-full">
                <p className="text-center text-lg font-bold">
                  Byte Me Dashboard
                </p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link
                    href="/inventory"
                    className="flex w-full items-center justify-between"
                  >
                    <div className="flex items-center">
                      <CartIcon className="absolute w-full" />
                      <p className="pl-6">Inventory</p>
                    </div>
                    <ChevronRight />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Footer */}
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
            <DropdownMenuContent side="right" className="w-fit p-2">
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
              <Separator className="my-0.5" />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                >
                  <p className="flex items-center justify-start gap-2">
                    {resolvedTheme === "dark" ? (
                      <>
                        <Sun />
                        <span>Light mode</span>
                      </>
                    ) : (
                      <>
                        <MoonIcon />
                        <span>Dark mode</span>
                      </>
                    )}
                  </p>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <GearIcon className="absolute w-full" />
                  <p className="pl-6">Settings</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <Separator className="my-0.5" />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={handleSignOut} className="pl-2.5">
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

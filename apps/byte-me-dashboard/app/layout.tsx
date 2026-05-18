import { Geist, Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import MySidebar from "@/components/my-sidebar"
import { getSession } from "@workspace/auth/server"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSession()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          {session ? (
            <SidebarProvider>
              <MySidebar session={session} />
              <SidebarTrigger className="mt-4 ml-4" />
              {children}
            </SidebarProvider>
          ) : (
            <>{children}</>
          )}
          <Toaster position="top-center" closeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

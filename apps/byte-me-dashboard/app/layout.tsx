import { Geist, Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import MySidebar from "@/components/my-sidebar"
import { getSession } from "@workspace/auth"

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
          <SidebarProvider>
            {session && <MySidebar />}
            <SidebarTrigger className="mt-4 ml-4" />
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

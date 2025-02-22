import type React from "react"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "HireSafe",
  description: "Secure Background Checks Made Simple",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'
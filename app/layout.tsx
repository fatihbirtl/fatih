import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { SideBarTrigger } from "@/components/side-bar-trigger"
import AppSidebar from "@/components/app-sidebar"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  title: "Layout Rules And Conventions",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen bg-slate-100`}
      >
        <AppSidebar />
        <SideBarTrigger />
        {children}
      </body>
    </html>
  )
}

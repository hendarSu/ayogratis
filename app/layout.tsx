import "@/styles/globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Website Pro - Buat Website untuk Bisnis Kamu",
  description: "Buat website company profile, portal berita, atau toko online dengan fitur lengkap",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <Analytics/>
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}


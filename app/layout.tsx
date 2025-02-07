import "@/styles/globals.css"
import type { Metadata } from "next"
import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ayo Gratis - Buat Website Gratis",
  description: "Buat website company profile, portal berita, atau toko online gratis dengan fitur lengkap",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}


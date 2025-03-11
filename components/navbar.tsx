"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

export function Navbar() {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="https://www.instagram.com/websitepro.official" className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  Website Pro
          </Link>

          <div className="flex items-center gap-4">
            {/* <Button variant="ghost" className="hidden md:inline-flex notion-button">
              Masuk
            </Button> */}
            <Button asChild className="hidden md:inline-flex notion-button">
              <Link href="https://wa.me/6281222002811?text=Hai%20ka,%20saya%20ingin%20membuat%20website">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi Kami
              </Link>
            </Button>
            {/* <Button variant="ghost" className="md:hidden notion-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}


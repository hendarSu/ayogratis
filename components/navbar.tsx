"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

export function Navbar() {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="https://www.instagram.com/websitegratis.official" className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  AyoGratis
          </Link>

          {/* <nav
            className={`${isMenuOpen ? "block" : "hidden"} md:flex absolute md:relative top-16 left-0 right-0 bg-background md:top-0 z-20`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Portal Berita
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Toko Online
                </Link>
              </li>
            </ul>
          </nav> */}

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


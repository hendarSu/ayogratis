"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
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
            <Button className="hidden md:inline-flex notion-button">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi Kami
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


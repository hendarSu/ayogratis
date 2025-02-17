import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AyoGratis. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}


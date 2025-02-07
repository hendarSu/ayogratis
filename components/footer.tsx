import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Cara Membuat
              </Link>
                  </li>
                  <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
                  </li>
                  <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Kontak
              </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Tentang Kami
          </Link>
              </li>
              <li>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Blog
          </Link>
              </li>
              <li>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Karir
          </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Syarat & Ketentuan
          </Link>
              </li>
              <li>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Kebijakan Privasi
          </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2">
                <li>
                <Link href="https://www.instagram.com" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Link>
                </li>
                <li>
                <Link href="https://www.facebook.com" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Link>
                </li>
                <li>
                <Link href="https://www.linkedin.com" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
                </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AyoGratis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


import Script from "next/script"
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building2, Newspaper, ShoppingBag, Check, ArrowRight, Users, TrendingUp, Globe, MessageCircle } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  const benefits = [
    {
      title: "Jangkau Audiens Lebih Luas",
      description: "Perluas jangkauan bisnis Kamu melampaui batas geografis",
      icon: Globe,
    },
    {
      title: "Tingkatkan Kredibilitas",
      description: "Bangun kepercayaan pelanggan dengan kehadiran online profesional",
      icon: Users,
    },
    {
      title: "Promosi 24/7",
      description: "Promosikan produk dan layanan Kamu setiap saat tanpa batasan waktu",
      icon: TrendingUp,
    },
    {
      title: "Hemat Biaya Marketing",
      description: "Kurangi biaya pemasaran dengan strategi digital yang efektif",
      icon: ShoppingBag,
    },
    {
      title: "Analisis Performa Bisnis",
      description: "Pantau dan analisis kinerja bisnis Kamu dengan mudah",
      icon: TrendingUp,
    },
    {
      title: "Bersaing di Era Digital",
      description: "Tingkatkan daya saing bisnis Kamu di pasar yang semakin digital",
      icon: Users,
    },
  ];
  const contents = [
    {
      title: "Toko Online",
      description: "Jual produk Kamu langsung ke pelanggan secara online",
      icon: ShoppingBag,
      features: ["Katalog Produk", "Sistem Keranjang Belanja", "Proses Checkout", "Manajemen Inventori"],
      bgColor: "bg-pastel-pink",
    },
    {
      title: "Landing Page",
      description: "Buat landing page untuk meningkatkan visitor dan penjualan product kamu",
      icon: ShoppingBag,
      features: ["Headline Menarik", "CTA (Call-to-Action)", "Penjelasan Produk", "Form Pembelian"],
      bgColor: "bg-pastel-blue",
    },
    {
      title: "Portal Berita",
      description: "Buat portal berita atau blog dengan konten yang selalu up-to-date",
      icon: Newspaper,
      features: ["Manajemen Artikel", "Kategori & Tag", "Komentar Pembaca", "Integrasi Media Sosial"],
      bgColor: "bg-pastel-green",
    },
    {
      title: "Company Profile",
      description: "Tampilkan profil dan layanan perusahaan Kamu secara profesional",
      icon: Building2,
      features: ["Halaman Tentang Kami", "Portofolio Proyek", "Formulir Kontak", "Testimoni Klien"],
      bgColor: "bg-pastel-yellow",
    },
    {
      title: "Personal Branding",
      description: "Bangun personal branding Kamu dengan website profesional",
      icon: Users,
      features: ["Profil Pribadi", "Portofolio", "Blog Pribadi", "Testimoni"],
      bgColor: "bg-pastel-purple",
    }
  ];

  const clients = [
    {
      src: "/images/logo-mufeed.png",
      alt: "Mufeed Outfit",
    },
    {
      src: "/images/logo-pedeofficial.jpeg",
      alt: "Pedeo Official",
    },
    {
      src: "/images/logo-narros.jpeg",
      alt: "Narros",
    }
  ];

  return (
    <>
      <Head>
        <title>Buat Website Gratis untuk Bisnis Kamu</title>
        <meta name="description" content="Tingkatkan kehadiran online Kamu dengan website profesional tanpa biaya. Solusi digital untuk semua jenis bisnis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Buat Website Gratis untuk Bisnis Kamu" />
        <meta property="og:description" content="Tingkatkan kehadiran online Kamu dengan website profesional tanpa biaya. Solusi digital untuk semua jenis bisnis." />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://ayogratis.web.id" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buat Website Gratis untuk Bisnis Kamu" />
        <meta name="twitter:description" content="Tingkatkan kehadiran online Kamu dengan website profesional tanpa biaya. Solusi digital untuk semua jenis bisnis." />
        <meta name="twitter:image" content="/assets/twitter-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ayogratis.web.id" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://ayogratis.web.id",
            "name": "Website Gratis untuk Bisnis Kamu",
            "description": "Tingkatkan kehadiran online Kamu dengan website profesional tanpa biaya. Solusi digital untuk semua jenis bisnis.",
          })}
        </script>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3QFRY6RY4"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q3QFRY6RY4');
        `}
      </Script>
      <main className="min-h-screen">
        {/* Floating WhatsApp Button */}
        <Link href="https://wa.me/6281222002811?text=Hai%20ka,%20saya%20ingin%20membuat%20website" target="_blank">
          <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg cursor-pointer">
            <MessageCircle className="w-6 h-6" />
          </div>
        </Link>
        {/* Squircles Section */}
        <div className="squircles inset-0"></div>
        {/* Hero Section */}
        <section>
          <div className="container px-4 py-16 sm:py-24 mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
                Buat Website Gratis untuk Bisnis Kamu
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Tingkatkan kehadiran online Kamu dengan website profesional tanpa biaya. Solusi digital untuk semua jenis
                bisnis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://wa.me/6281222002811?text=Hai%20ka,%20saya%20ingin%20membuat%20website">
                  <Button size="lg" className="notion-button">
                    Mulai Buat Website
                  </Button>
                </Link>
                <Link href="https://wa.me/6281222002811?text=Hai%20ka,%20saya%20ingin%20membuat%20website">
                  <Button size="lg" variant="outline" className="notion-button bg-background">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Website Types Section */}
        <section className="py-16 sm:py-24">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Pilih Website Sesuai Kebutuhan Kamu</h2>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {contents.map((type, index) => (
                <Card key={index} className={`border-none !shadow-md ${type.bgColor} lg:w-[calc(33.333333%-2rem)] md:w-[calc(50%-1rem)] w-full bg-white`}>
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex gap-4 p-6">
                      <type.icon className="min-w-10 min-h-10 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10"></div>
                      <CardContent>
                        <ul className="space-y-3">
                          {type.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Section */}
        <section className="py-16 sm-py-24 bg-secondary">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Klien Yang Pernah Kami Layani</h2>
            <p className="text-lg opacity-90 mt-6">Klien dari berbagai bidang</p>

            <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
              {clients.map((partner, index) => (
                <Image key={index} src={partner.src} alt={partner.alt} title={partner.alt} width={128} height={60} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Siap Membawa Bisnis Kamu ke Dunia Digital?</h2>
              <p className="text-lg opacity-90">
                Mulai buat website profesional untuk bisnis Kamu sekarang, tanpa biaya dan tanpa perlu keahlian coding.
              </p>

              <br />

              <Link href="https://wa.me/6281222002811?text=Hai%20ka,%20saya%20ingin%20membuat%20website">
                <Button
                  size="lg"
                  variant="secondary"
                  className="notion-button bg-primary-foreground text-primary hover:bg-accent"
                >
                  Buat Website Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Manfaat Website untuk Bisnis Kamu</h2>
              <p className="text-muted-foreground">Tingkatkan potensi bisnis Kamu dengan kehadiran online yang kuat</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardHeader>
                    <benefit.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Ayo, Jangan tunggu lama lagi</h2>
              <p className="text-lg opacity-90">
                Mulai buat website profesional untuk bisnis Kamu sekarang, tanpa biaya dan tanpa perlu keahlian coding.
              </p>

              <br />

              <Link href="https://wa.me/6281222002811?text=Hai%20ka,%20saya%20ingin%20membuat%20website">
                <Button
                  size="lg"
                  variant="secondary"
                  className="notion-button bg-primary-foreground text-primary hover:bg-accent"
                >
                  Buat Website Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="py-16 sm:py-24">
          {/* <div className="squircles inset-0"></div> */}
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Syarat & Ketentuan</h2>
              <p className="text-lg text-muted-foreground">
                Untuk sewa server dan pembelian domain ditanggung oleh pengguna.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


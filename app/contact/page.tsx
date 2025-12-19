import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  // These URLs should be replaced with the actual social media profiles
  const socialLinks = {
    instagram: "https://www.instagram.com/ilonatimischi/", // Replace with actual Instagram URL
    facebook: "https://www.facebook.com/ilona.codreanu", // Replace with actual Facebook URL
    tiktok: "https://www.tiktok.com/@ilona.fit", // Replace with actual TikTok URL
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Contact</h1>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              Ai întrebări sau ești gata să începi? Contactează-mă și îți voi răspunde cât mai curând posibil.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Trimite un mesaj</CardTitle>
                <CardDescription>
                  Completează formularul de mai jos și voi reveni cu un răspuns în maxim 48 de ore.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Informații de Contact</h2>
                <p className="mt-2 text-muted-foreground text-justify">
                  Mă poți contacta direct prin următoarele metode:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>email@ilonafit.ro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+40 700 000 000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Buzău, România</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Social Media</h2>
                <p className="mt-2 text-muted-foreground text-justify">
                  Urmărește-mă pe rețelele sociale pentru sfaturi, inspirație și actualizări:
                </p>
                <div className="mt-6 flex gap-4">
                  <Link
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <FaTiktok className="h-6 w-6" />
                    <span className="sr-only">TikTok</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Program Consultații</h2>
                <p className="mt-2 text-muted-foreground text-justify">
                  Consultațiile inițiale se programează în următoarele intervale:
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Luni - Vineri:</span>
                    <span>10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă:</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duminică:</span>
                    <span>Închis</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/booking">Programează o Consultație</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center">Întrebări Frecvente</h2>
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cum funcționează antrenamentul online?</h3>
                <p className="text-muted-foreground text-justify">
                  Antrenamentul online include programe personalizate de exerciții și nutriție, trimise prin email sau
                  prin portalul clienților. Comunicăm regulat pentru ajustări și feedback prin mesaje, email sau apeluri
                  video.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cât durează să văd rezultate?</h3>
                <p className="text-muted-foreground text-justify">
                  Rezultatele variază în funcție de obiective, punctul de plecare și consistență. De obicei, schimbările
                  vizibile apar în 4-8 săptămâni, cu transformări semnificative în 3-6 luni de antrenament și nutriție
                  consecventă.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Oferi și antrenamente personale în Buzău?</h3>
                <p className="text-muted-foreground text-justify">
                  Da, pentru un număr limitat de clienți, ofer și sesiuni de antrenament personal în Buzău.
                  Contactează-mă pentru disponibilitate și detalii.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


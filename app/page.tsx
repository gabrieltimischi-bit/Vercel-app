import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Ilona Timischi - Fitness Trainer"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Transformă-ți Corpul.
            <br />
            Atinge Performanța.
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Antrenament personalizat, nutriție și pregătire pentru competiții cu Ilona Timischi
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/contact">Aplică Acum</Link>
          </Button>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-gray-100 py-4">
        <div className="container flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/placeholder.svg?height=40&width=100"
            alt="NPC Logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="ISRO Fitness Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <Image
            src="/placeholder.svg?height=40&width=110"
            alt="Certification Logo"
            width={110}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Ilona Timischi" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <Badge className="mb-2">Antrenor Personal & Nutriționist Certificat</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Ilona Timischi</h2>
              <p className="text-lg text-muted-foreground">
                Cu peste 5 ani de experiență în industria fitness-ului și nutriției, sunt dedicată să ajut clienții mei
                să-și atingă obiectivele de transformare corporală prin antrenamente personalizate și planuri
                nutriționale adaptate nevoilor individuale.
              </p>
              <p className="text-lg text-muted-foreground">
                Ca sportivă activă NPC și antrenor certificat, înțeleg atât provocările, cât și satisfacțiile unui stil
                de viață dedicat fitness-ului și performanței fizice.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/despre">Citește Povestea Mea</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Cum Te Pot Ajuta</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Servicii personalizate pentru a te ajuta să-ți atingi obiectivele fitness
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Antrenament Online Personalizat"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Antrenament Online Personalizat</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>
                  Programe de antrenament adaptate nevoilor și obiectivelor tale, cu suport continuu și ajustări
                  periodice pentru rezultate optime.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicii/antrenament-online">Află Mai Mult</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 2 */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Pregătire Competiții Fitness"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Pregătire Competiții Fitness</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>
                  Pregătire specializată pentru competiții de fitness și bodybuilding, cu planuri detaliate de
                  antrenament, nutriție și prezentare scenică.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicii/pregatire-competitii">Află Mai Mult</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service Card 3 */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Consultanță Nutriție"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Consultanță Nutriție</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>
                  Planuri nutriționale personalizate pentru pierdere în greutate, creștere musculară sau performanță
                  sportivă, adaptate preferințelor și stilului tău de viață.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicii/nutritie">Află Mai Mult</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Rezultate Reale</h2>
            <p className="mt-4 text-lg text-muted-foreground">Transformări și experiențe ale clienților mei</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6 flex justify-center">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Transformare Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "Am pierdut 15 kg în 6 luni cu programul Ilonei. Abordarea ei personalizată și suportul constant au
                  făcut toată diferența."
                </blockquote>
                <p className="mt-4 font-semibold">Maria D.</p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6 flex justify-center">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Transformare Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "Datorită Ilonei am reușit să câștig primul meu concurs de fitness. Planurile ei de antrenament și
                  nutriție sunt de neegalat."
                </blockquote>
                <p className="mt-4 font-semibold">Alexandru P.</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6 flex justify-center">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Transformare Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "La 45 de ani, nu credeam că pot obține un astfel de corp. Ilona m-a ajutat să-mi depășesc limitele și
                  să-mi transform complet fizicul."
                </blockquote>
                <p className="mt-4 font-semibold">Elena M.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimoniale">Vezi Mai Multe Transformări</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Snippet Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ultimele Articole</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sfaturi, informații și inspirație pentru călătoria ta fitness
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <Card className="flex h-full flex-col">
              <CardHeader className="p-0">
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Articol Blog"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <Badge className="mb-2">Nutriție</Badge>
                <CardTitle className="mb-2 text-xl">5 Mituri Despre Nutriția pentru Creștere Musculară</CardTitle>
                <CardDescription>
                  Descoperă adevărul din spatele celor mai comune mituri despre alimentația pentru dezvoltarea masei
                  musculare.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="/blog/mituri-nutritie-crestere-musculara">Citește Articolul</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Blog Post 2 */}
            <Card className="flex h-full flex-col">
              <CardHeader className="p-0">
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Articol Blog"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <Badge className="mb-2">Antrenament</Badge>
                <CardTitle className="mb-2 text-xl">Ghid Complet pentru Antrenamentul de Forță pentru Femei</CardTitle>
                <CardDescription>
                  Tot ce trebuie să știi despre antrenamentul cu greutăți pentru femei, de la începători la avansați.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="/blog/ghid-antrenament-forta-femei">Citește Articolul</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Blog Post 3 */}
            <Card className="flex h-full flex-col">
              <CardHeader className="p-0">
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Articol Blog"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <Badge className="mb-2">Competiții</Badge>
                <CardTitle className="mb-2 text-xl">
                  Cum să te Pregătești pentru Prima ta Competiție de Fitness
                </CardTitle>
                <CardDescription>
                  Sfaturi esențiale pentru debutanții în competițiile de fitness și bodybuilding.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="/blog/pregatire-prima-competitie-fitness">Citește Articolul</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Mergi La Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Descarcă Ghidul Gratuit</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                "10 Strategii Dovedite pentru Accelerarea Metabolismului și Arderea Grăsimilor"
              </p>
            </div>
            <div className="mt-8">
              <NewsletterForm title="" description="" buttonText="Descarcă Acum" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Prin înscriere, ești de acord cu{" "}
              <Link href="/politica-confidentialitate" className="underline">
                Politica de Confidențialitate
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}


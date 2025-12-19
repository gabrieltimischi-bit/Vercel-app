import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: "mituri-nutritie-crestere-musculara",
    title: "5 Mituri Despre Nutriția pentru Creștere Musculară",
    excerpt:
      "Descoperă adevărul din spatele celor mai comune mituri despre alimentația pentru dezvoltarea masei musculare.",
    category: "Nutriție",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 martie 2025",
    readTime: "8 min",
  },
  {
    id: 2,
    slug: "ghid-antrenament-forta-femei",
    title: "Ghid Complet pentru Antrenamentul de Forță pentru Femei",
    excerpt: "Tot ce trebuie să știi despre antrenamentul cu greutăți pentru femei, de la începători la avansați.",
    category: "Antrenament",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 martie 2025",
    readTime: "12 min",
  },
  {
    id: 3,
    slug: "pregatire-prima-competitie-fitness",
    title: "Cum să te Pregătești pentru Prima ta Competiție de Fitness",
    excerpt: "Sfaturi esențiale pentru debutanții în competițiile de fitness și bodybuilding.",
    category: "Competiții",
    image: "/placeholder.svg?height=400&width=600",
    date: "5 martie 2025",
    readTime: "10 min",
  },
  {
    id: 4,
    slug: "importanta-somnului-recuperare-musculara",
    title: "Importanța Somnului în Recuperarea Musculară",
    excerpt:
      "De ce somnul de calitate este la fel de important ca antrenamentul și nutriția pentru dezvoltarea musculară.",
    category: "Recuperare",
    image: "/placeholder.svg?height=400&width=600",
    date: "28 februarie 2025",
    readTime: "7 min",
  },
  {
    id: 5,
    slug: "retete-sanatoase-bogate-proteine",
    title: "10 Rețete Sănătoase Bogate în Proteine",
    excerpt: "Rețete delicioase și ușor de preparat pentru a-ți susține obiectivele de fitness.",
    category: "Nutriție",
    image: "/placeholder.svg?height=400&width=600",
    date: "20 februarie 2025",
    readTime: "9 min",
  },
  {
    id: 6,
    slug: "depasirea-platourilor-antrenament",
    title: "Strategii pentru Depășirea Platourilor în Antrenament",
    excerpt: "Tehnici dovedite pentru a depăși blocajele în progresul tău fitness și a continua să evoluezi.",
    category: "Antrenament",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 februarie 2025",
    readTime: "11 min",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="IlonaFit Blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Blog</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Sfaturi, informații și inspirație pentru călătoria ta fitness
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Button variant="outline" size="sm" className="rounded-full">
                Toate
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Nutriție
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Antrenament
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Competiții
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Recuperare
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Motivație
              </Button>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Caută articole..." className="pl-10 w-full md:w-[250px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex h-full flex-col">
                <CardHeader className="p-0">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{post.category}</Badge>
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                  </div>
                  <CardTitle className="mb-2 text-xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/blog/${post.slug}`}>Citește Articolul</Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">{post.readTime} citire</span>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Pagina anterioară</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Pagina următoare</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Abonează-te la Newsletter</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Primește cele mai noi articole, sfaturi și oferte direct în inbox-ul tău.
              </p>
            </div>
            <div className="mt-8">
              <NewsletterForm />
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


import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Instagram, Twitter } from "lucide-react"

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "mituri-nutritie-crestere-musculara",
    title: "5 Mituri Despre Nutriția pentru Creștere Musculară",
    excerpt:
      "Descoperă adevărul din spatele celor mai comune mituri despre alimentația pentru dezvoltarea masei musculare.",
    category: "Nutriție",
    image: "/placeholder.svg?height=600&width=1200",
    date: "15 martie 2025",
    readTime: "8 min",
    author: {
      name: "Ilona Timischi",
      image: "/placeholder.svg?height=100&width=100",
      title: "Antrenor Personal & Nutriționist",
    },
    content: `
      <p>Când vine vorba de construirea masei musculare, există numeroase mituri și concepții greșite care continuă să circule în comunitatea fitness. Aceste informații eronate pot duce la confuzie și pot împiedica progresul multora care își doresc să-și dezvolte musculatura. În acest articol, voi demonta 5 dintre cele mai comune mituri despre nutriția pentru creștere musculară.</p>
      
      <h2>Mitul #1: Trebuie să consumi proteine imediat după antrenament (în fereastra anabolică)</h2>
      
      <p>Mulți sportivi cred că există o "fereastră anabolică" de 30-60 de minute după antrenament în care trebuie neapărat să consume proteine pentru a maximiza creșterea musculară. Deși consumul de proteine după antrenament este benefic, cercetările recente arată că această fereastră este mult mai largă decât se credea inițial.</p>
      
      <p>Adevărul: Consumul total de proteine pe parcursul zilei este mai important decât momentul exact al consumului. Atât timp cât consumi suficiente proteine în decursul zilei (aproximativ 1.6-2.2g per kg de greutate corporală pentru cei care doresc să crească în masă musculară), vei obține rezultate bune.</p>
      
      <h2>Mitul #2: Ai nevoie de suplimente pentru a construi mușchi</h2>
      
      <p>Industria suplimentelor este una enormă și adesea promovează ideea că ai nevoie de diverse produse pentru a obține rezultate semnificative.</p>
      
      <p>Adevărul: Deși unele suplimente pot fi benefice (precum proteina din zer, creatina sau cafeina), acestea nu sunt esențiale. Poți construi masă musculară semnificativă doar cu alimente întregi, de calitate. Suplimentele sunt exact ce spune numele - adăugiri la o dietă deja solidă, nu înlocuitori.</p>
      
      <h2>Mitul #3: Trebuie să mănânci la fiecare 2-3 ore pentru a menține anabolismul</h2>
      
      <p>Mulți sportivi cred că trebuie să mănânce frecvent pentru a menține corpul într-o stare anabolică constantă și pentru a preveni catabolismul (degradarea musculară).</p>
      
      <p>Adevărul: Frecvența meselor are un impact minim asupra metabolismului sau creșterii musculare. Ce contează cu adevărat este aportul total de calorii și macronutrienți pe parcursul zilei. Unii sportivi obțin rezultate excelente cu 3 mese pe zi, în timp ce alții preferă 5-6 mese mai mici. Alege frecvența care se potrivește cel mai bine stilului tău de viață.</p>
      
      <h2>Mitul #4: Carbohidrații sunt dușmanii tăi</h2>
      
      <p>În era dietelor low-carb și keto, carbohidrații au fost demonizați și mulți sportivi îi evită în încercarea de a rămâne slabi în timp ce construiesc mușchi.</p>
      
      <p>Adevărul: Carbohidrații sunt de fapt foarte importanți pentru performanța în antrenamentele de forță și pentru recuperare. Ei refac glicogenul muscular (rezervele de energie din mușchi) și stimulează eliberarea de insulină, un hormon anabolic care ajută la transportul nutrienților în celulele musculare. Pentru majoritatea celor care doresc să crească în masă musculară, o dietă moderată sau chiar bogată în carbohidrați este benefică.</p>
      
      <h2>Mitul #5: Ai nevoie de un surplus caloric masiv pentru a construi mușchi</h2>
      
      <p>Mulți începători adoptă abordarea "bulk" tradițională, consumând un surplus caloric foarte mare în speranța că vor construi mușchi mai repede.</p>
      
      <p>Adevărul: Un surplus caloric moderat (aproximativ 200-300 calorii peste necesarul de întreținere) este suficient pentru a maximiza creșterea musculară pentru majoritatea oamenilor. Un surplus prea mare va duce la acumularea de grăsime în exces, fără beneficii suplimentare pentru dezvoltarea musculară. Excepție fac persoanele foarte slabe sau cei cu metabolism foarte rapid, care pot beneficia de un surplus ceva mai mare.</p>
      
      <h2>Concluzie</h2>
      
      <p>Nutriția pentru creșterea musculară nu trebuie să fie complicată. Concentrează-te pe principiile de bază: consumă suficiente proteine, nu neglija carbohidrații, menține un surplus caloric moderat, și asigură-te că dieta ta este bazată pe alimente întregi, nutritive. Suplimentele pot ajuta, dar nu sunt esențiale, iar timing-ul meselor ar trebui să se potrivească stilului tău de viață, nu invers.</p>
      
      <p>Dacă ai întrebări specifice despre cum să-ți adaptezi nutriția pentru obiectivele tale, nu ezita să mă contactezi pentru o consultație personalizată.</p>
    `,
    relatedPosts: [
      {
        slug: "importanta-somnului-recuperare-musculara",
        title: "Importanța Somnului în Recuperarea Musculară",
        image: "/placeholder.svg?height=400&width=600",
        category: "Recuperare",
      },
      {
        slug: "retete-sanatoase-bogate-proteine",
        title: "10 Rețete Sănătoase Bogate în Proteine",
        image: "/placeholder.svg?height=400&width=600",
        category: "Nutriție",
      },
    ],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl max-w-4xl">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{post.readTime} citire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Author Info */}
            <div className="mb-8 flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.image} alt={post.author.name} />
                <AvatarFallback>IT</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.title}</div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Share Links */}
            <div className="mt-12 border-t pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-lg font-bold">Distribuie acest articol:</div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Share on Facebook">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Share on Twitter">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Share on Instagram">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold mb-8">Articole Similare</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {post.relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <Badge className="mb-2">{relatedPost.category}</Badge>
                        <h3 className="text-xl font-bold">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h3>
                      </div>
                      <Button asChild variant="link" className="px-0 mt-4 justify-start">
                        <Link href={`/blog/${relatedPost.slug}`}>Citește Articolul</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Vrei să afli mai multe?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Programează o consultație personalizată pentru a discuta despre obiectivele tale fitness și nutriționale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Programează o Consultație</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Înapoi la Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


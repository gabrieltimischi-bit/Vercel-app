import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Transformări IlonaFit"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Transformări Reale</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Rezultate și experiențe ale clienților care au ales să-și transforme viața cu IlonaFit
          </p>
        </div>
      </section>

      {/* Testimonials Filter */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-2">Rezultate Dovedite</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Transformări de Succes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descoperă poveștile de succes ale clienților care au obținut rezultate remarcabile prin programele
              IlonaFit
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="toate" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="toate">Toate</TabsTrigger>
                  <TabsTrigger value="pierdere-grasime">Pierdere Grăsime</TabsTrigger>
                  <TabsTrigger value="masa-musculara">Masă Musculară</TabsTrigger>
                  <TabsTrigger value="competitii">Competiții</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="toate" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Testimonial 1 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Pierdere Grăsime</Badge>
                            <h3 className="mt-2 text-xl font-bold">Maria D.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">6 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Am pierdut 15 kg în 6 luni cu programul Ilonei. Abordarea ei personalizată și suportul constant
                        au făcut toată diferența."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 32 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Nutriție & Antrenament
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 2 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Masă Musculară</Badge>
                            <h3 className="mt-2 text-xl font-bold">Alexandru P.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">8 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Am câștigat 8 kg de masă musculară și am redus procentul de grăsime corporală cu 5%. Ilona a
                        știut exact cum să adapteze programul pentru a-mi atinge obiectivele."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 28 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Antrenament Online
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 3 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Competiții</Badge>
                            <h3 className="mt-2 text-xl font-bold">Elena M.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">12 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Cu ajutorul Ilonei am reușit să câștig primul meu concurs de bikini fitness. Pregătirea a fost
                        intensă, dar rezultatele au depășit toate așteptările."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 26 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Pregătire Competiții
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 4 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Pierdere Grăsime</Badge>
                            <h3 className="mt-2 text-xl font-bold">Mihai R.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">4 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "La 45 de ani, nu credeam că pot obține un astfel de corp. Ilona m-a ajutat să-mi depășesc
                        limitele și să-mi transform complet fizicul."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 45 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Pachet Complet
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 5 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Masă Musculară</Badge>
                            <h3 className="mt-2 text-xl font-bold">Andrei C.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">10 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Eram slab și fără formă când am început. Acum, după 10 luni de antrenament cu Ilona, am un
                        fizic de care sunt mândru și o încredere în sine pe care nu am avut-o niciodată."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 24 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Antrenament & Nutriție
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial 6 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Competiții</Badge>
                            <h3 className="mt-2 text-xl font-bold">Cristina V.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">14 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "De la o persoană obișnuită la sportivă de competiție în mai puțin de un an și jumătate. Ilona
                        nu doar că m-a antrenat, dar m-a inspirat și motivat în fiecare zi."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 29 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Pregătire Competiții
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="pierdere-grasime" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Filtered testimonials for weight loss would go here */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Pierdere Grăsime</Badge>
                            <h3 className="mt-2 text-xl font-bold">Maria D.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">6 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Am pierdut 15 kg în 6 luni cu programul Ilonei. Abordarea ei personalizată și suportul constant
                        au făcut toată diferența."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 32 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Nutriție & Antrenament
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Pierdere Grăsime</Badge>
                            <h3 className="mt-2 text-xl font-bold">Mihai R.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">4 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "La 45 de ani, nu credeam că pot obține un astfel de corp. Ilona m-a ajutat să-mi depășesc
                        limitele și să-mi transform complet fizicul."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 45 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Pachet Complet
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="masa-musculara" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Filtered testimonials for muscle gain would go here */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Masă Musculară</Badge>
                            <h3 className="mt-2 text-xl font-bold">Alexandru P.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">8 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Am câștigat 8 kg de masă musculară și am redus procentul de grăsime corporală cu 5%. Ilona a
                        știut exact cum să adapteze programul pentru a-mi atinge obiectivele."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 28 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Antrenament Online
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Masă Musculară</Badge>
                            <h3 className="mt-2 text-xl font-bold">Andrei C.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">10 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Eram slab și fără formă când am început. Acum, după 10 luni de antrenament cu Ilona, am un
                        fizic de care sunt mândru și o încredere în sine pe care nu am avut-o niciodată."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 24 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Antrenament & Nutriție
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="competitii" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Filtered testimonials for competitions would go here */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Competiții</Badge>
                            <h3 className="mt-2 text-xl font-bold">Elena M.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">12 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "Cu ajutorul Ilonei am reușit să câștig primul meu concurs de bikini fitness. Pregătirea a fost
                        intensă, dar rezultatele au depășit toate așteptările."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 26 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Pregătire Competiții
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            alt="Transformare Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Badge>Competiții</Badge>
                            <h3 className="mt-2 text-xl font-bold">Cristina V.</h3>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Rezultate în:</p>
                            <p className="font-bold">14 luni</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "De la o persoană obișnuită la sportivă de competiție în mai puțin de un an și jumătate. Ilona
                        nu doar că m-a antrenat, dar m-a inspirat și motivat în fiecare zi."
                      </blockquote>
                      <div className="mt-4 flex justify-between text-sm">
                        <span>
                          <strong>Vârstă:</strong> 29 ani
                        </span>
                        <span>
                          <strong>Program:</strong> Pregătire Competiții
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Testimoniale Video</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ascultă direct de la clienții mei despre experiența lor și rezultatele obținute
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Video Testimonial 1 */}
            <div className="rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video Testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Ana M. - Transformare Completă</h3>
                <p className="text-sm text-muted-foreground">Pierdere de 20kg în 8 luni</p>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video Testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Radu S. - Pregătire Competiție</h3>
                <p className="text-sm text-muted-foreground">Locul 2 la Campionatul Național</p>
              </div>
            </div>

            {/* Video Testimonial 3 */}
            <div className="rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Video Testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Diana F. - Nutriție Personalizată</h3>
                <p className="text-sm text-muted-foreground">Transformare lifestyle și sănătate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Vrei să fii următoarea poveste de succes?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transformarea ta începe cu un singur pas. Contactează-mă astăzi pentru a discuta despre obiectivele tale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Programează o Consultație</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/servicii">Vezi Serviciile</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


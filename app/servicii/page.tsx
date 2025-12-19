import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="IlonaFit Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Servicii</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Programe personalizate pentru a te ajuta să-ți atingi obiectivele fitness
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-2">Servicii Personalizate</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Cum Te Pot Ajuta</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fiecare program este creat special pentru tine, ținând cont de obiectivele, nevoile și stilul tău de
              viață.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
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
                <p className="mb-4">
                  Programe de antrenament adaptate nevoilor și obiectivelor tale, cu suport continuu și ajustări
                  periodice pentru rezultate optime.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Include:</strong> Evaluare inițială, program personalizat de antrenament, ajustări
                  săptămânale, suport prin mesaje, monitorizare progres.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="text-center w-full">
                  <span className="text-2xl font-bold">de la 150€</span>
                  <span className="text-sm text-muted-foreground block">pe lună</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/servicii/antrenament-online">Vezi Detalii</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
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
                <p className="mb-4">
                  Pregătire specializată pentru competiții de fitness și bodybuilding, cu planuri detaliate de
                  antrenament, nutriție și prezentare scenică.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Include:</strong> Evaluare detaliată, planificare periodizată, nutriție specifică
                  competițiilor, antrenament de pozare, suport 24/7 în perioada de peak, monitorizare zilnică.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="text-center w-full">
                  <span className="text-2xl font-bold">de la 250€</span>
                  <span className="text-sm text-muted-foreground block">pe lună</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/servicii/pregatire-competitii">Vezi Detalii</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
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
                <p className="mb-4">
                  Planuri nutriționale personalizate pentru pierdere în greutate, creștere musculară sau performanță
                  sportivă, adaptate preferințelor și stilului tău de viață.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Include:</strong> Analiză detaliată a obiceiurilor alimentare, plan nutrițional personalizat,
                  liste de cumpărături, rețete, ajustări periodice, suport prin mesaje.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="text-center w-full">
                  <span className="text-2xl font-bold">de la 100€</span>
                  <span className="text-sm text-muted-foreground block">pe lună</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/servicii/nutritie">Vezi Detalii</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Pachet Complet Transformare"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Pachet Complet Transformare</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">
                  Soluția completă pentru transformarea corporală, combinând antrenament personalizat, nutriție și
                  coaching pentru rezultate maxime.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Include:</strong> Tot ce oferă programele de antrenament și nutriție, plus coaching
                  săptămânal, analize periodice, plan de suplimente (dacă este necesar), acces prioritar.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="text-center w-full">
                  <span className="text-2xl font-bold">de la 200€</span>
                  <span className="text-sm text-muted-foreground block">pe lună</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/servicii/pachet-transformare">Vezi Detalii</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Consultație Unică"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Consultație Unică</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">
                  O sesiune de consultanță pentru a discuta obiectivele tale, a evalua situația actuală și a primi
                  recomandări personalizate.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Include:</strong> Sesiune de 60 de minute (online sau în persoană), evaluare inițială,
                  recomandări personalizate, răspunsuri la întrebări specifice.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="text-center w-full">
                  <span className="text-2xl font-bold">50€</span>
                  <span className="text-sm text-muted-foreground block">consultație unică</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/booking">Programează Acum</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Antrenament Personal (Buzău)"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Antrenament Personal (Buzău)</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">
                  Sesiuni de antrenament personal one-on-one în Buzău, pentru cei care preferă îndrumarea directă și
                  motivația în persoană.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Include:</strong> Sesiuni de antrenament personal, program personalizat, monitorizare în timp
                  real, corecții de tehnică, motivație directă.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="text-center w-full">
                  <span className="text-2xl font-bold">de la 30€</span>
                  <span className="text-sm text-muted-foreground block">per sesiune</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/servicii/antrenament-personal">Vezi Detalii</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Cum Funcționează</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Procesul meu de lucru este simplu și eficient, conceput pentru a te ajuta să obții rezultate cât mai
              rapid.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Consultație Inițială</h3>
              <p className="mt-2 text-muted-foreground">
                Discutăm despre obiectivele tale, istoricul de antrenament, preferințe și orice limitări medicale.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Plan Personalizat</h3>
              <p className="mt-2 text-muted-foreground">
                Creez un program complet personalizat de antrenament și/sau nutriție adaptat nevoilor tale.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Implementare & Suport</h3>
              <p className="mt-2 text-muted-foreground">
                Începi programul cu suportul meu constant, răspunsuri la întrebări și ajustări când este necesar.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                4
              </div>
              <h3 className="mt-4 text-xl font-bold">Monitorizare & Ajustare</h3>
              <p className="mt-2 text-muted-foreground">
                Monitorizăm progresul regulat și ajustăm programul pentru a asigura rezultate continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center">Întrebări Frecvente</h2>
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cât timp durează să văd rezultate?</h3>
                <p className="text-muted-foreground">
                  Rezultatele variază în funcție de obiective, punctul de plecare și consistență. De obicei, schimbările
                  vizibile apar în 4-8 săptămâni, cu transformări semnificative în 3-6 luni de antrenament și nutriție
                  consecventă.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Am nevoie de acces la o sală de fitness?</h3>
                <p className="text-muted-foreground">
                  Depinde de obiectivele tale. Pentru rezultate optime în dezvoltarea musculară, accesul la o sală cu
                  echipament de bază este recomandat. Totuși, pot adapta programe și pentru antrenament acasă cu
                  echipament minim.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cum primesc programele și cum comunicăm?</h3>
                <p className="text-muted-foreground">
                  Programele sunt livrate prin email sau prin portalul clienților. Comunicăm regulat prin mesaje, email
                  sau apeluri video, în funcție de pachetul ales și preferințele tale.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Pot anula sau întrerupe un program?</h3>
                <p className="text-muted-foreground">
                  Da, programele lunare pot fi anulate cu un preaviz de 7 zile înainte de următoarea reînnoire. Pentru
                  pachetele pe termen mai lung, există politici specifice detaliate în termenii și condițiile
                  serviciului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Pregătit să începi transformarea?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alege serviciul care ți se potrivește sau programează o consultație gratuită pentru a discuta despre
              obiectivele tale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Programează o Consultație</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contactează-mă</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


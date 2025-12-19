import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

// This would typically come from a CMS or database
const services = [
  {
    slug: "antrenament-online",
    title: "Antrenament Online Personalizat",
    description:
      "Programe de antrenament adaptate nevoilor și obiectivelor tale, cu suport continuu și ajustări periodice pentru rezultate optime.",
    longDescription:
      "Programul de antrenament online personalizat este soluția perfectă pentru cei care doresc îndrumare profesională, dar preferă flexibilitatea de a se antrena când și unde doresc. Bazat pe o evaluare detaliată a obiectivelor, experienței și posibilelor limitări, creez un program complet adaptat nevoilor tale specifice. Programul include exerciții detaliate, seturi, repetări, și tehnici avansate pentru a maximiza rezultatele. Prin monitorizare constantă și ajustări periodice, asigur progresul continuu și depășirea platourilor.",
    image: "/placeholder.svg?height=600&width=1200",
    price: "de la 150€ pe lună",
    features: [
      "Evaluare inițială completă",
      "Program personalizat de antrenament",
      "Videoclipuri demonstrative pentru fiecare exercițiu",
      "Ajustări săptămânale bazate pe feedback",
      "Suport prin mesaje (răspuns în 24h)",
      "Monitorizare progres",
      "Acces la portalul clienților",
      "Recomandări de suplimente (dacă este necesar)",
    ],
    packages: [
      {
        name: "Basic",
        price: "150€",
        duration: "pe lună",
        features: [
          "Program personalizat de antrenament",
          "Ajustări la fiecare 2 săptămâni",
          "Suport prin email (răspuns în 48h)",
          "Monitorizare progres lunar",
        ],
      },
      {
        name: "Premium",
        price: "200€",
        duration: "pe lună",
        features: [
          "Program personalizat de antrenament",
          "Ajustări săptămânale",
          "Suport prioritar prin mesaje (răspuns în 24h)",
          "Monitorizare progres săptămânal",
          "1 apel video lunar (30 min)",
          "Plan nutrițional de bază",
        ],
      },
      {
        name: "VIP",
        price: "300€",
        duration: "pe lună",
        features: [
          "Program personalizat de antrenament",
          "Ajustări în timp real",
          "Suport nelimitat prin mesaje (răspuns în 12h)",
          "Monitorizare progres zilnic",
          "2 apeluri video lunare (45 min)",
          "Plan nutrițional detaliat",
          "Acces prioritar pentru întrebări",
        ],
      },
    ],
  },
  {
    slug: "pregatire-competitii",
    title: "Pregătire Competiții Fitness",
    description:
      "Pregătire specializată pentru competiții de fitness și bodybuilding, cu planuri detaliate de antrenament, nutriție și prezentare scenică.",
    longDescription:
      "Programul de pregătire pentru competiții este conceput pentru sportivii care doresc să concureze în evenimente de fitness, bodybuilding, bikini, figure sau physique. Cu experiența mea ca sportivă activă NPC, ofer o abordare completă care acoperă toate aspectele necesare pentru a excela pe scenă. De la periodizarea antrenamentului și manipularea nutriției, până la tehnici de prezentare și strategii pentru ziua competiției, te voi ghida prin întregul proces pentru a-ți maximiza potențialul competitiv.",
    image: "/placeholder.svg?height=600&width=1200",
    price: "de la 250€ pe lună",
    features: [
      "Evaluare detaliată a fizicului și potențialului",
      "Planificare periodizată a antrenamentului",
      "Nutriție specifică competițiilor",
      "Antrenament de pozare și prezentare scenică",
      "Suport 24/7 în perioada de peak",
      "Monitorizare zilnică",
      "Strategii pentru manipularea apei și sodiului",
      "Planificare pentru ziua competiției",
      "Asistență pentru alegerea costumului și aspectului scenic",
    ],
    packages: [
      {
        name: "Standard",
        price: "250€",
        duration: "pe lună",
        features: [
          "Program personalizat de antrenament pentru competiție",
          "Plan nutrițional pentru competiție",
          "Ajustări săptămânale",
          "Suport prin mesaje (răspuns în 24h)",
          "Monitorizare progres săptămânal",
          "Antrenament de pozare de bază",
        ],
      },
      {
        name: "Elite",
        price: "350€",
        duration: "pe lună",
        features: [
          "Program personalizat de antrenament pentru competiție",
          "Plan nutrițional detaliat pentru competiție",
          "Ajustări de 2 ori pe săptămână",
          "Suport prioritar prin mesaje (răspuns în 12h)",
          "Monitorizare progres de 2 ori pe săptămână",
          "Sesiuni de antrenament de pozare avansate",
          "Strategii pentru peak week",
          "1 apel video săptămânal (45 min)",
        ],
      },
      {
        name: "Pro",
        price: "500€",
        duration: "pe lună",
        features: [
          "Program personalizat de antrenament pentru competiție",
          "Plan nutrițional detaliat pentru competiție",
          "Ajustări în timp real",
          "Suport 24/7 în perioada de peak",
          "Monitorizare progres zilnic",
          "Sesiuni de antrenament de pozare avansate",
          "Strategii complete pentru peak week",
          "2 apeluri video săptămânale (45 min)",
          "Asistență în ziua competiției (dacă este posibil geografic)",
        ],
      },
    ],
  },
  {
    slug: "nutritie",
    title: "Consultanță Nutriție",
    description:
      "Planuri nutriționale personalizate pentru pierdere în greutate, creștere musculară sau performanță sportivă, adaptate preferințelor și stilului tău de viață.",
    longDescription:
      "Programul de consultanță nutrițională oferă planuri alimentare personalizate bazate pe obiectivele tale specifice, fie că dorești să pierzi grăsime, să construiești masă musculară, să îmbunătățești performanța sportivă sau să adopți obiceiuri alimentare mai sănătoase. Ca tehnician nutriționist certificat, creez planuri care nu doar funcționează, ci sunt și sustenabile pe termen lung, adaptate preferințelor tale alimentare, stilului de viață și eventualelor restricții. Prin educație nutrițională și ajustări bazate pe feedback, te ajut să dezvolți o relație sănătoasă cu alimentația.",
    image: "/placeholder.svg?height=600&width=1200",
    price: "de la 100€ pe lună",
    features: [
      "Analiză detaliată a obiceiurilor alimentare actuale",
      "Plan nutrițional personalizat",
      "Calcularea macronutrienților și caloriilor",
      "Liste de cumpărături",
      "Rețete și idei de mese",
      "Ajustări periodice bazate pe progres",
      "Educație nutrițională",
      "Suport prin mesaje pentru întrebări",
    ],
    packages: [
      {
        name: "Basic",
        price: "100€",
        duration: "pe lună",
        features: [
          "Plan nutrițional personalizat",
          "Calcularea macronutrienților",
          "Ajustări lunare",
          "Suport prin email (răspuns în 48h)",
          "Liste de cumpărături de bază",
        ],
      },
      {
        name: "Standard",
        price: "150€",
        duration: "pe lună",
        features: [
          "Plan nutrițional personalizat",
          "Calcularea macronutrienților",
          "Ajustări la fiecare 2 săptămâni",
          "Suport prin mesaje (răspuns în 24h)",
          "Liste de cumpărături detaliate",
          "Rețete și idei de mese",
          "1 apel video lunar (30 min)",
        ],
      },
      {
        name: "Premium",
        price: "200€",
        duration: "pe lună",
        features: [
          "Plan nutrițional personalizat",
          "Calcularea macronutrienților",
          "Ajustări săptămânale",
          "Suport prioritar prin mesaje (răspuns în 12h)",
          "Liste de cumpărături detaliate",
          "Rețete și idei de mese personalizate",
          "Planuri pentru mese în oraș",
          "2 apeluri video lunare (30 min)",
        ],
      },
    ],
  },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{service.title}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">{service.description}</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <Badge className="mb-2">Serviciu Personalizat</Badge>
                <h2 className="text-3xl font-bold">Despre {service.title}</h2>
                <div className="mt-6 space-y-4 text-lg">
                  <p>{service.longDescription}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold">Ce include:</h3>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border p-6 bg-primary/5">
                  <h3 className="text-xl font-bold">Preț:</h3>
                  <p className="mt-2 text-2xl font-bold">{service.price}</p>
                  <div className="mt-6">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/booking">Programează o Consultație</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Pachete Disponibile</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alege pachetul care se potrivește cel mai bine nevoilor și obiectivelor tale
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.packages.map((pkg, index) => (
              <div key={index} className="flex flex-col rounded-lg border bg-white shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground"> {pkg.duration}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href="/booking">Alege Pachetul</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Ce Spun Clienții</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Rezultate și experiențe reale ale clienților care au ales acest serviciu
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Alexandru M.</h4>
                  <p className="text-sm text-muted-foreground">Client din 2023</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic">
                "Programul personalizat creat de Ilona a fost exact ce aveam nevoie. În 6 luni am reușit să-mi transform
                complet fizicul și să ating obiective pe care le credeam imposibile."
              </blockquote>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Maria D.</h4>
                  <p className="text-sm text-muted-foreground">Clientă din 2022</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic">
                "Abordarea Ilonei este profesională și eficientă. Apreciez atenția la detalii și modul în care a adaptat
                programul la nevoile și preferințele mele. Rezultatele vorbesc de la sine!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center">Întrebări Frecvente</h2>
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cum începe colaborarea noastră?</h3>
                <p className="text-muted-foreground">
                  După achiziționarea pachetului, vei primi un formular detaliat de evaluare. Pe baza răspunsurilor
                  tale, voi crea programul personalizat și îl voi trimite în 3-5 zile lucrătoare.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cât de des este actualizat programul?</h3>
                <p className="text-muted-foreground">
                  Frecvența actualizărilor depinde de pachetul ales, variind de la ajustări lunare la ajustări
                  săptămânale sau chiar în timp real pentru pachetele premium.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Ce se întâmplă dacă am întrebări între actualizări?</h3>
                <p className="text-muted-foreground">
                  Toate pachetele includ suport prin mesaje sau email, cu timpi de răspuns variind în funcție de
                  pachetul ales. Sunt aici să te ajut pe tot parcursul călătoriei tale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Pregătit să începi?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fă primul pas către atingerea obiectivelor tale fitness și programează o consultație astăzi.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Programează o Consultație</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Ai Întrebări? Contactează-mă</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Ilona Timischi - Fitness Trainer"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Despre Ilona Timischi</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Antrenor personal certificat, nutriționist și competitoare NPC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left Column - Image */}
            <div className="space-y-8">
              <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=1200&width=800"
                  alt="Ilona Timischi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Ilona Timischi - Competition"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Ilona Timischi - Training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-2">Povestea Mea</Badge>
                <h2 className="text-3xl font-bold md:text-4xl">Pasiunea pentru fitness și transformare</h2>
                <div className="mt-6 space-y-4 text-lg">
                  <p>
                    Călătoria mea în lumea fitness-ului a început acum peste 10 ani, când am descoperit pasiunea pentru
                    antrenamentele cu greutăți și nutriția sportivă. Ceea ce a început ca o dorință personală de
                    transformare s-a dezvoltat într-o carieră dedicată ajutorării altora să-și atingă potențialul maxim.
                  </p>
                  <p>
                    După ani de studiu și practică, am obținut certificări ca antrenor personal prin ISRO Fitness School
                    și am devenit tehnician nutriționist certificat. Experiența mea include atât antrenarea clienților
                    pentru obiective generale de fitness, cât și pregătirea sportivilor pentru competiții de nivel
                    înalt.
                  </p>
                  <p>
                    Ca sportivă activă în competițiile NPC, înțeleg din prima mână provocările și dedicarea necesare
                    pentru a atinge un nivel înalt de dezvoltare fizică și definiție musculară. Această experiență
                    personală îmi permite să ofer clienților mei nu doar cunoștințe teoretice, ci și îndrumări practice
                    bazate pe experiențe reale.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Filozofia Mea</h3>
                <div className="mt-4 space-y-4 text-lg">
                  <p>
                    Cred cu tărie că transformarea fizică durabilă începe cu educația și înțelegerea propriului corp.
                    Abordarea mea combină știința nutriției și antrenamentului cu personalizarea pentru nevoile și
                    obiectivele unice ale fiecărui client.
                  </p>
                  <p>
                    Nu există soluții universale în fitness. De aceea, fiecare program pe care îl creez este adaptat
                    individual, ținând cont de istoricul medical, experiența anterioară, preferințele și stilul de viață
                    al clientului.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Certificări și Realizări</h3>
                <ul className="mt-4 space-y-2 text-lg">
                  <li>• Antrenor Personal Certificat - ISRO Fitness School</li>
                  <li>• Tehnician Nutriționist Certificat</li>
                  <li>• Competitoare activă NPC</li>
                  <li>• Specializare în Pregătirea pentru Competiții de Fitness</li>
                  <li>• Peste 100 de clienți transformați cu succes</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/contact">Programează o Consultație</Link>
                </Button>
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
              Indiferent dacă obiectivul tău este pierderea în greutate, creșterea masei musculare sau pregătirea pentru
              o competiție, sunt aici să te ghidez în fiecare pas al călătoriei tale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contactează-mă</Link>
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


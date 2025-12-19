import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClientLoginForm from "@/components/client-login-form"
import ClientRegisterForm from "@/components/client-register-form"

export default function ClientPortalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Portal Clienți</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Accesează programele tale personalizate, comunică direct cu Ilona și urmărește-ți progresul.
            </p>
          </div>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-md">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Autentificare</TabsTrigger>
                <TabsTrigger value="register">Înregistrare</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Autentificare</CardTitle>
                    <CardDescription>
                      Intră în contul tău pentru a accesa programele și resursele personalizate.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ClientLoginForm />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2">
                    <div className="text-sm text-muted-foreground">
                      Ai uitat parola?{" "}
                      <Link href="/client-portal/reset-password" className="text-primary hover:underline">
                        Resetează parola
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Înregistrare</CardTitle>
                    <CardDescription>Creează un cont nou pentru a accesa portalul clienților.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ClientRegisterForm />
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm text-muted-foreground">
                      Prin înregistrare, ești de acord cu{" "}
                      <Link href="/termeni-conditii" className="text-primary hover:underline">
                        Termenii și Condițiile
                      </Link>{" "}
                      și{" "}
                      <Link href="/politica-confidentialitate" className="text-primary hover:underline">
                        Politica de Confidențialitate
                      </Link>
                      .
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Beneficiile Portalului Clienților</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Portalul clienților IlonaFit îți oferă acces la o serie de funcționalități pentru a-ți optimiza
              experiența.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
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
                  className="h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Comunicare Directă</h3>
              <p className="mt-2 text-muted-foreground">
                Comunică direct cu Ilona prin sistemul de mesagerie integrat pentru întrebări și feedback.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
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
                  className="h-6 w-6"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Acces la Programe</h3>
              <p className="mt-2 text-muted-foreground">
                Accesează programele tale de antrenament și nutriție în orice moment, de pe orice dispozitiv.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
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
                  className="h-6 w-6"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Programare Ușoară</h3>
              <p className="mt-2 text-muted-foreground">
                Programează consultații și sesiuni de follow-up direct din portal, cu notificări automate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center">Întrebări Frecvente</h2>
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cum pot accesa programele mele?</h3>
                <p className="text-muted-foreground">
                  După autentificare, vei găsi programele tale în secțiunea "Programele Mele" din dashboard. Poți
                  descărca, vizualiza online sau imprima materialele.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cât de repede voi primi răspuns la mesaje?</h3>
                <p className="text-muted-foreground">
                  Timpul de răspuns variază în funcție de pachetul tău, dar în general vei primi răspuns în 24-48 de ore
                  în zilele lucrătoare.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Pot accesa portalul de pe telefonul mobil?</h3>
                <p className="text-muted-foreground">
                  Da, portalul clienților este complet responsiv și poate fi accesat de pe orice dispozitiv: desktop,
                  tabletă sau telefon mobil.
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
            <h2 className="text-3xl font-bold">Nu ești încă client?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descoperă serviciile IlonaFit și începe-ți călătoria de transformare astăzi.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/servicii">Vezi Serviciile</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


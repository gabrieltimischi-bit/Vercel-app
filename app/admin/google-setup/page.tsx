import GoogleCalendarSetup from "@/components/google-calendar-setup"

export default function GoogleSetupPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Configurare Google API</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Conectează-ți contul Google Calendar și Google Sheets pentru a gestiona programările și contactele.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <GoogleCalendarSetup />
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Instrucțiuni de Configurare</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Creează un Proiect Google Cloud</h3>
                <p className="text-muted-foreground">
                  Accesează{" "}
                  <a
                    href="https://console.cloud.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Cloud Console
                  </a>{" "}
                  și creează un nou proiect.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">2. Activează API-urile Necesare</h3>
                <p className="text-muted-foreground">
                  În proiectul tău, activează Google Calendar API și Google Sheets API din secțiunea "API & Services".
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">3. Creează un Cont de Serviciu</h3>
                <p className="text-muted-foreground">
                  În secțiunea "IAM & Admin" > "Service Accounts", creează un nou cont de serviciu cu rolurile necesare
                  pentru Calendar și Sheets.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">4. Generează o Cheie Privată</h3>
                <p className="text-muted-foreground">
                  Pentru contul de serviciu creat, generează o cheie privată în format JSON. Deschide fișierul și
                  copiază câmpurile "client_email" și "private_key" în formularul de mai sus.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">5. Partajează Calendarul și Foaia de Calcul</h3>
                <p className="text-muted-foreground">
                  Partajează calendarul Google și foaia de calcul cu adresa de email a contului de serviciu, oferindu-i
                  permisiuni de editare.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">6. Pregătește Foaia de Calcul</h3>
                <p className="text-muted-foreground">
                  Creează două foi în documentul Google Sheets: una numită "Contacts" cu coloanele A-F și una numită
                  "Bookings" cu coloanele A-G.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


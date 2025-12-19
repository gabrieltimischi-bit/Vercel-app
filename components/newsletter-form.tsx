"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface NewsletterFormProps {
  title?: string
  description?: string
  buttonText?: string
  className?: string
}

export default function NewsletterForm({
  title = "Abonează-te la Newsletter",
  description = "Primește cele mai noi articole, sfaturi și oferte direct în inbox-ul tău.",
  buttonText = "Abonează-te",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!email || !email.includes("@") || !email.includes(".")) {
      setErrorMessage("Te rugăm să introduci o adresă de email validă.")
      toast({
        title: "Eroare",
        description: "Te rugăm să introduci o adresă de email validă.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.details || "Failed to subscribe to newsletter")
      }

      // Show success message
      setIsSuccess(true)
      toast({
        title: "Abonare reușită!",
        description: "Îți mulțumim pentru abonare. Vei primi cele mai noi actualizări în inbox-ul tău.",
      })

      // Reset form
      setEmail("")
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setErrorMessage(error.message || "Nu am putut procesa abonarea ta. Te rugăm să încerci din nou mai târziu.")
      toast({
        title: "Eroare",
        description: error.message || "Nu am putut procesa abonarea ta. Te rugăm să încerci din nou mai târziu.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-800 text-lg font-semibold">Abonare reușită!</AlertTitle>
        <AlertDescription className="text-green-700">
          Îți mulțumim pentru abonare. Vei primi cele mai noi actualizări în inbox-ul tău.
        </AlertDescription>
        <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => setIsSuccess(false)}>
          Abonează altă adresă
        </Button>
      </Alert>
    )
  }

  return (
    <div className={className}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-muted-foreground mb-4">{description}</p>}

      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Eroare</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Adresa ta de email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Se procesează...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
    </div>
  )
}


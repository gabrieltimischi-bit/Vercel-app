"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!firstName || !lastName || !email || !subject || !message) {
      setErrorMessage("Te rugăm să completezi toate câmpurile obligatorii.")
      toast({
        title: "Formular incomplet",
        description: "Te rugăm să completezi toate câmpurile obligatorii.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          subject,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.details || "Failed to submit contact form")
      }

      // Show success message
      setIsSuccess(true)
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Îți mulțumim pentru mesaj. Voi reveni cu un răspuns în cel mai scurt timp posibil.",
      })

      // Reset form
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setErrorMessage(
        error.message || "Nu am putut trimite mesajul tău. Te rugăm să încerci din nou sau să ne contactezi telefonic.",
      )
      toast({
        title: "Eroare",
        description:
          error.message ||
          "Nu am putut trimite mesajul tău. Te rugăm să încerci din nou sau să ne contactezi telefonic.",
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
        <AlertTitle className="text-green-800 text-lg font-semibold">Mesaj trimis cu succes!</AlertTitle>
        <AlertDescription className="text-green-700">
          Îți mulțumim pentru mesaj. Voi reveni cu un răspuns în cel mai scurt timp posibil.
        </AlertDescription>
        <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => setIsSuccess(false)}>
          Trimite alt mesaj
        </Button>
      </Alert>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {errorMessage && (
        <Alert variant="destructive">
          <AlertTitle>Eroare</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-medium">
            Prenume
          </label>
          <Input
            id="first-name"
            placeholder="Prenumele tău"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-medium">
            Nume
          </label>
          <Input
            id="last-name"
            placeholder="Numele tău"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="email@exemplu.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Telefon (opțional)
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+40 700 000 000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subiect
        </label>
        <Input
          id="subject"
          placeholder="Motivul contactării"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mesaj
        </label>
        <Textarea
          id="message"
          placeholder="Detaliile mesajului tău..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Se trimite...
          </>
        ) : (
          "Trimite Mesajul"
        )}
      </Button>
    </form>
  )
}


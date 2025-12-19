"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function GoogleCalendarSetup() {
  const [clientEmail, setClientEmail] = useState("")
  const [privateKey, setPrivateKey] = useState("")
  const [calendarId, setCalendarId] = useState("")
  const [sheetId, setSheetId] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!clientEmail || !privateKey || !calendarId || !sheetId) {
      toast({
        title: "Formular incomplet",
        description: "Te rugăm să completezi toate câmpurile.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // In a real implementation, this would securely store the credentials
      // For demo purposes, we'll just show a success message

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Configurare reușită!",
        description: "Credențialele Google API au fost salvate cu succes.",
      })

      // In a real app, you would store these in environment variables or a secure database
      console.log("Credentials would be stored securely")
    } catch (error) {
      console.error("Error saving Google API credentials:", error)
      toast({
        title: "Eroare",
        description: "Nu am putut salva credențialele. Te rugăm să încerci din nou.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Configurare Google Calendar & Sheets</CardTitle>
        <CardDescription>
          Introdu credențialele Google API pentru a conecta calendarul și foile de calcul.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="client-email">Email Client Service Account</Label>
            <Input
              id="client-email"
              placeholder="your-service-account@project-id.iam.gserviceaccount.com"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
            />
            <p className="text-sm text-muted-foreground">Emailul contului de serviciu Google Cloud.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="private-key">Cheie Privată</Label>
            <Textarea
              id="private-key"
              placeholder="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
              rows={5}
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              required
            />
            <p className="text-sm text-muted-foreground">Cheia privată a contului de serviciu în format PEM.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="calendar-id">ID Calendar</Label>
            <Input
              id="calendar-id"
              placeholder="your-calendar-id@group.calendar.google.com"
              value={calendarId}
              onChange={(e) => setCalendarId(e.target.value)}
              required
            />
            <p className="text-sm text-muted-foreground">
              ID-ul calendarului Google în care vor fi create evenimentele.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sheet-id">ID Google Sheet</Label>
            <Input
              id="sheet-id"
              placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
              value={sheetId}
              onChange={(e) => setSheetId(e.target.value)}
              required
            />
            <p className="text-sm text-muted-foreground">ID-ul foii de calcul Google în care vor fi salvate datele.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Se salvează...
              </>
            ) : (
              "Salvează Configurația"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}


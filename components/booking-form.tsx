"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, AlertTriangle, CalendarIcon, Clock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [service, setService] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [bookingDetails, setBookingDetails] = useState<any>(null)
  const [warnings, setWarnings] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { toast } = useToast()

  // Helper function to format date in YYYY-MM-DD format
  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // Fetch available time slots when date changes
  const fetchAvailableSlots = async () => {
    if (!date) return

    setIsLoading(true)
    setTimeSlot("") // Reset time slot when date changes

    try {
      // FIXED: Format the date correctly to ensure we're checking the right day
      const formattedDate = formatDate(date)
      console.log(`Fetching available slots for date: ${formattedDate}`)

      // Include service type in the request if selected
      const serviceParam = service ? `&service=${service}` : ""
      const response = await fetch(`/api/available-slots?date=${formattedDate}${serviceParam}`)

      if (response.ok) {
        const data = await response.json()
        if (data.availableSlots && data.availableSlots.length > 0) {
          setAvailableSlots(data.availableSlots)
          return
        }
      }

      // Fallback to default slots
      const defaultSlots = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]
      setAvailableSlots(defaultSlots)
    } catch (error) {
      console.error("Error in fetchAvailableSlots:", error)
      // Fallback to default slots on error
      const defaultSlots = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]
      setAvailableSlots(defaultSlots)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAvailableSlots()
  }, [date, service])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")
    setWarnings(null)

    if (!date || !timeSlot || !service || !name || !email || !phone) {
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
      // FIXED: Format date consistently
      const formattedDate = formatDate(date)
      console.log(`Submitting booking for date: ${formattedDate}, time: ${timeSlot}`)

      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          date: formattedDate,
          time: timeSlot,
          notes,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Special handling for slot no longer available
        if (response.status === 409) {
          // Refresh available slots
          await fetchAvailableSlots()

          throw new Error(data.message || "Această oră nu mai este disponibilă. Te rugăm să alegi o altă oră.")
        }

        throw new Error(data.error || data.details || "Failed to book appointment")
      }

      // Check for warnings
      if (data.warnings) {
        setWarnings(data.warnings)
      }

      // Store booking details for success message
      setBookingDetails({
        name,
        service: getServiceName(service),
        date: formattedDate,
        time: timeSlot,
        duration: data.details?.duration || getServiceDuration(service),
      })

      // Show success message
      setIsSuccess(true)

      toast({
        title: "Rezervare confirmată!",
        description: `Rezervarea ta pentru ${formattedDate} la ora ${timeSlot} a fost înregistrată.`,
      })

      // Reset form
      setDate(undefined)
      setTimeSlot("")
      setService("")
      setName("")
      setEmail("")
      setPhone("")
      setNotes("")
    } catch (error) {
      console.error("Error booking appointment:", error)
      setErrorMessage(
        error.message || "Nu am putut finaliza rezervarea. Te rugăm să încerci din nou sau să ne contactezi telefonic.",
      )
      toast({
        title: "Eroare",
        description:
          error.message ||
          "Nu am putut finaliza rezervarea. Te rugăm să încerci din nou sau să ne contactezi telefonic.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getServiceName = (serviceValue: string) => {
    switch (serviceValue) {
      case "initial":
        return "Consultație Inițială"
      case "nutrition":
        return "Consultație Nutriție"
      case "training":
        return "Consultație Antrenament"
      case "competition":
        return "Consultație Pregătire Competiție"
      default:
        return serviceValue
    }
  }

  const getServiceDuration = (serviceValue: string): number => {
    switch (serviceValue) {
      case "initial":
        return 30
      case "nutrition":
      case "training":
        return 45
      case "competition":
        return 60
      default:
        return 30
    }
  }

  if (isSuccess && bookingDetails) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-green-700">Rezervare Confirmată!</CardTitle>
          <CardDescription>Detaliile rezervării tale</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800 text-lg font-semibold">Rezervare înregistrată cu succes!</AlertTitle>
            <AlertDescription className="text-green-700">
              <p className="mt-2">Îți mulțumim pentru rezervare. Detaliile rezervării tale:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>
                    <strong>Data:</strong> {bookingDetails.date}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    <strong>Ora:</strong> {bookingDetails.time} ({bookingDetails.duration} minute)
                  </span>
                </li>
                <li>
                  <strong>Serviciu:</strong> {bookingDetails.service}
                </li>
                <li>
                  <strong>Nume:</strong> {bookingDetails.name}
                </li>
              </ul>

              <p className="mt-4">
                Te rugăm să notezi aceste detalii în calendarul tău. Te vom contacta cu o zi înainte pentru confirmare.
              </p>
            </AlertDescription>
          </Alert>

          {warnings && (!warnings.calendarEventCreated || !warnings.sheetSaved) && (
            <Alert className="mt-4 bg-yellow-50 border-yellow-200">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-800 text-lg font-semibold">Notă</AlertTitle>
              <AlertDescription className="text-yellow-700">
                <p>Rezervarea ta a fost înregistrată, dar:</p>
                <ul className="mt-2 space-y-1">
                  {!warnings.calendarEventCreated && (
                    <li>- Nu am putut adăuga evenimentul în calendar. Vom face acest lucru manual.</li>
                  )}
                  {!warnings.sheetSaved && (
                    <li>- Nu am putut salva detaliile în baza noastră de date. Vom face acest lucru manual.</li>
                  )}
                </ul>
                <p className="mt-2">Nu este nevoie să faci nimic în plus. Te vom contacta pentru confirmare.</p>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setIsSuccess(false)}>
            Fă o altă rezervare
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Programează o Consultație</CardTitle>
        <CardDescription>Alege data, ora și tipul de consultație care ți se potrivește.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {errorMessage && (
            <Alert variant="destructive">
              <AlertTitle>Eroare</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="service">Tip Consultație</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Selectează tipul de consultație" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="initial">Consultație Inițială (30 min)</SelectItem>
                <SelectItem value="nutrition">Consultație Nutriție (45 min)</SelectItem>
                <SelectItem value="training">Consultație Antrenament (45 min)</SelectItem>
                <SelectItem value="competition">Consultație Pregătire Competiție (60 min)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Data</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
              disabled={(date) => {
                // Disable past dates and Sundays
                const day = date.getDay()
                const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0))
                return day === 0 || isPastDate
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Ora</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot} required disabled={!date || isLoading}>
              <SelectTrigger id="time">
                <SelectValue placeholder={isLoading ? "Se încarcă orele disponibile..." : "Selectează ora"} />
              </SelectTrigger>
              <SelectContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-2">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    <span>Se încarcă...</span>
                  </div>
                ) : availableSlots.length > 0 ? (
                  availableSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))
                ) : (
                  <div className="py-2 text-center text-sm text-muted-foreground">
                    {date ? "Nu există ore disponibile pentru data selectată" : "Selectează o dată mai întâi"}
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nume Complet</Label>
            <Input
              id="name"
              placeholder="Numele tău complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+40 700 000 000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Note (opțional)</Label>
            <Textarea
              id="notes"
              placeholder="Orice informații suplimentare sau întrebări..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !date || !timeSlot || !service || !name || !email || !phone}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Se procesează...
              </>
            ) : (
              "Confirmă Rezervarea"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}


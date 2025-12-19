"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="pr-8 max-w-3xl">
            <h3 className="text-lg font-semibold mb-2">Utilizăm cookie-uri</h3>
            <p className="text-sm text-muted-foreground text-justify">
              Acest site utilizează cookie-uri pentru a îmbunătăți experiența ta. Unele cookie-uri sunt esențiale pentru
              funcționarea site-ului, în timp ce altele ne ajută să îmbunătățim experiența ta prin informații despre
              modul în care este utilizat site-ul.{" "}
              <Link href="/politica-cookies" className="text-primary hover:underline">
                Află mai multe
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
            <Button variant="outline" onClick={acceptEssential}>
              Doar esențiale
            </Button>
            <Button onClick={acceptAll}>Accept toate</Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 md:relative md:right-0 md:top-0"
            onClick={acceptEssential}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Închide</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


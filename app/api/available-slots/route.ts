import { type NextRequest, NextResponse } from "next/server"
import { getAvailableTimeSlots } from "@/lib/google-api"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get("date")
    const service = searchParams.get("service")

    if (!date) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
    }

    console.log(`Fetching available slots for date: ${date}, service: ${service || "any"}`)

    // Parse the date to verify it's correct
    const [year, month, day] = date.split("-").map((num) => Number.parseInt(num, 10))
    console.log(`Parsed date components: year=${year}, month=${month}, day=${day}`)

    // Pass the service type to get accurate availability based on appointment duration
    const availableSlots = await getAvailableTimeSlots(date, service || undefined)

    console.log(`Returning available slots for ${date}: ${availableSlots.join(", ")}`)

    return NextResponse.json({ availableSlots })
  } catch (error) {
    console.error("Error in available-slots API:", error)
    return NextResponse.json({ error: "Failed to fetch available slots", details: error.message }, { status: 500 })
  }
}


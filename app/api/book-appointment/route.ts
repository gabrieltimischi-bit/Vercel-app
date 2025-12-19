import { type NextRequest, NextResponse } from "next/server"
import { createCalendarEvent, saveBookingToSheet, getAvailableTimeSlots } from "@/lib/google-api"
import { getCalendarClient } from "@/lib/google-api"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, time, notes } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    console.log(`Processing booking request for date: ${date}, time: ${time}, service: ${service}`)

    // Get service details
    const serviceName = getServiceName(service)
    const durationMinutes = getServiceDuration(service)
    const serviceColor = getServiceColor(service)

    // FIXED: Create start and end times for the calendar event with proper timezone handling
    // Create date strings with explicit timezone for Romania
    const startDateTimeStr = `${date}T${time}:00+03:00`

    // Calculate end time by adding duration
    const startDateTime = new Date(startDateTimeStr)
    const endDateTime = new Date(startDateTime.getTime() + durationMinutes * 60 * 1000)
    const endDateTimeStr = endDateTime.toISOString()

    console.log(`Appointment start time: ${startDateTimeStr}`)
    console.log(`Appointment end time: ${endDateTimeStr}`)

    let calendarEventId = null
    let calendarEventLink = null
    let sheetSaved = false

    // Try to create calendar event
    try {
      // Create a detailed description for the calendar event
      const description = `
Rezervare pentru ${serviceName}

Client: ${name}
Email: ${email}
Telefon: ${phone}
${
  notes
    ? `
Note: ${notes}`
    : ""
}

Rezervare creată prin sistemul IlonaFit la ${new Date().toLocaleString("ro-RO")}
`.trim()

      // Check if the slot is still available before creating the event
      const availableSlots = await getAvailableTimeSlots(date, service)
      console.log(`Available slots for ${date}: ${availableSlots.join(", ")}`)

      if (!availableSlots.includes(time)) {
        console.log(`Requested time ${time} is not available. Available slots: ${availableSlots.join(", ")}`)
        return NextResponse.json(
          {
            success: false,
            error: "Slot no longer available",
            message: "Această oră nu mai este disponibilă. Te rugăm să alegi o altă oră.",
          },
          { status: 409 },
        ) // 409 Conflict
      }

      // Additional check: verify there are no overlapping appointments
      // Get all events for the time period of this appointment
      const calendar = await getCalendarClient()
      const calendarId = process.env.GOOGLE_CALENDAR_ID

      if (!calendarId) {
        throw new Error("GOOGLE_CALENDAR_ID environment variable is not set")
      }

      // Check for events during the exact time slot we're trying to book
      const eventsResponse = await calendar.events.list({
        calendarId,
        timeMin: startDateTimeStr,
        timeMax: endDateTimeStr,
        singleEvents: true,
        timeZone: "Europe/Bucharest",
      })

      const existingEvents = eventsResponse.data.items || []
      if (existingEvents.length > 0) {
        console.log(`Found ${existingEvents.length} overlapping events during final check`)
        existingEvents.forEach((event) => {
          console.log(
            `Conflicting event: ${event.summary}, starts: ${event.start?.dateTime}, ends: ${event.end?.dateTime}`,
          )
        })

        return NextResponse.json(
          {
            success: false,
            error: "Overlapping appointment detected",
            message: "Această oră a fost rezervată între timp. Te rugăm să alegi o altă oră.",
          },
          { status: 409 },
        )
      }

      // Create the calendar event without sending invitations
      const eventResult = await createCalendarEvent(
        `${serviceName} - ${name}`, // Summary
        description,
        startDateTimeStr,
        endDateTimeStr,
        email,
        name,
        "Buzău, România", // Location
      )

      calendarEventId = eventResult.id
      calendarEventLink = eventResult.htmlLink
      console.log("Calendar event created successfully:", eventResult.id)
    } catch (calendarError) {
      console.error("Error creating calendar event:", calendarError.message)
    }

    // Try to save to Google Sheets
    try {
      await saveBookingToSheet(name, email, phone, service, date, time, calendarEventId)
      sheetSaved = true
    } catch (sheetError) {
      console.error("Error saving to sheet:", sheetError)
    }

    // Return response with all details
    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
      warnings: {
        calendarEventCreated: calendarEventId !== null,
        sheetSaved: sheetSaved,
      },
      details: {
        name,
        email,
        phone,
        service: serviceName,
        date,
        time,
        eventId: calendarEventId,
        duration: durationMinutes,
      },
    })
  } catch (error) {
    console.error("Error booking appointment:", error)
    return NextResponse.json(
      {
        error: "Failed to book appointment",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// Helper functions
function getServiceName(serviceValue: string): string {
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

function getServiceDuration(serviceValue: string): number {
  switch (serviceValue) {
    case "initial":
      return 30 // 30 minutes
    case "nutrition":
    case "training":
      return 45 // 45 minutes
    case "competition":
      return 60 // 60 minutes
    default:
      return 30 // default to 30 minutes
  }
}

// Get color ID for Google Calendar based on service type
function getServiceColor(serviceValue: string): string {
  switch (serviceValue) {
    case "initial":
      return "1" // Blue
    case "nutrition":
      return "2" // Green
    case "training":
      return "4" // Red
    case "competition":
      return "6" // Orange
    default:
      return "1" // Default blue
  }
}


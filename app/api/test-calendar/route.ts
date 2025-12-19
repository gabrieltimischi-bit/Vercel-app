import { type NextRequest, NextResponse } from "next/server"
import { getCalendarClient } from "@/lib/google-api"

export async function GET(request: NextRequest) {
  try {
    // Check if environment variables are set
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const calendarId = process.env.GOOGLE_CALENDAR_ID

    if (!clientEmail || !privateKey || !calendarId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing environment variables",
          missingVars: {
            GOOGLE_CLIENT_EMAIL: !clientEmail,
            GOOGLE_PRIVATE_KEY: !privateKey,
            GOOGLE_CALENDAR_ID: !calendarId,
          },
        },
        { status: 500 },
      )
    }

    // Try to initialize the calendar client
    const calendar = await getCalendarClient()

    // Try to get calendar metadata
    const response = await calendar.calendars.get({
      calendarId: calendarId,
    })

    // Try to create a test event
    const now = new Date()
    const testDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000) // 2 weeks later
    const testEndDate = new Date(testDate.getTime() + 30 * 60 * 1000) // 30 minutes later

    const testEvent = {
      summary: "Test Event - Please Delete",
      description: "This is a test event created to verify calendar write permissions.",
      start: {
        dateTime: testDate.toISOString(),
        timeZone: "Europe/Bucharest",
      },
      end: {
        dateTime: testEndDate.toISOString(),
        timeZone: "Europe/Bucharest",
      },
    }

    const eventResponse = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: testEvent,
      sendUpdates: "none", // Don't send notifications
    })

    // Delete the test event immediately
    await calendar.events.delete({
      calendarId: calendarId,
      eventId: eventResponse.data.id as string,
    })

    return NextResponse.json({
      success: true,
      calendarTitle: response.data.summary,
      timeZone: response.data.timeZone,
      message: "Successfully connected to Google Calendar and created/deleted a test event",
    })
  } catch (error) {
    console.error("Error testing Google Calendar connection:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: "Failed to connect to Google Calendar",
      },
      { status: 500 },
    )
  }
}


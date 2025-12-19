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

    // Step 1: Try to get calendar metadata
    let calendarInfo
    try {
      const response = await calendar.calendars.get({
        calendarId: calendarId,
      })

      calendarInfo = {
        success: true,
        calendarTitle: response.data.summary,
        calendarDescription: response.data.description,
        timeZone: response.data.timeZone,
        accessRole: response.data.accessRole,
      }
    } catch (calendarError) {
      return NextResponse.json(
        {
          success: false,
          stage: "calendar_info",
          error: calendarError.message,
          details: calendarError.response?.data || null,
          message:
            "Failed to get calendar information. Check if the calendar ID is correct and the service account has access.",
        },
        { status: 500 },
      )
    }

    // Step 2: Try to list events (to verify read permissions)
    let eventsInfo
    try {
      const now = new Date()
      const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

      const response = await calendar.events.list({
        calendarId: calendarId,
        timeMin: now.toISOString(),
        timeMax: oneWeekLater.toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      })

      eventsInfo = {
        success: true,
        eventCount: response.data.items?.length || 0,
        nextSyncToken: response.data.nextSyncToken,
      }
    } catch (eventsError) {
      return NextResponse.json(
        {
          success: false,
          stage: "list_events",
          error: eventsError.message,
          details: eventsError.response?.data || null,
          message: "Failed to list events. The service account may not have read access to the calendar.",
          calendarInfo, // Include the successful calendar info
        },
        { status: 500 },
      )
    }

    // Step 3: Try to create a test event
    let testEventInfo
    try {
      const now = new Date()
      // Create a test event 2 weeks in the future
      const twoWeeksLater = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)
      const twoWeeksLaterEnd = new Date(twoWeeksLater.getTime() + 30 * 60 * 1000) // 30 minutes later

      const testEvent = {
        summary: "Test Event - Please Delete",
        description: "This is a test event created to verify calendar write permissions.",
        start: {
          dateTime: twoWeeksLater.toISOString(),
          timeZone: "Europe/Bucharest",
        },
        end: {
          dateTime: twoWeeksLaterEnd.toISOString(),
          timeZone: "Europe/Bucharest",
        },
      }

      const response = await calendar.events.insert({
        calendarId: calendarId,
        requestBody: testEvent,
        sendUpdates: "none", // Don't send notifications
      })

      testEventInfo = {
        success: true,
        eventId: response.data.id,
        eventLink: response.data.htmlLink,
      }

      // Delete the test event immediately
      await calendar.events.delete({
        calendarId: calendarId,
        eventId: response.data.id as string,
      })
    } catch (eventCreateError) {
      return NextResponse.json(
        {
          success: false,
          stage: "create_event",
          error: eventCreateError.message,
          details: eventCreateError.response?.data || null,
          message: "Failed to create a test event. The service account may not have write access to the calendar.",
          calendarInfo,
          eventsInfo,
        },
        { status: 500 },
      )
    }

    // All tests passed
    return NextResponse.json({
      success: true,
      message: "Successfully connected to Google Calendar with full permissions",
      calendarInfo,
      eventsInfo,
      testEventInfo,
      permissions: {
        read: true,
        write: true,
      },
    })
  } catch (error) {
    console.error("Unexpected error testing Google Calendar connection:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
        message: "Failed to connect to Google Calendar due to an unexpected error",
      },
      { status: 500 },
    )
  }
}


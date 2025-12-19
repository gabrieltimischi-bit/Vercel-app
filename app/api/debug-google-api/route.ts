import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"
import { JWT } from "google-auth-library"

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const calendarId = process.env.GOOGLE_CALENDAR_ID
    const sheetId = process.env.GOOGLE_SHEET_ID

    const envStatus = {
      GOOGLE_CLIENT_EMAIL: {
        set: !!clientEmail,
        value: clientEmail ? `${clientEmail.substring(0, 5)}...` : null,
      },
      GOOGLE_PRIVATE_KEY: {
        set: !!privateKey,
        length: privateKey?.length || 0,
        startsCorrectly: privateKey?.startsWith("-----BEGIN PRIVATE KEY-----"),
        endsCorrectly: privateKey?.endsWith("-----END PRIVATE KEY-----"),
        containsNewlines: privateKey?.includes("\n"),
      },
      GOOGLE_CALENDAR_ID: {
        set: !!calendarId,
        value: calendarId ? `${calendarId.substring(0, 5)}...` : null,
      },
      GOOGLE_SHEET_ID: {
        set: !!sheetId,
        value: sheetId ? `${sheetId.substring(0, 5)}...` : null,
      },
    }

    // Try to create JWT client
    let jwtClient = null
    let jwtError = null

    try {
      if (clientEmail && privateKey) {
        jwtClient = new JWT({
          email: clientEmail,
          key: privateKey.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/spreadsheets"],
        })
      }
    } catch (error) {
      jwtError = {
        message: error.message,
        stack: error.stack,
      }
    }

    // Test calendar connection if possible
    let calendarStatus = null
    if (jwtClient && calendarId) {
      try {
        const calendar = google.calendar({ version: "v3", auth: jwtClient })
        const response = await calendar.calendars.get({
          calendarId: calendarId,
        })

        calendarStatus = {
          success: true,
          calendarTitle: response.data.summary,
          timeZone: response.data.timeZone,
        }
      } catch (error) {
        calendarStatus = {
          success: false,
          error: error.message,
          details: error.response?.data || null,
        }
      }
    }

    // Test sheets connection if possible
    let sheetsStatus = null
    if (jwtClient && sheetId) {
      try {
        const sheets = google.sheets({ version: "v4", auth: jwtClient })
        const response = await sheets.spreadsheets.get({
          spreadsheetId: sheetId,
        })

        sheetsStatus = {
          success: true,
          sheetTitle: response.data.properties?.title,
          sheets: response.data.sheets?.map((sheet) => sheet.properties?.title),
        }
      } catch (error) {
        sheetsStatus = {
          success: false,
          error: error.message,
          details: error.response?.data || null,
        }
      }
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: envStatus,
      jwtClient: {
        created: !!jwtClient,
        error: jwtError,
      },
      calendar: calendarStatus,
      sheets: sheetsStatus,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}


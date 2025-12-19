import { type NextRequest, NextResponse } from "next/server"
import { getSheetsClient } from "@/lib/google-api"

export async function GET(request: NextRequest) {
  try {
    // Check if environment variables are set
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !sheetId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing environment variables",
          missingVars: {
            GOOGLE_CLIENT_EMAIL: !clientEmail,
            GOOGLE_PRIVATE_KEY: !privateKey,
            GOOGLE_SHEET_ID: !sheetId,
          },
        },
        { status: 500 },
      )
    }

    // Try to initialize the sheets client
    const sheets = await getSheetsClient()

    // Try to get sheet metadata
    const response = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    })

    return NextResponse.json({
      success: true,
      sheetTitle: response.data.properties?.title,
      sheets: response.data.sheets?.map((sheet) => sheet.properties?.title),
      message: "Successfully connected to Google Sheets",
    })
  } catch (error) {
    console.error("Error testing Google Sheets connection:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: "Failed to connect to Google Sheets",
      },
      { status: 500 },
    )
  }
}


import { type NextRequest, NextResponse } from "next/server"
import { saveContactToSheet } from "@/lib/google-api"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    // Combine first and last name
    const fullName = `${firstName} ${lastName}`

    try {
      // Save to Google Sheets
      await saveContactToSheet(fullName, email, phone || "Not provided", subject, message)

      return NextResponse.json({
        success: true,
        message: "Contact form submitted successfully",
      })
    } catch (googleError) {
      console.error("Google Sheets error:", googleError)

      return NextResponse.json(
        {
          error: "Failed to save to Google Sheets",
          details: googleError.message,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error in contact form API route:", error)
    return NextResponse.json(
      {
        error: "Failed to submit contact form",
        details: error.message,
      },
      { status: 500 },
    )
  }
}


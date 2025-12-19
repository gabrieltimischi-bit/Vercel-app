// Create a new test endpoint that doesn't use Google Sheets:

import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("Received contact form data:", body)

    // Just return success without trying to save to Google Sheets
    return NextResponse.json({
      success: true,
      message: "Contact form test successful",
    })
  } catch (error) {
    console.error("Error in test contact form API:", error)
    return NextResponse.json({ error: "Test failed" }, { status: 500 })
  }
}


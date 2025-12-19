import { type NextRequest, NextResponse } from "next/server"
import { saveNewsletterSubscription } from "@/lib/google-api"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Save to Google Sheets
    await saveNewsletterSubscription(email)

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription successful",
    })
  } catch (error) {
    console.error("Error in newsletter subscription API:", error)
    return NextResponse.json(
      {
        error: "Failed to subscribe to newsletter",
        details: error.message,
      },
      { status: 500 },
    )
  }
}


import { type NextRequest, NextResponse } from "next/server"
import { saveNewsletterSubscription } from "@/lib/google-api"

export async function GET(request: NextRequest) {
  try {
    // Test with a sample email
    const testEmail = `test-${Date.now()}@example.com`

    await saveNewsletterSubscription(testEmail)

    return NextResponse.json({
      success: true,
      message: "Newsletter test successful",
      testEmail,
    })
  } catch (error) {
    console.error("Error in test newsletter API:", error)
    return NextResponse.json(
      {
        error: "Newsletter test failed",
        details: error.message,
      },
      { status: 500 },
    )
  }
}


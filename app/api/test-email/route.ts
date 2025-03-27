import { NextResponse } from "next/server"
import { Resend } from "resend"
import { emailConfig } from "@/utils/email-config"

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

/**
 * Test endpoint to verify email functionality
 * This is for testing purposes only and should be removed in production
 */
export async function GET() {
  // Only allow in development environment
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      {
        success: false,
        message: "This endpoint is only available in development mode",
      },
      { status: 403 },
    )
  }

  try {
    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message: "Resend API key not configured",
        },
        { status: 500 },
      )
    }

    // Send a test email
    const { data, error } = await resend.emails.send({
      from: emailConfig.getFormattedSender(),
      to: emailConfig.recipientEmail,
      subject: "Test Email from Wadi Rum Website",
      html: `
        <h1>Test Email</h1>
        <p>This is a test email from your Wadi Rum website to verify that the email functionality is working correctly.</p>
        <p>If you received this email, your email configuration is working!</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      `,
    })

    if (error) {
      console.error("Error sending test email:", error)
      return NextResponse.json(
        {
          success: false,
          message: `Failed to send test email: ${error.message}`,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      data: {
        emailId: data?.id,
        recipient: emailConfig.recipientEmail,
      },
    })
  } catch (error) {
    console.error("Error in test email endpoint:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      {
        success: false,
        message: `Error: ${errorMessage}`,
      },
      { status: 500 },
    )
  }
}


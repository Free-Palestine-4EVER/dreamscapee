import { NextResponse } from "next/server"
import { Resend } from "resend"
import { emailConfig } from "@/utils/email-config"

// Initialize Resend with your API key, with better error handling
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    // Check if Resend API key is configured
    if (!resend) {
      console.error("Resend API key not configured")
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please contact the administrator.",
        },
        { status: 500 },
      )
    }

    const data = await request.json()
    const { firstName, lastName, email, phone, experience, date, groupSize, message, camelRide, sandboarding } = data

    // Format the date if it exists
    const formattedDate = date ? new Date(date).toLocaleDateString() : "Not specified"

    // Create a list of additional activities
    const additionalActivities = []
    if (camelRide) additionalActivities.push("Camel Ride")
    if (sandboarding) additionalActivities.push("Sandboarding")

    const additionalActivitiesText = additionalActivities.length > 0 ? additionalActivities.join(", ") : "None"

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: emailConfig.getFormattedSender(),
      to: emailConfig.recipientEmail,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Inquiry from Your Website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interested in:</strong> ${experience}</p>
        <p><strong>Additional Activities:</strong> ${additionalActivitiesText}</p>
        <p><strong>Preferred date:</strong> ${formattedDate}</p>
        <p><strong>Group size:</strong> ${groupSize}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>You can reply directly to the customer at: ${email}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        {
          success: false,
          message: `Failed to send email: ${error.message}`,
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully with ID:", emailData?.id)
    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      {
        success: false,
        message: `Failed to send email: ${errorMessage}`,
      },
      { status: 500 },
    )
  }
}


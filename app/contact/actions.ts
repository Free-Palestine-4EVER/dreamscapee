"use server"

import { z } from "zod"
import { Resend } from "resend"
import { emailConfig } from "@/utils/email-config"

// Initialize Resend with your API key
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

// Define validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  experience: z.string().min(1, "Please select an experience"),
  date: z.string().optional(),
  groupSize: z.string().min(1, "Please select group size"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  camelRide: z.boolean().optional().default(false),
  sandboarding: z.boolean().optional().default(false),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)
    const { firstName, lastName, email, phone, experience, date, groupSize, message, camelRide, sandboarding } =
      validatedData

    // Check if Resend API key is configured
    if (!resend) {
      console.error("Resend API key not configured")
      return {
        success: false,
        message: "Email service not configured. Please contact the administrator.",
      }
    }

    // Format the date if it exists
    const formattedDate = date ? new Date(date).toLocaleDateString() : "Not specified"

    // Create a list of additional activities
    const additionalActivities = []
    if (camelRide) additionalActivities.push("Camel Ride")
    if (sandboarding) additionalActivities.push("Sandboarding")

    const additionalActivitiesText = additionalActivities.length > 0 ? additionalActivities.join(", ") : "None"

    // Send email using Resend directly from the server action
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
      return {
        success: false,
        message: `Failed to send email: ${error.message}`,
      }
    }

    console.log("Email sent successfully with ID:", emailData?.id)
    return { success: true, message: "Your message has been sent! We will contact you soon." }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs",
        errors: error.errors,
      }
    }
    // Return more user-friendly error message
    return {
      success: false,
      message:
        error instanceof Error
          ? `Unable to send your message: ${error.message}. Please try again or contact us directly at wadirumdreamscape@gmail.com`
          : "Failed to send your message. Please try again later.",
    }
  }
}


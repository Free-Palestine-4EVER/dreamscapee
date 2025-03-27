// Email configuration utility

/**
 * Email configuration for the application
 */
export const emailConfig = {
  /**
   * The email address that will receive contact form submissions
   */
  recipientEmail: "wadirumdreamscape@gmail.com",

  /**
   * The sender email address shown to recipients
   */
  senderEmail: "no-reply@wadirumdreamscape.com",

  /**
   * The sender name shown to recipients
   */
  senderName: "Wadi Rum Dreamscape",

  /**
   * Format a full sender string in the format "Name <email@example.com>"
   */
  getFormattedSender: () => `${emailConfig.senderName} <${emailConfig.senderEmail}>`,

  /**
   * Check if email configuration is valid
   */
  isConfigValid: () => {
    return !!process.env.RESEND_API_KEY
  },
}


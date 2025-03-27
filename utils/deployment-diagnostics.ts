// Utility to diagnose common Vercel deployment issues

export interface DeploymentIssue {
  type: "error" | "warning"
  message: string
  location?: string
  fix?: string
}

export function scanForDeploymentIssues(logContent: string): DeploymentIssue[] {
  const issues: DeploymentIssue[] = []

  // Check for common build errors
  if (logContent.includes("DEPLOYMENT_BLOCKED")) {
    issues.push({
      type: "error",
      message:
        "Deployment was blocked. This could be due to configuration errors, account limitations, or policy violations.",
      fix: "Check your account status and verify that your deployment complies with platform policies.",
    })
  }

  // Check for environment variable issues
  if (logContent.includes("RESEND_API_KEY") && logContent.includes("undefined")) {
    issues.push({
      type: "error",
      message: "Resend API Key environment variable is missing or undefined",
      location: "app/api/send-email/route.ts",
      fix: "Add the RESEND_API_KEY environment variable in your Vercel project settings",
    })
  }

  // Check for route handler issues
  if (logContent.includes("Error sending email")) {
    issues.push({
      type: "error",
      message: "Email sending functionality is failing",
      location: "app/api/send-email/route.ts",
      fix: "Verify that your Resend API key is correct and properly configured",
    })
  }

  // Check for problems in the .env file
  if (logContent.includes("PASSWORD") || logContent.includes("credential")) {
    issues.push({
      type: "warning",
      message: "Sensitive information may be exposed in the code or .env file",
      location: ".env.local",
      fix: "Remove any sensitive information from the code repository and use Vercel environment variables instead",
    })
  }

  // Check for missing Next.js dependencies
  if (logContent.includes("Cannot find module")) {
    issues.push({
      type: "error",
      message: "Missing dependency or module",
      fix: "Check that all dependencies are properly installed and imported",
    })
  }

  return issues
}

export function generateDeploymentReport(issues: DeploymentIssue[]): string {
  if (issues.length === 0) {
    return "No deployment issues detected."
  }

  let report = "## Deployment Issues Report\n\n"

  const errorIssues = issues.filter((issue) => issue.type === "error")
  const warningIssues = issues.filter((issue) => issue.type === "warning")

  report += `Found ${errorIssues.length} errors and ${warningIssues.length} warnings.\n\n`

  if (errorIssues.length > 0) {
    report += "### Errors\n\n"
    errorIssues.forEach((issue, index) => {
      report += `${index + 1}. **${issue.message}**\n`
      if (issue.location) {
        report += `   - Location: \`${issue.location}\`\n`
      }
      if (issue.fix) {
        report += `   - Fix: ${issue.fix}\n`
      }
      report += "\n"
    })
  }

  if (warningIssues.length > 0) {
    report += "### Warnings\n\n"
    warningIssues.forEach((issue, index) => {
      report += `${index + 1}. **${issue.message}**\n`
      if (issue.location) {
        report += `   - Location: \`${issue.location}\`\n`
      }
      if (issue.fix) {
        report += `   - Fix: ${issue.fix}\n`
      }
      report += "\n"
    })
  }

  return report
}


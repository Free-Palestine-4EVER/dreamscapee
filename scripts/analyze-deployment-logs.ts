import fs from "fs"
import { scanForDeploymentIssues, generateDeploymentReport } from "../utils/deployment-diagnostics"

// This would be run as a script to analyze Vercel deployment logs
// For demonstration purposes, we'll analyze a sample log

const sampleLogContent = `
> Build error occurred
Error: DEPLOYMENT_BLOCKED
Forbidden

Resolving sensitive information in .env.local file
Detected EMAIL_PASSWORD in source code
Warning: Found sensitive credentials in your project files

Additional errors:
- app/api/send-email/route.ts:9 - Email sending failed - Error: Missing Resend API key. Pass a Resend API key to the Resend constructor or add a RESEND_API_KEY environment variable.
- app/contact/actions.ts:78 - Failed to send message. Server responded with status: 500
`

function analyzeLogs() {
  console.log("Analyzing deployment logs...")

  const issues = scanForDeploymentIssues(sampleLogContent)
  const report = generateDeploymentReport(issues)

  // In a real script, we would read an actual log file
  // const logPath = path.join(process.cwd(), 'vercel-deployment.log');
  // const logContent = fs.readFileSync(logPath, 'utf8');
  // const issues = scanForDeploymentIssues(logContent);

  console.log(report)

  // Write report to file
  fs.writeFileSync("deployment-report.md", report)
  console.log("Report written to deployment-report.md")
}

analyzeLogs()


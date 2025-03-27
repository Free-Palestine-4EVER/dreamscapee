"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { format } from "date-fns"
import { CalendarIcon, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { submitContactForm, type ContactFormData } from "./actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function Contact() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    date: "",
    groupSize: "",
    message: "",
    camelRide: false,
    sandboarding: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate)
    setFormData((prev) => ({
      ...prev,
      date: newDate ? newDate.toISOString() : "",
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.experience) newErrors.experience = "Please select an experience"
    if (!formData.groupSize) newErrors.groupSize = "Please select group size"
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitResult(result)

      if (result.success) {
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: "",
          date: "",
          groupSize: "",
          message: "",
          camelRide: false,
          sandboarding: false,
        })
        setDate(undefined)
      } else if (result.errors) {
        // Handle validation errors from server
        const serverErrors: Record<string, string> = {}
        result.errors.forEach((err) => {
          if (err.path[0]) {
            serverErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(serverErrors)
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Contact Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to book your Wadi Rum adventure? Get in touch and I'll respond as soon as possible.
          </p>
        </div>

        {submitResult && (
          <Alert
            className={`mb-8 ${submitResult.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
          >
            {submitResult.success ? (
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertTitle className={submitResult.success ? "text-green-800" : "text-red-800"}>
              {submitResult.success ? "Success!" : "Error"}
            </AlertTitle>
            <AlertDescription className={submitResult.success ? "text-green-700" : "text-red-700"}>
              {submitResult.message}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Interested in</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger id="experience" className={errors.experience ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select an experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jeep-tour">Jeep Tour</SelectItem>
                      <SelectItem value="hiking">Hiking</SelectItem>
                      <SelectItem value="climbing">Climbing</SelectItem>
                      <SelectItem value="camping">Camping</SelectItem>
                      <SelectItem value="custom">Custom Experience</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>

                {/* Additional Activities Checkboxes */}
                <div className="space-y-3">
                  <Label>Additional Activities (Optional)</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="camel-ride"
                        checked={formData.camelRide}
                        onCheckedChange={(checked) => handleInputChange("camelRide", checked === true)}
                      />
                      <Label htmlFor="camel-ride" className="text-sm font-normal cursor-pointer">
                        I'm interested in a camel ride
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sandboarding"
                        checked={formData.sandboarding}
                        onCheckedChange={(checked) => handleInputChange("sandboarding", checked === true)}
                      />
                      <Label htmlFor="sandboarding" className="text-sm font-normal cursor-pointer">
                        I'm interested in sandboarding
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${errors.date ? "border-red-500" : ""}`}
                        type="button"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="group-size">Group size</Label>
                  <Select value={formData.groupSize} onValueChange={(value) => handleInputChange("groupSize", value)}>
                    <SelectTrigger id="group-size" className={errors.groupSize ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3-5">3-5 people</SelectItem>
                      <SelectItem value="6-10">6-10 people</SelectItem>
                      <SelectItem value="10+">More than 10 people</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.groupSize && <p className="text-red-500 text-sm mt-1">{errors.groupSize}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your interests and any specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+962 7 7725 5649</p>
                    <p className="text-sm text-muted-foreground">Available from 8am to 8pm (Jordan time)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>wadirumdreamscape@gmail.com</p>
                    <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>Wadi Rum Village, Jordan</p>
                    <p className="text-sm text-muted-foreground">Meeting point for all tours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">How far in advance should I book?</h3>
                  <p className="text-sm text-muted-foreground">
                    For peak season (March-May and September-November), I recommend booking at least 2-3 weeks in
                    advance. For other times, 1 week notice is usually sufficient.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    I accept cash (JOD, USD, EUR) and bank transfers. Payment is typically collected upon arrival.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">What's your cancellation policy?</h3>
                  <p className="text-sm text-muted-foreground">
                    Free cancellation up to 48 hours before your experience. Cancellations within 48 hours may incur a
                    30% fee.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Can you arrange transportation from Aqaba or Petra?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, I can arrange transportation from nearby cities for an additional fee. Please mention this in
                    your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


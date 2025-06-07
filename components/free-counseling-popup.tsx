"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Phone, Mail, User, GraduationCap, CheckCircle } from "lucide-react"

const FreeCounselingPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // Show popup after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Auto close after success
    setTimeout(() => {
      setIsOpen(false)
      setIsSuccess(false)
      setFormData({ name: "", email: "", phone: "", course: "", message: "" })
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-morphism border border-accent/20 relative overflow-hidden">
        {/* Airplane Animation Overlay */}
        {isSubmitting && (
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 z-10 flex items-center justify-center">
            {/* Sky Background with Clouds */}
            <div className="absolute inset-0">
              {/* Cloud 1 */}
              <div className="absolute top-8 left-4 w-16 h-8 bg-white/30 rounded-full animate-float">
                <div className="absolute top-1 left-2 w-8 h-6 bg-white/40 rounded-full"></div>
                <div className="absolute top-2 right-2 w-6 h-4 bg-white/40 rounded-full"></div>
              </div>

              {/* Cloud 2 */}
              <div
                className="absolute top-16 right-8 w-12 h-6 bg-white/30 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="absolute top-0 left-1 w-6 h-4 bg-white/40 rounded-full"></div>
                <div className="absolute top-1 right-1 w-4 h-3 bg-white/40 rounded-full"></div>
              </div>

              {/* Cloud 3 */}
              <div
                className="absolute bottom-16 left-8 w-14 h-7 bg-white/30 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="absolute top-1 left-2 w-7 h-5 bg-white/40 rounded-full"></div>
                <div className="absolute top-2 right-2 w-5 h-3 bg-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Airplane */}
            <div className="relative z-20">
              <div className="airplane-flight">
                <svg width="80" height="60" viewBox="0 0 80 60" className="text-white drop-shadow-lg">
                  {/* Airplane Body */}
                  <ellipse cx="40" cy="30" rx="25" ry="4" fill="currentColor" />

                  {/* Wings */}
                  <ellipse cx="35" cy="30" rx="15" ry="2" fill="currentColor" className="animate-wing-flap" />
                  <ellipse cx="45" cy="30" rx="15" ry="2" fill="currentColor" className="animate-wing-flap" />

                  {/* Tail */}
                  <polygon points="15,30 20,25 20,35" fill="currentColor" />

                  {/* Windows */}
                  <circle cx="45" cy="30" r="2" fill="#06b6d4" opacity="0.8" />
                  <circle cx="50" cy="30" r="2" fill="#06b6d4" opacity="0.8" />
                  <circle cx="55" cy="30" r="2" fill="#06b6d4" opacity="0.8" />

                  {/* Propeller */}
                  <circle cx="65" cy="30" r="1" fill="currentColor" className="animate-spin" />
                  <line
                    x1="63"
                    y1="30"
                    x2="67"
                    y2="30"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="animate-spin"
                  />
                </svg>

                {/* Airplane Trail */}
                <div className="airplane-trail"></div>
              </div>

              {/* Loading Text */}
              <div className="text-center mt-8">
                <div className="text-white font-bold text-lg mb-2">Taking Off...</div>
                <div className="text-white/80 text-sm">Processing your counseling request</div>
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {isSuccess && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 z-10 flex items-center justify-center">
            <div className="text-center text-white">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
              <p className="text-sm opacity-90">We'll contact you within 24 hours</p>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 z-20 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>

        <CardHeader className="text-center pb-4">
          <Badge className="mx-auto mb-2 bg-gradient-to-r from-accent to-secondary text-white border-0">
            🎓 Free Counseling
          </Badge>
          <CardTitle className="text-xl font-bold gradient-text">Get Expert Career Guidance</CardTitle>
          <p className="text-sm text-gray-600">Speak with our aviation experts and discover your perfect career path</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-accent" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-accent focus:ring-accent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-accent focus:ring-accent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-accent focus:ring-accent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="text-sm font-medium flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent" />
                Course Interest
              </Label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              >
                <option value="">Select a course</option>
                <option value="air-hostess">Air Hostess Training</option>
                <option value="hospitality">Hospitality Management</option>
                <option value="ground-staff">Ground Staff Training</option>
                <option value="airport-management">Airport Management</option>
                <option value="travel-tourism">Travel & Tourism</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your career goals..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="border-gray-300 focus:border-accent focus:ring-accent resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent-600 hover:to-secondary-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Taking Off..." : "Get Free Counseling"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is secure and will not be shared with third parties
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounselingPopup

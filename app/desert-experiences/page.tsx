import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Calendar } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function DesertExperiences() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Desert Experiences"
        subtitle="Discover the magic of Wadi Rum with authentic Bedouin experiences"
        imagePath="/placeholder.svg?height=800&width=1920"
        height="h-[50vh]"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Explore Wadi Rum With Me</h2>
            <p className="text-lg mb-8">
              I offer a variety of desert experiences tailored to your interests and time available. From short jeep
              tours to multi-day adventures, each experience is designed to showcase the beauty and culture of Wadi Rum.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Half-Day Jeep Tour</CardTitle>
                <CardDescription>Perfect introduction to Wadi Rum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Half-Day Jeep Tour"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  A 4-hour jeep tour visiting the main attractions of Wadi Rum, including Lawrence Spring, Khazali
                  Canyon, and the red sand dunes. Perfect for those with limited time.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>4 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <span>Available daily</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Full-Day Jeep Adventure</CardTitle>
                <CardDescription>Comprehensive desert exploration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Full-Day Jeep Adventure"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  A full day exploring the far reaches of Wadi Rum. Visit all major sites, hidden canyons, rock bridges,
                  and enjoy lunch in the shade of a mountain. Perfect for photography enthusiasts.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>7-8 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <span>Available daily</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Overnight Desert Experience</CardTitle>
                <CardDescription>The complete Wadi Rum adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Overnight Desert Experience"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  Experience the magic of Wadi Rum day and night. Explore by jeep, enjoy a sunset hike, feast on
                  traditional Bedouin food, and sleep under the stars or in a Bedouin camp.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>24 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-10 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <span>Available daily</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Sunset Camel Ride</CardTitle>
                <CardDescription>Traditional desert transportation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sunset Camel Ride"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  Experience the desert as Bedouins have for centuries. Ride camels through the sands as the sun sets,
                  painting the mountains in golden hues. Includes tea at a scenic spot.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>2 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-8 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <span>Available daily</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Bedouin Cooking Class</CardTitle>
                <CardDescription>Learn traditional desert cuisine</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Bedouin Cooking Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  Learn how to prepare traditional Bedouin dishes in the desert. Cook Zarb (underground oven), make
                  bread on the fire, and prepare Bedouin tea with desert herbs.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>3-4 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>2-8 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <span>Available daily</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Multi-Day Desert Trek</CardTitle>
                <CardDescription>Ultimate wilderness adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Multi-Day Desert Trek"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  A 2-5 day trek through the wilderness of Wadi Rum. Hike through canyons, climb sand dunes, and camp in
                  different locations each night. A true desert immersion experience.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>2-5 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-8 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <span>Available on request</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Experiences */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Custom Experiences</h2>
            <p className="text-lg mb-8">
              Looking for something specific? I can create custom experiences tailored to your interests, time
              constraints, and group size. Whether you're interested in photography, geology, history, or simply want a
              unique adventure, I can design the perfect itinerary for you.
            </p>
            <Button className="bg-amber-700 hover:bg-amber-800">
              <Link href="/contact">Request Custom Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Wadi Rum?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me to book your desert adventure or ask any questions about the experiences offered.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-black">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


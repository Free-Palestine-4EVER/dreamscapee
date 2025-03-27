import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Calendar, Camera, Mountain, Utensils } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function JeepTours() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Jeep Tours"
        subtitle="Explore the vast landscapes of Wadi Rum in a 4x4 adventure"
        imagePath="/images/hero/jeep-tours-pc.png"
        mobileImagePath="/images/hero/jeep-tours-mobile.png"
        height="h-[60vh] md:h-[90vh]"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Discover Wadi Rum by Jeep</h2>
            <p className="text-lg mb-8">
              A jeep tour is the classic way to explore the vast desert of Wadi Rum. Cover more ground and visit the
              iconic sites while enjoying the thrill of off-road driving through sand dunes and rocky terrain. As your
              guide, I'll share the history, geology, and Bedouin culture of each location.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Jeep Tour Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Classic Half-Day Tour</CardTitle>
                <CardDescription>Essential Wadi Rum experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/classic-jeep-tour.webp" alt="Half-Day Jeep Tour" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  A 4-hour jeep tour covering the main attractions of Wadi Rum. Visit Lawrence Spring, Khazali Canyon,
                  the red sand dunes, and the natural rock bridge of Little Bridge.
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
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 50 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Tour</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Full-Day Adventure</CardTitle>
                <CardDescription>Complete desert exploration</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/full-day-jeep-tour.jpeg" alt="Full-Day Jeep Tour" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  A comprehensive 7-8 hour tour that covers all major sites plus hidden gems. Visit the far reaches of
                  Wadi Rum, including Um Fruth Rock Bridge, Burdah Rock Bridge viewpoint, and Lawrence House. Includes
                  lunch in the shade of a mountain.
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
                    <Utensils className="h-4 w-4 text-amber-700" />
                    <span>Lunch included</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 60 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Tour</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Sunset Special</CardTitle>
                <CardDescription>Magical evening experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/sunset-jeep-tour.png" alt="Sunset Jeep Tour" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  A 3-hour tour timed to catch the spectacular Wadi Rum sunset. Visit key sites and end at the perfect
                  spot to watch the sun set behind the mountains, painting the desert in golden hues.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>3 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera className="h-4 w-4 text-amber-700" />
                    <span>Perfect for photography</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 55 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Tour</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Photography Tour</CardTitle>
                <CardDescription>Capture the perfect shots</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/photography-jeep-tour.jpeg"
                    alt="Photography Tour"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  Designed for photography enthusiasts, this tour takes you to the most photogenic spots at the optimal
                  times of day. I'll help you find unique angles and compositions for stunning photos.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>Flexible duration</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-4 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Camera className="h-4 w-4 text-amber-700" />
                    <span>Photography focused</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 70 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Tour</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Overnight Jeep Safari</CardTitle>
                <CardDescription>Extended desert adventure</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/overnight-jeep-tour.jpeg"
                    alt="Overnight Jeep Safari"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  A two-day jeep adventure with overnight camping. Explore remote areas of Wadi Rum, enjoy sunset and
                  sunrise in the desert, and experience authentic Bedouin hospitality under the stars.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>2 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Utensils className="h-4 w-4 text-amber-700" />
                    <span>All meals included</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 85 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Tour</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Custom Jeep Tour</CardTitle>
                <CardDescription>Tailored to your interests</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/custom-jeep-tour.webp" alt="Custom Jeep Tour" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Have specific sites you want to visit or interests you want to focus on? I can create a custom jeep
                  tour itinerary based on your preferences, time constraints, and group size.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>Flexible duration</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-6 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>Customized itinerary</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">Ask for price</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Tour</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">What to Expect on a Jeep Tour</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Comfortable Transportation</h3>
                <p>
                  Tours are conducted in well-maintained 4x4 jeeps with open backs for the best views. Cushioned seats
                  and shade covers provide comfort during your journey best views. Cushioned seats and shade covers
                  provide comfort during your journey. Each jeep can accommodate up to 6 passengers plus your guide.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Knowledgeable Guidance</h3>
                <p>
                  As your guide, I'll share insights about each location, including historical significance, geological
                  formation, and Bedouin traditions. I'm happy to answer any questions and can adjust the pace based on
                  your interests.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Photo Opportunities</h3>
                <p>
                  We'll stop at scenic viewpoints where you can take photos and explore on foot. I know the best angles
                  and times of day for photography and can help you capture stunning images of the desert landscape.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Refreshments</h3>
                <p>
                  All tours include traditional Bedouin tea breaks in scenic locations. Full-day tours include a lunch
                  break with freshly prepared food. Water is provided on all tours, and special dietary requirements can
                  be accommodated with advance notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">What to Bring</h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sun Protection</h3>
                  <p>Hat, sunglasses, and sunscreen are essential in the desert environment.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Comfortable Clothing</h3>
                  <p>
                    Light, breathable clothing that covers your shoulders and knees is recommended. A light jacket or
                    sweater for evening tours.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Footwear</h3>
                  <p>Closed-toe shoes or sandals with straps are best for walking in sand and climbing small rocks.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Camera</h3>
                  <p>Don't forget your camera or smartphone to capture the stunning landscapes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Small Backpack</h3>
                  <p>For carrying personal items, water, and snacks during stops.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Wadi Rum by Jeep?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me to book your jeep tour or discuss custom options for your group.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black border-white hover:bg-white hover:text-black"
          >
            <Link href="/contact">Book Your Jeep Tour</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, ArrowUp, Mountain, Shield } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function Climbing() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Rock Climbing"
        subtitle="Challenge yourself on Wadi Rum's magnificent rock formations"
        imagePath="/images/hero/climbing-pc.png"
        mobileImagePath="/images/hero/climbing-mobile.png"
        height="h-[60vh] md:h-[90vh]"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Climbing in Wadi Rum</h2>
            <p className="text-lg mb-8">
              Wadi Rum offers some of the most spectacular rock climbing in the world. With its towering sandstone
              cliffs, natural rock bridges, and unique formations, it's a paradise for climbers of all levels. Whether
              you're a beginner looking to try climbing for the first time or an experienced climber seeking new
              challenges, I can guide you to the perfect routes.
            </p>
          </div>
        </div>
      </section>

      {/* Climbing Options */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Climbing Experiences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Beginner's Introduction</CardTitle>
                <CardDescription>First-time climbing experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/beginner-climbing.jpeg" alt="Beginner Climbing" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Perfect for first-time climbers. Learn basic techniques and safety procedures on easy routes with
                  gentle slopes and plenty of handholds. Experience the thrill of climbing in a safe, supportive
                  environment.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>3-4 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-4 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-amber-700" />
                    <span>All equipment provided</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 60 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Intermediate Routes</CardTitle>
                <CardDescription>For those with some experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/intermediate-climbing.webp"
                    alt="Intermediate Climbing"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  For climbers with some experience. Tackle more challenging routes with varied terrain, including
                  vertical faces and traverses. Improve your technique and build confidence on Wadi Rum's spectacular
                  sandstone.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>4-6 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Intermediate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-4 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-amber-700" />
                    <span>All equipment provided</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 85 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Advanced Climbs</CardTitle>
                <CardDescription>Challenging routes for experienced climbers</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/advanced-climbing.jpeg" alt="Advanced Climbing" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  For experienced climbers seeking a challenge. Take on Wadi Rum's most difficult routes, including
                  overhangs, cracks, and technical faces. Test your skills on routes that have challenged climbers from
                  around the world.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>Full day</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Advanced</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-3 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>Technical routes</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 100 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Multi-Pitch Adventures</CardTitle>
                <CardDescription>Full-day climbing experiences</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/multi-pitch-climbing.webp"
                    alt="Multi-Pitch Climbing"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  Experience the thrill of multi-pitch climbing on Wadi Rum's towering cliffs. Reach heights of several
                  hundred meters and enjoy breathtaking views across the desert landscape. A true adventure for
                  experienced climbers.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>Full day</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Intermediate/Advanced</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-2 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>Multiple pitches</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 80 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Rock Bridge Climbing</CardTitle>
                <CardDescription>Unique Wadi Rum experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/rock-bridge-climbing.webp"
                    alt="Rock Bridge Climbing"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4">
                  Climb to the famous rock bridges of Wadi Rum, including Burdah and Um Fruth. These natural arches
                  offer unique climbing challenges and incredible photo opportunities at the top.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>4-6 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Varies by bridge</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-4 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>Unique formations</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 75 JOD</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Custom Climbing Experience</CardTitle>
                <CardDescription>Tailored to your skill level and interests</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/custom-climbing.jpeg" alt="Custom Climbing" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Have specific climbing goals or interests? I can create a custom climbing experience based on your
                  skill level, preferences, and time constraints. From specific routes to skill development, the day is
                  tailored to you.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>Flexible duration</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Any skill level</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-4 people</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-amber-700" />
                    <span>Personalized approach</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">Ask for price</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Experience</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Equipment */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Safety & Equipment</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Professional Guidance</h3>
                <p>
                  All climbing experiences are led by experienced guides with extensive knowledge of Wadi Rum's terrain
                  and climbing routes. Your safety is our top priority, and all activities follow strict safety
                  protocols.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Quality Equipment</h3>
                <p>
                  We provide all necessary climbing equipment, including harnesses, helmets, ropes, and climbing shoes.
                  All equipment is regularly inspected and maintained to ensure it meets international safety standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Instruction & Technique</h3>
                <p>
                  Before climbing, you'll receive comprehensive instruction on climbing techniques, safety procedures,
                  and communication signals. For beginners, we focus on building confidence and basic skills before
                  progressing to more challenging routes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Physical Requirements</h3>
                <p>
                  Climbing requires a moderate level of fitness, but routes are available for various fitness levels. Be
                  sure to inform me of any medical conditions or physical limitations so I can select appropriate routes
                  and provide necessary accommodations.
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
                  <h3 className="font-semibold text-lg">Comfortable Clothing</h3>
                  <p>
                    Wear flexible, non-restrictive clothing suitable for the season. Layers are recommended as
                    temperatures can vary.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sun Protection</h3>
                  <p>Hat, sunglasses, and sunscreen are essential, even on cloudy days.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Water</h3>
                  <p>
                    Bring at least 2 liters of water per person. Staying hydrated is crucial in the desert environment.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Small Backpack</h3>
                  <p>For carrying personal items, water, and snacks during the climb.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Camera</h3>
                  <p>To capture the stunning views from the top of your climb.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-amber-100 rounded-lg border border-amber-200">
              <p className="font-semibold">
                Note: All technical climbing equipment is provided, including harnesses, helmets, ropes, and climbing
                shoes. If you have your own equipment that you prefer to use, please let me know in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Climb in Wadi Rum?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me to book your climbing adventure or discuss custom options based on your skill level and
            interests.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black border-white hover:bg-white hover:text-black"
          >
            <Link href="/contact">Book Your Climb</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, ArrowUp, Mountain, Footprints } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function Hiking() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Hiking Adventures"
        subtitle="Explore Wadi Rum's breathtaking landscapes on foot"
        imagePath="/images/hero/hiking-pc.jpeg"
        mobileImagePath="/images/hero/hiking-mobile.jpeg"
        height="h-[60vh] md:h-[90vh]"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Discover Wadi Rum on Foot</h2>
            <p className="text-lg mb-8">
              Hiking in Wadi Rum offers a unique perspective on the desert landscape. Away from vehicles, you'll
              experience the silence and majesty of the desert at your own pace. From easy walks to challenging treks, I
              offer hiking experiences for all fitness levels.
            </p>
          </div>
        </div>
      </section>

      {/* Hiking Routes */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Popular Hiking Routes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Jebel Umm Adaami</CardTitle>
                <CardDescription>Jordan's highest mountain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/jebel-um-addami.jpeg" alt="Jebel Umm Adaami" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Climb Jordan's highest peak (1,854m) and enjoy panoramic views across Wadi Rum and into Saudi Arabia.
                  A challenging but rewarding hike with spectacular vistas.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>6-7 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Moderate/Difficult</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="h-4 w-4 text-amber-700" />
                    <span>12km round trip</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>600m elevation</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 85 JOD</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Hike</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Jebel Burdah</CardTitle>
                <CardDescription>Famous rock bridge hike</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/jebel-burdah.jpeg" alt="Jebel Burdah" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Hike to the spectacular Burdah Rock Bridge, one of the highest natural arches in the world. This trek
                  involves some scrambling and basic climbing, offering amazing photo opportunities.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>4-5 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Moderate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="h-4 w-4 text-amber-700" />
                    <span>8km round trip</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>350m elevation</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 75 JOD</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Hike</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Jebel Khazali</CardTitle>
                <CardDescription>Ancient inscriptions canyon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/khazali-canyon.jpeg" alt="Jebel Khazali" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Explore the narrow Khazali Canyon with its ancient Thamudic and Nabataean inscriptions. This easier
                  hike is perfect for history enthusiasts and those interested in archaeology.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>2-3 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Easy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="h-4 w-4 text-amber-700" />
                    <span>5km round trip</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>100m elevation</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 70 JOD</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Hike</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Jebel Rum</CardTitle>
                <CardDescription>Classic summit trek</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/jebel-rum.jpeg" alt="Jebel Rum" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Climb the second-highest peak in Jordan with stunning views over the Wadi Rum valley. This challenging
                  hike rewards with incredible vistas and a sense of accomplishment.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>6-7 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Difficult</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="h-4 w-4 text-amber-700" />
                    <span>15km round trip</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>750m elevation</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 75 JOD</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Hike</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Sunset Hike</CardTitle>
                <CardDescription>Perfect for photography</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/sunset-hike.jpeg" alt="Sunset Hike" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  A shorter hike timed to reach a scenic viewpoint for sunset. Watch as the desert transforms with
                  golden light and the rocks glow red. Ideal for photographers and romantic moments.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>2-3 hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Easy/Moderate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="h-4 w-4 text-amber-700" />
                    <span>4km round trip</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="h-4 w-4 text-amber-700" />
                    <span>200m elevation</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 65 JOD</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Hike</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Multi-Day Trek</CardTitle>
                <CardDescription>Ultimate desert immersion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/multi-day-trek.jpeg" alt="Multi-Day Trek" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  A 2-5 day hiking adventure through various terrains of Wadi Rum. Camp in different locations each
                  night and experience the true wilderness of the desert away from tourist routes.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-amber-700" />
                    <span>2-5 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-amber-700" />
                    <span>Moderate/Difficult</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="h-4 w-4 text-amber-700" />
                    <span>Varies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-700" />
                    <span>1-8 people</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">Ask for price</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Book This Hike</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">What to Bring</h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Appropriate Footwear</h3>
                  <p>Sturdy hiking boots or trail shoes with good ankle support and grip.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sun Protection</h3>
                  <p>Hat, sunglasses, and sunscreen are essential in the desert environment.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Water</h3>
                  <p>At least 2-3 liters per person for day hikes, more for longer treks.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Clothing Layers</h3>
                  <p>Light, breathable clothing with long sleeves for sun protection. A light jacket for evenings.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Camera</h3>
                  <p>You'll want to capture the stunning landscapes and unique rock formations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Small Backpack</h3>
                  <p>To carry your water, snacks, camera, and personal items.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-amber-100 rounded-lg border border-amber-200">
              <p className="font-semibold">
                Note: For multi-day treks, additional equipment will be needed. I can provide a detailed packing list
                and arrange for camping equipment if required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Wadi Rum on Foot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me to book your hiking adventure or discuss custom routes based on your interests and fitness level.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black border-white hover:bg-white hover:text-black"
          >
            <Link href="/contact">Plan Your Hike</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


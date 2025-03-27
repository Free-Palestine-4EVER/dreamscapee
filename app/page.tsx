import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Tent, CarIcon as Jeep, Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Explore Wadi Rum with Omar"
        subtitle="Experience the magic of the desert with an authentic local guide"
        imagePath="/images/hero/home-pc.jpeg"
        mobileImagePath="/images/hero/home-mobile.jpeg"
        height="h-[60vh] md:h-[90vh]"
      />

      {/* Rest of the page content remains the same */}
      {/* Introduction */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-amber-900">Welcome to Wadi Rum Dreamscape</h2>
              <p className="text-lg">
                I'm Omar Alzalabeh, a local Bedouin guide from Wadi Rum. I offer authentic desert experiences, guided
                tours, and camping in the heart of Wadi Rum. With my deep knowledge of the desert and Bedouin culture,
                I'll help you discover the magic of this unique landscape.
              </p>
              <Button className="bg-amber-700 hover:bg-amber-800">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/omar-portrait.png" alt="Omar Alzalabeh" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Desert Experiences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                  <Jeep className="h-6 w-6" />
                </div>
                <CardTitle>Jeep Tours</CardTitle>
                <CardDescription>Explore the vast desert landscapes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/jeep-tours.webp" alt="Jeep Tour in Wadi Rum" fill className="object-cover" />
                </div>
                <p>
                  Discover the iconic sites of Wadi Rum in a 4x4 jeep tour. Visit ancient rock inscriptions, natural
                  arches, and breathtaking viewpoints.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/jeep-tours">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                  <Mountain className="h-6 w-6" />
                </div>
                <CardTitle>Hiking & Climbing</CardTitle>
                <CardDescription>Adventure in the mountains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/hiking-climbing.jpeg" alt="Hiking in Wadi Rum" fill className="object-cover" />
                </div>
                <p>
                  Experience the thrill of hiking and climbing in Wadi Rum's unique terrain. From beginner-friendly
                  trails to challenging climbs for the experienced.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/hiking">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                  <Tent className="h-6 w-6" />
                </div>
                <CardTitle>Desert Camping</CardTitle>
                <CardDescription>Sleep under the stars</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/desert-camping.jpeg" alt="Camping in Wadi Rum" fill className="object-cover" />
                </div>
                <p>
                  Experience authentic Bedouin hospitality with overnight camping in the desert. Choose from traditional
                  Bedouin camps or wild camping under the stars.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/camping">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">What Travelers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 text-amber-500">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="italic mb-4">
                  "Omar was an incredible guide! His knowledge of Wadi Rum and Bedouin culture made our trip
                  unforgettable. The jeep tour and overnight camping were highlights of our Jordan trip."
                </p>
                <div className="font-semibold">Sarah from USA</div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 text-amber-500">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="italic mb-4">
                  "We had an amazing hiking experience with Omar. He showed us hidden spots that weren't in any
                  guidebook. His hospitality and knowledge made this a truly authentic experience."
                </p>
                <div className="font-semibold">Thomas from Germany</div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 text-amber-500">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="italic mb-4">
                  "The desert camping experience was magical. Omar prepared traditional Bedouin food and shared stories
                  around the campfire. Watching the sunrise over the desert was a moment I'll never forget."
                </p>
                <div className="font-semibold">Emma from Australia</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the best time to visit Wadi Rum?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The best time to visit Wadi Rum is during spring (March to May) and autumn (September to November)
                    when temperatures are moderate. Summer (June to August) can be extremely hot during the day, though
                    nights are pleasant. Winter (December to February) offers mild daytime temperatures but can be very
                    cold at night.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do I get to Wadi Rum?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Wadi Rum is located about 60km east of Aqaba and 120km south of Petra. You can reach Wadi Rum by
                    taxi or private transfer from Aqaba (1 hour) or Petra (2 hours), public minibus, or rental car. I
                    can also arrange transportation from nearby cities for an additional fee.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What should I pack for Wadi Rum?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Essential items include comfortable walking shoes, sun protection (hat, sunglasses, sunscreen),
                    light clothing for daytime, warm layers for evenings, a water bottle, camera, and a small backpack.
                    For overnight stays, all bedding is provided at the camps.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    For peak season (March-May and September-November), I recommend booking at least 2-3 weeks in
                    advance. For other times, 1 week notice is usually sufficient. For large groups or special requests,
                    earlier booking is recommended.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center">
              <Button className="bg-amber-700 hover:bg-amber-800">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Desert Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me to plan your perfect Wadi Rum experience. Custom itineraries available for individuals, families,
            and groups.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black border-white hover:bg-white hover:text-black"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://api.whatsapp.com/send?phone=962777255649&text=Hello%20Omar%20%F0%9F%96%90%EF%B8%8F%0AI%20visited%20your%20website%20and%20im%20interested%20in%20visiting%20Wadi%20Rum%20with%20you%20!"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/images/whatsapp-icon.png" alt="Chat on WhatsApp" width={50} height={50} />
          </div>
        </Link>
      </div>
    </div>
  )
}


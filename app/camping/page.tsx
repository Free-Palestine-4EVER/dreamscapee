import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Moon, Star, Utensils, Coffee, Music } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function Camping() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Desert Camping"
        subtitle="Experience the magic of nights under the stars in Wadi Rum"
        imagePath="/images/hero/camping-pc.jpeg"
        mobileImagePath="/images/hero/camping-mobile.jpeg"
        height="h-[60vh] md:h-[90vh]"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Desert Camping Experience</h2>
            <p className="text-lg mb-8">
              Camping in Wadi Rum is an unforgettable experience. As night falls, the desert transforms into a celestial
              wonderland with some of the clearest night skies you'll ever see. I offer various camping options to suit
              your preferences, from comfortable tented camps to authentic Bedouin-style camping.
            </p>
          </div>
        </div>
      </section>

      {/* Camping Options */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Camping Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle>Bedouin Camp Experience</CardTitle>
                <CardDescription>Comfort in the desert</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/bedouin-camp.jpeg" alt="Bedouin Camp" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Stay in a traditional Bedouin camp with comfortable tents, proper beds, and shared bathroom
                  facilities. Enjoy traditional meals, Bedouin music, and storytelling around the campfire.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Comfortable beds with linens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Shared bathroom facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Traditional Bedouin meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Evening entertainment</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 55 JOD</span>
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
                <CardTitle>Wild Camping</CardTitle>
                <CardDescription>Authentic desert experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/images/wild-camping.webp" alt="Wild Camping" fill className="object-cover" />
                </div>
                <p className="mb-4">
                  Experience camping as Bedouins have for centuries. Sleep in a simple tent or under the stars in a
                  secluded location away from other tourists. Perfect for those seeking an authentic experience.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Basic tents and sleeping mats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Traditional Bedouin food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Secluded camping locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Stargazing opportunities</span>
                  </div>
                </div>
                <div className="mt-4 text-center bg-amber-50 py-2 rounded-md">
                  <span className="font-semibold text-amber-900">From 65 JOD</span>
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

      {/* Camp Activities */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Camp Activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Stargazing</h3>
              <p>
                Wadi Rum offers some of the clearest night skies in the world. Learn about constellations and Bedouin
                navigation techniques as you gaze at the stars.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Traditional Cooking</h3>
              <p>
                Experience authentic Bedouin cuisine prepared in the traditional way. Learn how we cook Zarb
                (underground oven) and make bread in the sand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Bedouin Music</h3>
              <p>
                Enjoy traditional Bedouin music around the campfire. Learn about our instruments and even try playing
                some yourself.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                <Moon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Night Walks</h3>
              <p>
                Experience the desert at night with a guided walk. The desert transforms after dark, with different
                sounds, smells, and even wildlife.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Bedouin Tea Ceremony</h3>
              <p>
                Learn the art of preparing and serving traditional Bedouin tea with desert herbs. Tea is an important
                part of Bedouin hospitality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Storytelling</h3>
              <p>
                Listen to ancient Bedouin stories and legends passed down through generations. Learn about our history,
                traditions, and way of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">What to Expect</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Meals</h3>
                <p>
                  All camping experiences include traditional Bedouin meals. Dinner typically features Zarb (meat and
                  vegetables cooked underground), salads, rice, and bread. Breakfast includes tea, bread, cheese, jam,
                  eggs, and more. Vegetarian options are available upon request.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Facilities</h3>
                <p>
                  Facilities vary depending on the camping option you choose. Bedouin camps have shared bathroom
                  facilities with toilets and sometimes showers. Wild camping offers basic facilities, while luxury
                  glamping includes private bathrooms with hot water.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Weather</h3>
                <p>
                  Desert temperatures vary significantly between day and night. Summer days can be very hot, while
                  winter nights can be quite cold. I'll advise you on what to bring based on the season of your visit.
                  All camping options provide appropriate bedding for the weather.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">What to Bring</h3>
                <p>
                  Recommended items include: a flashlight or headlamp, warm clothes for the evening (even in summer),
                  personal toiletries, camera, and any personal medications. A detailed packing list will be provided
                  when you book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Magic of Desert Nights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact me to book your desert camping experience or to discuss custom options for your group.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black border-white hover:bg-white hover:text-black"
          >
            <Link href="/contact">Book Your Desert Camp</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


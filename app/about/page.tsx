import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Languages, Award } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Omar Alzalabeh"
        subtitle="Your local guide to the wonders of Wadi Rum"
        imagePath="/images/hero/about-pc.jpeg"
        mobileImagePath="/images/hero/about-mobile.jpeg"
        height="h-[60vh] md:h-[90vh]"
      />

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/omar-portrait-traditional.jpeg" alt="Omar Alzalabeh" fill className="object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">My Story</h2>
              <p className="text-lg mb-6">
                I am Omar Alzalabeh, born and raised in the heart of Wadi Rum. As a Bedouin, I grew up learning the
                secrets of the desert from my father and grandfather, who taught me how to navigate the vast landscapes,
                find water, and read the stars.
              </p>
              <p className="text-lg mb-6">
                For over 15 years, I've been sharing my knowledge and passion for Wadi Rum with visitors from around the
                world. My deep connection to this land allows me to offer authentic experiences that go beyond typical
                tourist routes.
              </p>
              <p className="text-lg mb-6">
                I organize desert experiences, hiking trips, climbing adventures, jeep tours, and camping experiences.
                Whether you prefer staying in one of my brothers' tented camps or experiencing the true Bedouin way of
                camping under the stars, I can create the perfect desert experience for you.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="text-amber-700 h-5 w-5" />
                  <span>Wadi Rum, Jordan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-amber-700 h-5 w-5" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="text-amber-700 h-5 w-5" />
                  <span>English & Arabic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-amber-700 h-5 w-5" />
                  <span>Certified Local Guide</span>
                </div>
              </div>

              <Button className="bg-amber-700 hover:bg-amber-800">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Why Choose Me As Your Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Local Knowledge</h3>
              <p>
                Born and raised in Wadi Rum, I know every corner of the desert. I can show you hidden gems and secret
                spots that most tourists never see.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Authentic Experience</h3>
              <p>
                Experience true Bedouin hospitality and traditions. Learn about our culture, enjoy traditional food, and
                hear stories passed down through generations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Personalized Service</h3>
              <p>
                I tailor each tour to your interests and needs. Whether you're seeking adventure, relaxation,
                photography opportunities, or cultural insights, I'll create the perfect experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Safety First</h3>
              <p>
                Your safety is my priority. With extensive experience in desert navigation and first aid training, you
                can relax and enjoy your adventure with peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Environmental Respect</h3>
              <p>
                I'm committed to preserving the natural beauty of Wadi Rum for future generations. All my tours follow
                eco-friendly practices and respect the delicate desert ecosystem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Unforgettable Memories</h3>
              <p>
                My goal is to create experiences that will stay with you long after you leave Wadi Rum. From stunning
                sunsets to stargazing nights, these moments will become cherished memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Plan Your Wadi Rum Adventure</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm ready to help you discover the magic of Wadi Rum. Contact me to discuss your interests and create your
            perfect desert experience.
          </p>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10 hover:text-black">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


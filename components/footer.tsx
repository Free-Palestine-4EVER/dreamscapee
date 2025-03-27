import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Wadi Rum Dreamscape"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="mb-4">
              Experienced Wadi Rum guide offering authentic desert experiences, hiking, climbing, jeep tours, and
              camping in the beautiful Wadi Rum desert.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://api.whatsapp.com/send?phone=962777255649&text=Hello%20Omar%20%F0%9F%96%90%EF%B8%8F%0AI%20visited%20your%20website%20and%20im%20interested%20in%20visiting%20Wadi%20Rum%20with%20you%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
              >
                <MessageSquare />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://instagram.com/k244f/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:wadirumdreamscape@gmail.com" className="hover:text-amber-300 transition-colors">
                <Mail />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hiking" className="hover:text-amber-300 transition-colors">
                  Hiking
                </Link>
              </li>
              <li>
                <Link href="/climbing" className="hover:text-amber-300 transition-colors">
                  Climbing
                </Link>
              </li>
              <li>
                <Link href="/jeep-tours" className="hover:text-amber-300 transition-colors">
                  Jeep Tours
                </Link>
              </li>
              <li>
                <Link href="/camping" className="hover:text-amber-300 transition-colors">
                  Camping
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+962 7 7725 5649</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="break-all">wadirumdreamscape@gmail.com</span>
              </li>
              <li>Wadi Rum, Jordan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Wadi Rum Dreamscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


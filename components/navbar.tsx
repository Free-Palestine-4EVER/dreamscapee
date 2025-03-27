"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const routes = [
  { name: "Home", path: "/" },
  { name: "Hiking", path: "/hiking" },
  { name: "Climbing", path: "/climbing" },
  { name: "Jeep Tours", path: "/jeep-tours" },
  { name: "Camping", path: "/camping" },
  { name: "About Me", path: "/about" },
  { name: "FAQ", path: "/faq" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Wadi Rum Dreamscape" width={180} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop menu - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="text-gray-700 hover:text-amber-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-amber-700 hover:bg-amber-800">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              <Link
                href="https://api.whatsapp.com/send?phone=962777255649&text=Hello%20Omar%20%F0%9F%96%90%EF%B8%8F%0AI%20visited%20your%20website%20and%20im%20interested%20in%20visiting%20Wadi%20Rum%20with%20you%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
                WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-gray-700 hover:text-amber-800 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
          <Button className="w-full bg-amber-700 hover:bg-amber-800 mt-2">
            <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              Contact Me
            </Link>
          </Button>
          <Button className="w-full bg-green-500 hover:bg-green-600 mt-2">
            <Link
              href="https://api.whatsapp.com/send?phone=962777255649&text=Hello%20Omar%20%F0%9F%96%90%EF%B8%8F%0AI%20visited%20your%20website%20and%20im%20interested%20in%20visiting%20Wadi%20Rum%20with%20you%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}


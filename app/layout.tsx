import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Omar Alzalabeh | Wadi Rum Guide & Tours",
  description:
    "Explore the beauty of Wadi Rum with experienced local guide Omar Alzalabeh. Desert experiences, hiking, climbing, jeep tours, and camping in the heart of Wadi Rum.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw]`}>
        <LoadingScreen />
        <div className="content">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'
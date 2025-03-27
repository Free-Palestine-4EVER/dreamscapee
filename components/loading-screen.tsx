"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText, setLoadingText] = useState("Starting the fire...")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Set loading text sequence
    const textSequence = [
      { text: "Starting the fire...", time: 0 },
      { text: "Preparing the tea...", time: 1300 },
      { text: "Pouring the tea...", time: 2600 },
    ]

    // Update loading text
    textSequence.forEach(({ text, time }) => {
      setTimeout(() => {
        setLoadingText(text)
      }, time)
    })

    // Update progress bar
    const startTime = Date.now()
    const duration = 4000 // 4 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(100, (elapsed / duration) * 100)
      setProgress(newProgress)

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress)
      } else {
        // Hide loader after duration
        setIsLoading(false)
      }
    }

    requestAnimationFrame(updateProgress)

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden"

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = ""
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="w-64 md:w-80 flex flex-col items-center">
        <div className="mb-8">
          <Image src="/images/logo.png" alt="Wadi Rum Dreamscape" width={250} height={100} className="h-auto w-full" />
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-amber-700 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-amber-900 text-lg">{loadingText}</p>
      </div>
    </div>
  )
}


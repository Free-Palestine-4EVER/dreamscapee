import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  imagePath: string
  mobileImagePath?: string
  height?: string
}

export default function HeroSection({
  title,
  subtitle,
  imagePath,
  mobileImagePath,
  height = "h-[60vh] md:h-[80vh]",
}: HeroSectionProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center text-white`}>
      <div className="absolute inset-0 z-0">
        {/* Desktop Image - hidden on mobile */}
        <div className="hidden md:block h-full w-full">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Mobile Image - hidden on desktop */}
        <div className="block md:hidden h-full w-full">
          <Image src={mobileImagePath || imagePath} alt={title} fill className="object-cover brightness-75" priority />
        </div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}


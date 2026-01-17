"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

const heroImages = [
  "/professional-roofers-working-on-residential-roof-t.jpg",
  "/professional-roofer-working-on-house-roof-sunny-da.jpg",
  "/modern-roof-architecture-aerial-view.jpg",
  "/workers-installing-roof-tiles-residential-house.jpg",
  "/red-metal-roof-construction-workers-scaffolding.jpg",
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('${heroImages[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm">
            Kompletné riešenie pre vašu strechu
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Profesionálne strešné a opravárenské služby
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
            Poskytujeme kvalitné strešné služby s dlhoročnými skúsenosťami. Naši odborníci zabezpečia vašu strechu proti
            všetkým poveternostným podmienkam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#kalkulacka">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 rounded-none text-base w-full sm:w-auto">
                Objednať termín
              </Button>
            </Link>
            <Link href="/#o-nas">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-100 text-gray-900 border-white font-semibold px-8 py-6 rounded-none text-base w-full sm:w-auto"
              >
                O nás
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

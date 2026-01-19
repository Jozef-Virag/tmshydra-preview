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
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
      // Reset transition lock after animation completes
      setTimeout(() => setIsTransitioning(false), 1000)
    }
  }

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
      // Reset transition lock after animation completes
      setTimeout(() => setIsTransitioning(false), 1000)
    }
  }

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
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
            Odborníci na hydroizolácie a zateplenie
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Profesionálne izolácie plochých striech a základov
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
            Špecializujeme sa na hydroizolácie a zateplenie plochých striech, ako aj izolácie základových dosiek. Pôsobíme v Nitrianskom kraji s dlhoročnými skúsenosťami.
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

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentImageIndex) {
                setIsTransitioning(true)
                setCurrentImageIndex(index)
                setTimeout(() => setIsTransitioning(false), 1000)
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? 'w-12 h-3 bg-amber-500'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Prejsť na obrázok ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

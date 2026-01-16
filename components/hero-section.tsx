"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/professional-roofers-working-on-residential-roof-t.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
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
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 rounded-none text-base">
              Objednať termín
            </Button>
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 text-gray-900 border-white font-semibold px-8 py-6 rounded-none text-base"
            >
              O nás
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

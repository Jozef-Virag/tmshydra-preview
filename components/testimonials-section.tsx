"use client"

import { Quote } from "lucide-react"

const logos = ["Natural", "Iconic", "Artisan", "Summit"]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 lg:px-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-roof-architecture-aerial-view.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
        <Quote className="w-16 h-16 text-amber-500 mx-auto mb-8" />
        <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
          "Firma TMSHydra nám vyriešila dlhodobý problém so zatečením plochej strechy. Práce boli vykonané rýchlo, kvalitne a za rozumnú cenu. Môžem len odporučiť."
        </blockquote>
        <div className="mb-12">
          <p className="text-white font-semibold text-lg">Ján Kováč</p>
          <p className="text-gray-400">Majiteľ rodinného domu, Nitra</p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
          {logos.map((logo) => (
            <span key={logo} className="text-white text-xl font-semibold tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

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
          "Dôvera a spoľahlivosť, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure reprehenderit in voluptate."
        </blockquote>
        <div className="mb-12">
          <p className="text-white font-semibold text-lg">Martin Novák</p>
          <p className="text-gray-400">Generálny riaditeľ, Novák s.r.o.</p>
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

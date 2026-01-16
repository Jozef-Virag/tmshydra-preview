"use client"

import { Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-24 px-6 lg:px-12 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with Stats */}
          <div className="relative reveal-left">
            <img src="/professional-roofer-installing-roof-tiles-close-up.jpg" alt="Pokrývač pri práci" className="w-full h-[400px] object-cover" />
            {/* Circular Stats */}
            <div className="absolute -bottom-8 -right-8 lg:right-8 w-36 h-36 bg-amber-500 rounded-full flex flex-col items-center justify-center text-white">
              <span className="text-4xl font-bold">98%</span>
              <span className="text-xs text-center">
                Spokojných
                <br />
                zákazníkov
              </span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance">
              Hľadáte strešné služby?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Neváhajte nás kontaktovať pre bezplatnú konzultáciu a cenovú ponuku. Náš tím odborníkov je pripravený
              pomôcť vám s akýmkoľvek strešným projektom, či už ide o novú strechu alebo opravu existujúcej.
            </p>
            <a
              href="tel:+421911551354
"
              className="inline-flex items-center gap-3 text-white hover:text-amber-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">+421 911 551 354</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

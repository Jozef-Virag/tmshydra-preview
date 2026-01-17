"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="o-nas" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="reveal-left">
            <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm">O našej spoločnosti</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              Dosiahnite svoje ciele rýchlejšie a jednoduchšie
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              S viac ako 30-ročnými skúsenosťami v oblasti strešných služieb sme sa stali lídrom na trhu. Naša
              spoločnosť ponúka komplexné riešenia pre všetky typy striech, od rodinných domov až po veľké komerčné
              budovy. Dôverujte odborníkom.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-6 rounded-none">
              Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Image with Stats */}
          <div className="relative reveal-right">
            <img
              src="/professional-roofer-working-on-house-roof-sunny-da.jpg"
              alt="Profesionálny pokrývač pri práci"
              className="w-full h-[500px] object-cover"
            />

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-amber-500 text-white p-6">
              <span className="text-5xl font-bold">30+</span>
              <p className="text-sm mt-1">
                Rokov
                <br />
                skúseností
              </p>
            </div>

            {/* Get Quote Button */}
            <Link href="/#kontakt" className="absolute top-6 right-6 bg-gray-900 text-white px-4 py-3 flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-medium">Získať ponuku</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

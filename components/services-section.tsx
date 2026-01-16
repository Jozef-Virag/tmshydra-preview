"use client"

import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "/metal-roofing-installation-modern-building.jpg",
    title: "Kovové strechy",
    description: "Odolné a dlhotrvajúce kovové strešné systémy pre moderné budovy.",
  },
  {
    image: "/composition-shingle-roofing-residential.jpg",
    title: "Kompozitné strechy",
    description: "Kvalitné kompozitné šindle pre estetický a funkčný vzhľad.",
  },
  {
    image: "/rain-gutter-installation-house.jpg",
    title: "Odkvapové služby",
    description: "Kompletná inštalácia a údržba odkvapových systémov.",
  },
  {
    image: "/tile-slate-roofing-traditional-house.jpg",
    title: "Škridlové strechy",
    description: "Tradičné škridlové a bridlicové strechy pre elegantný vzhľad.",
  },
  {
    image: "/flat-roof-construction-commercial-building.jpg",
    title: "Ploché strechy",
    description: "Profesionálna konštrukcia plochých striech pre komerčné objekty.",
  },
  {
    image: "/roof-repair-worker-fixing-damaged-roof.jpg",
    title: "Opravy striech",
    description: "Rýchle a spoľahlivé opravy všetkých typov strešných poškodení.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-amber-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Rýchle, cenovo dostupné a kvalitné
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white group reveal-scale" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-amber-500 font-semibold text-sm hover:text-amber-600 transition-colors"
                >
                  Čítať viac <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "/flat-roof-construction-commercial-building.jpg",
    title: "Hydroizolácia plochých striech",
    description: "Profesionálne hydroizolačné systémy pre ploché strechy s dlhou životnosťou.",
  },
  {
    image: "/modern-apartment-building-roof-installation.jpg",
    title: "Zateplenie plochých striech",
    description: "Kvalitné zatepľovacie systémy zvyšujúce energetickú efektívnosť budov.",
  },
  {
    image: "/industrial-warehouse-roof-renovation.jpg",
    title: "Izolácie základových dosiek",
    description: "Odborná izolácia základov proti vlhkosti a podzemnej vode.",
  },
  {
    image: "/roof-repair-worker-fixing-damaged-roof.jpg",
    title: "Opravy plochých striech",
    description: "Rýchle riešenie zatečení a poškodení hydroizolačných vrstiev.",
  },
  {
    image: "/modern-roof-architecture-aerial-view.jpg",
    title: "Rekonštrukcie striech",
    description: "Kompletná obnova plochých striech vrátane odvodnenia a parozábran.",
  },
  {
    image: "/roofing-installation-process.jpg",
    title: "Izolácie základov",
    description: "Ochrana základov proti radónu, vlhkosti a povrchovej vode.",
  },
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="py-24 px-6 lg:px-12 bg-amber-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Komplexné riešenia izolácie
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
                  href="/#kontakt"
                  className="inline-flex items-center text-amber-500 font-semibold text-sm hover:text-amber-600 transition-colors"
                >
                  Kontaktovať nás <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

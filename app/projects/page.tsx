"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const allProjects = [
  {
    id: "1",
    slug: "vymena-strechy-obchodneho-centra",
    image: "/red-metal-roof-construction-workers-scaffolding.jpg",
    title: "Výmena strechy obchodného centra",
    category: "Komerčné",
    description: "Kompletná výmena strechy s novým izolačným systémom pre moderné obchodné centrum v centre Bratislavy.",
  },
  {
    id: "2",
    slug: "nova-strecha-rodinneho-domu",
    image: "/workers-installing-roof-tiles-residential-house.jpg",
    title: "Nová strecha rodinného domu",
    category: "Rezidenčné",
    description: "Inštalácia pálenej krytiny na novostavbu rodinného domu s dôrazom na energetickú efektivitu.",
  },
  {
    id: "3",
    slug: "rekonstrukcia-priemyselnej-haly",
    image: "/industrial-warehouse-roof-renovation.jpg",
    title: "Rekonštrukcia priemyselnej haly",
    category: "Priemyselné",
    description: "Modernizácia strešného plášťa veľkej výrobnej haly vrátane zateplenia a novej hydroizolácie.",
  },
  {
    id: "4",
    slug: "bytovy-komplex-panorama",
    image: "/modern-apartment-building-roof-installation.jpg",
    title: "Bytový komplex Panorama",
    category: "Komerčné",
    description: "Komplexné strešné riešenie pre bytový dom s dôrazom na dlhodobú odolnosť a estetiku.",
  },
  {
    id: "5",
    slug: "rekonstrukcia-historickej-budovy",
    image: "/roof-repair-worker-fixing-damaged-roof.jpg",
    title: "Rekonštrukcia historickej budovy",
    category: "Rekonštrukcie",
    description: "Citlivá obnova strechy pamiatkovej budovy s rešpektovaním historických materiálov a technológií.",
  },
  {
    id: "6",
    slug: "moderna-plecha-strecha",
    image: "/metal-roofing-installation-modern-building.jpg",
    title: "Moderná plechová strecha",
    category: "Komerčné",
    description: "Inštalácia modernej plechovej strechy na komerčnú budovu s integrovanými solárnymi panelmi.",
  },
  {
    id: "7",
    slug: "zimna-zahrada-zasklenie",
    image: "/flat-roof-construction-commercial-building.jpg",
    title: "Plochá strecha komerčnej budovy",
    category: "Komerčné",
    description: "Profesionálna konštrukcia plochej strechy s hydroizolačným systémom najvyššej kvality.",
  },
  {
    id: "8",
    slug: "skridlova-strecha-tradicia",
    image: "/tile-slate-roofing-traditional-house.jpg",
    title: "Škridlová strecha tradičného domu",
    category: "Rezidenčné",
    description: "Tradičná škridlová strecha s využitím kvalitných keramických materiálov pre dlhú životnosť.",
  },
  {
    id: "9",
    slug: "oprava-odkvapov",
    image: "/rain-gutter-installation-house.jpg",
    title: "Kompletný odkvapový systém",
    category: "Rezidenčné",
    description: "Inštalácia kompletného odkvapového systému vrátane zvodov a lapačov lístia.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/roofing-project.jpg"
            alt="Projekty"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-5 py-2 rounded-full mb-6 uppercase tracking-wider">
            Naše projekty
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Portfólio dokončených projektov
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prezrite si našu prácu a presvedčte sa o kvalite služieb, ktoré poskytujeme. Každý projekt je pre nás dôkazom našej odbornosti a záväzku k dokonalosti.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm group-hover:gap-3 transition-all">
                      Zobraziť projekt <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Chcete byť súčasťou našich úspechov?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Kontaktujte nás a my vám pomôžeme realizovať váš strešný projekt s maximálnou profesionalitou a kvalitou.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Kontaktovať nás
            </Link>
          </div>
        </div>
      </section>

      {/* Add fadeInUp animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </main>
  )
}


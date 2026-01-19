"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = ["Všetky", "Komerčné", "Rezidenčné", "Priemyselné", "Základy"]

const projects = [
  {
    id: "1",
    slug: "hydroizolacia-obchodneho-centra",
    image: "/flat-roof-construction-commercial-building.jpg",
    title: "Hydroizolácia obchodného centra",
    category: "Komerčné",
    description: "Kompletná hydroizolácia plochej strechy s PVC fóliou",
  },
  {
    id: "2",
    slug: "zateplenie-bytoveho-domu",
    image: "/modern-apartment-building-roof-installation.jpg",
    title: "Zateplenie bytového domu",
    category: "Rezidenčné",
    description: "Zateplenie plochej strechy bytového domu v Nitre",
  },
  {
    id: "3",
    slug: "izolacia-haly",
    image: "/industrial-warehouse-roof-renovation.jpg",
    title: "Izolácia priemyselnej haly",
    category: "Priemyselné",
    description: "Hydroizolácia a zateplenie plochej strechy výrobnej haly",
  },
  {
    id: "4",
    slug: "rodinny-dom-palarikovo",
    image: "/modern-roof-architecture-aerial-view.jpg",
    title: "Rodinný dom - Palárikovo",
    category: "Rezidenčné",
    description: "Hydroizolácia plochej strechy rodinného domu",
  },
  {
    id: "5",
    slug: "izolacia-zakladov",
    image: "/roofing-installation-process.jpg",
    title: "Izolácia základov novostavby",
    category: "Základy",
    description: "Protiradonová a hydroizolačná ochrana základovej dosky",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Všetky")

  const filteredProjects =
    activeCategory === "Všetky" ? projects : projects.filter((p) => p.category === activeCategory)

  // Re-trigger animations when category changes
  useEffect(() => {
    const elements = document.querySelectorAll("#projekty .reveal-scale")
    elements.forEach((el) => {
      el.classList.remove("visible")
      setTimeout(() => {
        el.classList.add("visible")
      }, 50)
    })
  }, [activeCategory])

  return (
    <section id="projekty" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm">Naše realizácie</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance max-w-3xl mx-auto">
            Pozrite sa na naše zrealizované projekty
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === category
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div key={activeCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project, index) => {
              // First project gets special treatment only when there are 3+ projects
              const isFirstLarge = index === 0 && filteredProjects.length >= 3

              return (
                <Link
                  key={`${activeCategory}-${project.id}`}
                  href={`/projects/${project.slug}`}
                  className={`group relative overflow-hidden rounded-2xl reveal-scale ${
                    isFirstLarge ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="relative w-full h-72 lg:h-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      loading="eager"
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                        isFirstLarge ? "lg:h-full" : "h-72"
                      }`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 ${isFirstLarge ? "p-6 lg:p-8" : "p-6"}`}>
                    <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className={`font-bold text-white mb-2 ${isFirstLarge ? "text-xl lg:text-2xl" : "text-lg"}`}>
                      {project.title}
                    </h3>
                    {isFirstLarge ? (
                      <>
                        <p className="text-gray-300 text-sm mb-4 hidden lg:block">{project.description}</p>
                        <span className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm group-hover:gap-3 transition-all">
                          Zobraziť projekt <ArrowRight className="w-4 h-4" />
                        </span>
                      </>
                    ) : (
                      <>
                        {filteredProjects.length <= 2 && (
                          <p className="text-gray-300 text-sm mb-2 line-clamp-2">{project.description}</p>
                        )}
                        <span className="inline-flex items-center gap-2 text-amber-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Zobraziť <ArrowRight className="w-4 h-4" />
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Žiadne projekty v tejto kategórii</p>
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12 reveal">
          <Link href="/projects">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 rounded-none inline-flex items-center gap-2 transition-colors shadow-md hover:shadow-lg">
              Zobraziť všetky projekty <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

import {ArrowLeft, Play, Star} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const projectDetails: Record<string, any> = {
  "vymena-strechy-obchodneho-centra": {
    title: "Výmena strechy obchodného centra",
    category: "Komerčné, Priemyselné",
    client: "OC Centrum Bratislava",
    startDate: "3. november 2021",
    endDate: "15. august 2021",
    website: "https://obchodnecentrum.sk",
    rating: 5,
    heroImage: "/red-metal-roof-construction-workers-scaffolding.jpg",
    galleryImages: [
      "/red-metal-roof-construction-workers-scaffolding.jpg",
      "/roof-scaffolding-construction.jpg",
      "/roofing-installation-process.jpg",
    ],
    sections: [
      {
        title: "Inštalácia novej strechy",
        description: `Obchodné centrum vyžadovalo kompletnú výmenu strechy. Naša skúsená tímy sa pustila do projektu s profesionálnym prístupom a maximálnou starostlivosťou. Našou prioritou bolo minimalizovať prestoje a zabezpečiť najvyššiu kvalitu práce.
        
Projekt zahŕňal demontáž starej strechy, inštaláciu nového strešného plášťa a zabezpečenie dokonalého utesnenia. Počas celého procesu sme dodržiavali všetky bezpečnostné normy a požiadavky projektovej dokumentácie.`,
      },
      {
        title: "Výzvy projektu",
        description: `Projekt priniesol niekoľko významných výziev, ktoré sme museli prekonať:`,
        challenges: [
          "Pracovníci museli osadzovať správne utesnenie v každej časti",
          "Konštrukcia musela vydržať zatekanie v podľa noriem DIN 1211",
          "Potreba presného dodržania rozpočtu a časového harmonogramu",
          "Koordinácia s prevádzkou obchodného centra počas stavby",
        ],
      },
      {
        title: "Konečný výsledok",
        description: `Projekt bol úspešne dokončený v stanovenej lehote s najvyššou kvalitou. Novo inštalovaná strecha poskytuje spoľahlivú ochranu a dlhú životnosť. Klient je s výsledkom veľmi spokojný.`,
        results: [
          "Strecha nainštalovaná v dohodnutej lehote",
          "Nula problémov s prevádzkou obchodného centra",
          "Vysoká kvalita pozostávania chránená zárukou 20 rokov",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "Nová strecha rodinného domu",
        slug: "nova-strecha-rodinneho-domu",
        image: "/workers-installing-roof-tiles-residential-house.jpg",
      },
      {
        title: "Bytový komplex Panorama",
        slug: "bytovy-komplex-panorama",
        image: "/modern-apartment-building-roof-installation.jpg",
      },
      {
        title: "Rekonštrukcia priemyselnej haly",
        slug: "rekonstrukcia-priemyselnej-haly",
        image: "/industrial-warehouse-roof-renovation.jpg",
      },
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Header />
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">Projekt nenájdený</h1>
          <Link href="/" className="text-amber-500 hover:underline mt-4 block">
            Späť na domov
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-80 md:h-[28rem] bg-gray-900">
        <img
          src={project.heroImage || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-gray-400 uppercase tracking-wider mb-4 text-sm">Projekt</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance max-w-4xl">
              {project.title}
            </h1>
            <p className="text-gray-400 mt-4">DOMOV / PROJEKTY / {project.title.toUpperCase()}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12 px-6 lg:px-12 bg-white -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <img
            src={project.heroImage || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-80 md:h-[28rem] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6 bg-gray-50 rounded-xl">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Kategória</p>
              <p className="font-semibold text-gray-900">{project.category}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Dátum začiatku</p>
              <p className="font-semibold text-gray-900">{project.startDate}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Webstránka</p>
              <p className="font-semibold text-amber-500 truncate">{project.website}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Klient</p>
              <p className="font-semibold text-gray-900">{project.client}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Dátum konca</p>
              <p className="font-semibold text-gray-900">{project.endDate}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Hodnotenie</p>
              <div className="flex gap-1">
                {Array.from({ length: project.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          {project.sections.map((section: any, i: number) => (
            <div key={i} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">{section.description}</p>

              {section.challenges && (
                <div className="space-y-3 bg-gray-50 p-6 rounded-xl">
                  {section.challenges.map((challenge: string, j: number) => (
                    <div key={j} className="flex gap-3 items-start">
                      <span className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.results && (
                <div className="space-y-3 bg-amber-50 p-6 rounded-xl border border-amber-200">
                  {section.results.map((result: string, j: number) => (
                    <div key={j} className="flex gap-3 items-start">
                      <span className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Video Section */}
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden">
            <img
              src={project.heroImage || "/placeholder.svg"}
              alt="Project video"
              className="w-full h-80 md:h-[28rem] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all flex items-center justify-center">
              <div className="bg-amber-500 p-5 rounded-full group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm text-center">
            Naše ďalšie práce
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Preskúmajte ďalšie projekty
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {project.relatedProjects.map((proj: any, i: number) => (
              <Link
                key={i}
                href={`/projects/${proj.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={proj.image || "/roofing-project.jpg"}
                    alt={proj.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-500 transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-semibold text-lg transition-colors group"
            >
              Zobraziť všetky projekty
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

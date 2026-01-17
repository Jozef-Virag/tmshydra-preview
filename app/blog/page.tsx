import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    slug: "ako-spravne-udrzavat-vasu-strechu",
    title: "Ako správne udržiavať vašu strechu",
    date: "15. január 2026",
    author: "Ján Kováč",
    category: "Údržba",
    image: "/roof-maintenance-tips-homeowner.jpg",
    excerpt: "Správna údržba strechy je jedným z najdôležitejších aspektov starostlivosti o váš dom. Strecha je prvou obrannou líniou proti poveternostným vplyvom a jej správna údržba môže výrazne predĺžiť jej životnosť.",
  },
  {
    slug: "porovnanie-stresnych-materialov",
    title: "Porovnanie strešných materiálov",
    date: "10. január 2026",
    author: "Mária Vargová",
    category: "Materiály",
    image: "/modern-roofing-materials-comparison.jpg",
    excerpt: "Výber správneho strešného materiálu je kľúčové rozhodnutie, ktoré ovplyvní vzhľad, funkčnosť a náklady na údržbu vášho domu na desaťročia dopredu.",
  },
  {
    slug: "priprava-strechy-na-zimu",
    title: "Príprava strechy na zimu",
    date: "5. január 2026",
    author: "Peter Horváth",
    category: "Sezónne",
    image: "/winter-roof.jpg",
    excerpt: "Zima prináša špecifické výzvy pre strechy. Pred príchodom zimy si urobte niekoľko dôležitých príprav, aby vaša strecha vydržala mrazivé dni.",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/roofing-project.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-5 py-2 rounded-full mb-6 uppercase tracking-wider">
            Náš Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tipy a rady pre vašu strechu
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prečítajte si naše odborné články plné užitočných informácií o údržbe, materiáloch a trendoch v oblasti strešných prác.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-gray-100"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm group-hover:gap-3 transition-all">
                      Čítať viac <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Máte otázky o vašej streche?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Naši odborníci sú tu pre vás. Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku.
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

      <Footer />
    </main>
  )
}


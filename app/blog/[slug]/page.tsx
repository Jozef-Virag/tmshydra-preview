import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const blogPosts: Record<string, any> = {
  "ako-spravne-udrzavat-vasu-strechu": {
    title: "Ako správne udržiavať vašu strechu",
    date: "15. január 2026",
    author: "Ján Kováč",
    category: "Údržba",
    image: "/roof-maintenance-tips-homeowner.jpg",
    content: `
      <h2>Úvod do strechy správy</h2>
      <p>Správna údržba strechy je jedným z najdôležitejších aspektov starostlivosti o vašom domе. Strecha je prvou obrannou líniou proti počasiu a jej správna údržba môže výrazne predĺžiť jej životnosť.</p>
      
      <h2>Pravidelné kontroly</h2>
      <p>Aspoň dvakrát ročne by ste mali skontrolovať stav vašej strechy. Vyhľadávajte poškodené dlaždice, praskliny alebo miesta, kde sa zbiera voda. Ak si všimnete problém, kontaktujte odborníka.</p>
      
      <h2>Čistenie strešných koryšt</h2>
      <p>Zanešené odtoky môžu spôsobiť záplavu a poškodenie. Čistite ich aspoň raz za mesiac, zvlášť v jesennom období.</p>
      
      <h2>Kontrola obnoveného kovu</h2>
      <p>Ak máte kovy na streche, pravidelne ich kontrolujte na znaky hrdzaviny alebo poškodenia. Ošetrenie kovu môže predĺžiť jeho životnosť.</p>
    `,
  },
  "porovnanie-stresnych-materialov": {
    title: "Porovnanie strešných materiálov",
    date: "10. január 2026",
    author: "Mária Vargová",
    category: "Materiály",
    image: "/modern-roofing-materials-comparison.jpg",
    content: `
      <h2>Ktorý materiál si vybrať?</h2>
      <p>Na trhu existuje veľa rôznych strešných materiálov, z ktorých si možno vybrať. Každý má svoje výhody a nevýhody.</p>
      
      <h2>Pálené dlaždice</h2>
      <p>Klasické a trvanlivé. Pálené dlaždice vydržia 50+ rokov a sú esteticky príjemné.</p>
      
      <h2>Betónové dlaždice</h2>
      <p>Lacnejšia alternatíva k páleným dlaždiciam s dobrou odolnosťou. Vydržia 30-40 rokov.</p>
      
      <h2>Ocelové plechy</h2>
      <p>Moderné, ľahké a ekonomické. Ideálne pre priemyselné budovy a obnovy.</p>
    `,
  },
  "priprava-strechy-na-zimu": {
    title: "Príprava strechy na zimu",
    date: "5. január 2026",
    author: "Peter Szabó",
    category: "Sezónne",
    image: "/winter-roof.jpg",
    content: `
      <h2>Príprava na mrazivé dni</h2>
      <p>Zima prináša špecifické výzvy pre strechy. Pred príchodom zimy si urobte niekoľko dôležitých príprav.</p>
      
      <h2>Čistenie odtokov</h2>
      <p>Zabezpečte, aby boli všetky odtoky a drenážne systémy čisté a bez blokád.</p>
      
      <h2>Izolácia a ventillácia</h2>
      <p>Skontrolujte izoláciu na podkroví a zabezpečte dobrú ventilláciu, aby sa vyhnuli námraze.</p>
      
      <h2>Profesionálna kontrola</h2>
      <p>Pred zimou je dobré nechať si strechu skontrolovať odborníkom, aby identifikoval potenciálne problémy.</p>
    `,
  },
}

const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({
  slug,
  ...post,
}))

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Header />
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold">Článok nenájdený</h1>
          <Link href="/" className="text-amber-500 hover:underline mt-4 block">
            Späť na domov
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 bg-gray-900">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="inline-block bg-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white text-balance max-w-3xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <article className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 mb-10 font-medium transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Späť na blog
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap gap-6 items-center text-gray-600 mb-8 pb-8 border-b">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5 text-amber-500" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-amber-500" />
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Author Card */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">O autorovi</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">Expert na strechy</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Súvisiace články</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                        <div className="flex gap-4">
                          <img
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm group-hover:text-amber-500 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/blog"
                    className="block mt-6 pt-6 border-t border-gray-200 text-center text-amber-500 hover:text-amber-600 font-semibold text-sm transition-colors"
                  >
                    Zobraziť všetky články →
                  </Link>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg mt-8">
                  <h3 className="text-lg font-bold mb-3">Potrebujete pomoc so strechou?</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Kontaktujte našich expertov pre bezplatnú konzultáciu a cenovú ponuku.
                  </p>
                  <Link
                    href="/#kontakt"
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors shadow-lg text-sm"
                  >
                    Kontaktovať nás
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

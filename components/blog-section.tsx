"use client"

import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const posts = [
  {
    slug: "ako-udrzavat-plochu-strechu",
    image: "/roof-maintenance-tips-homeowner.jpg",
    title: "Ako správne udržiavať plochú strechu",
    date: "15. január 2026",
    author: "Ján Kováč",
    excerpt: "Praktické rady pre predĺženie životnosti plochej strechy a prevenciu zatečení.",
  },
  {
    slug: "hydroizolacia-plochej-strechy",
    image: "/modern-roofing-materials-comparison.jpg",
    title: "Výber hydroizolácie pre plochú strechu",
    date: "10. január 2026",
    author: "Mária Vargová",
    excerpt: "Porovnanie asfaltových pásov, PVC fólií a iných moderných hydroizolačných materiálov.",
  },
  {
    slug: "priprava-plochej-strechy-na-zimu",
    image: "/winter-roof.jpg",
    title: "Príprava plochej strechy na zimu",
    date: "5. január 2026",
    author: "Peter Horváth",
    excerpt: "Dôležité kroky kontroly odvodnenia a hydroizolácie pred zimným obdobím.",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm">Najnovšie z blogu</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Najnovšie správy a články
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post - Large */}
          <Link href={`/blog/${posts[0].slug}`} className="group reveal-left block">
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={posts[0].image || "/placeholder.svg"}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {posts[0].author}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-amber-500 transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-amber-500 font-semibold group-hover:gap-3 transition-all">
                  Čítať viac <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          </Link>

          {/* Secondary Posts - Stacked */}
          <div className="flex flex-col gap-6 reveal-right">
            {posts.slice(1).map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col sm:flex-row">
                  <div className="overflow-hidden sm:w-48 lg:w-56 flex-shrink-0">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <Link href="/blog">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 rounded-none">
              Zobraziť všetky články <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

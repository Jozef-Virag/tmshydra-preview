"use client"

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isSubpage = pathname !== "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerBg = isSubpage || scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 24L16 8L24 24"
                stroke="#F5A623"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 24L16 16L20 24"
                stroke="#F5A623"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">TMSHydra</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`flex items-center gap-1 font-medium text-sm transition-colors ${
              pathname === "/" ? "text-amber-500" : "text-white hover:text-amber-500"
            }`}
          >
            Domov
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/#sluzby"
            className="flex items-center gap-1 text-white font-medium text-sm hover:text-amber-500 transition-colors"
          >
            Služby
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/#projekty"
            className="flex items-center gap-1 text-white font-medium text-sm hover:text-amber-500 transition-colors"
          >
            Projekty
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/#kalkulacka"
            className="flex items-center gap-1 text-white font-medium text-sm hover:text-amber-500 transition-colors"
          >
            Cenník
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/#blog"
            className={`flex items-center gap-1 font-medium text-sm transition-colors ${
              pathname.startsWith("/blog") ? "text-amber-500" : "text-white hover:text-amber-500"
            }`}
          >
            Blog
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="/#kontakt" className="text-white font-medium text-sm hover:text-amber-500 transition-colors">
            Kontakt
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Button
          variant="outline"
          className="hidden lg:flex border-white text-white hover:bg-white hover:text-gray-900 rounded-none px-6 py-5 font-medium bg-transparent"
        >
          Začať
        </Button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 bg-gray-900/95 backdrop-blur-sm px-4 py-6 rounded-lg">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-amber-500 font-medium text-sm py-2">
            Domov
          </Link>
          <Link
            href="/#sluzby"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium text-sm hover:text-amber-500 transition-colors py-2"
          >
            Služby
          </Link>
          <Link
            href="/#projekty"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium text-sm hover:text-amber-500 transition-colors py-2"
          >
            Projekty
          </Link>
          <Link
            href="/#kalkulacka"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium text-sm hover:text-amber-500 transition-colors py-2"
          >
            Cenník
          </Link>
          <Link
            href="/#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium text-sm hover:text-amber-500 transition-colors py-2"
          >
            Blog
          </Link>
          <Link
            href="/#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium text-sm hover:text-amber-500 transition-colors py-2"
          >
            Kontakt
          </Link>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white font-medium w-full mt-2">Začať</Button>
        </nav>
      )}
    </header>
  )
}

"use client"

import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TMS Hydra</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Profesionálne hydroizolácie a zateplenie plochých striech, izolácie základov. Poskytujeme služby s dôrazom na kvalitu a spokojnosť zákazníkov.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors rounded"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/421911551354"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-colors rounded"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 flex items-center justify-center transition-colors rounded"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontaktujte nás</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Krížna 79<br />941 11 Palárikovo<br />Slovensko</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+421 911 551 354</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@tmshydra.sk</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Rýchle odkazy</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Domov
                </a>
              </li>
              <li>
                <a href="/#o-nas" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  O nás
                </a>
              </li>
              <li>
                <a href="/#sluzby" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Služby
                </a>
              </li>
              <li>
                <a href="/#projekty" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Projekty
                </a>
              </li>
              <li>
                <a href="/#blog" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#kontakt" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Odoberajte novinky</h4>
            <p className="text-gray-400 text-sm mb-4">
              Získajte tipy na údržbu plochých striech a informácie o nových technológiách.
            </p>
            <div className="flex gap-0">
              <Input
                type="email"
                placeholder="Váš email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-none focus:ring-amber-500"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 rounded-none px-4">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <p className="text-gray-500 text-sm text-center">© 2026 TMS Hydra. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}

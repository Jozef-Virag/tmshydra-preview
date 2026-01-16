"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Info } from "lucide-react"

export function CalculatorSection() {
  const [serviceType, setServiceType] = useState("repair")
  const [roofType, setRoofType] = useState("residential")
  const [roofSize, setRoofSize] = useState("")
  const [hasInsulation, setHasInsulation] = useState(false)
  const [hasWaterproofing, setHasWaterproofing] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)

  // Cenové koeficienty pre slovenský trh (ceny v EUR/m²)
  const calculatePrice = () => {
    const size = Number.parseFloat(roofSize)
    if (!size || size <= 0) return null

    // Základné ceny podľa typu služby (EUR/m²)
    const servicePrices = {
      repair: 45, // Oprava/rekonštrukcia
      new: 85, // Nová strecha
      maintenance: 25, // Údržba
    }

    // Koeficient podľa typu budovy
    const roofTypeMultiplier = {
      residential: 1.0, // Rodinný dom - základná cena
      apartment: 1.15, // Byt - vyššie náklady na prístup
      commercial: 1.25, // Obchodný priestor - prísnejšie normy
      industrial: 1.4, // Priemyselný objekt - najnáročnejšie
    }

    let basePrice = servicePrices[serviceType as keyof typeof servicePrices]
    basePrice *= roofTypeMultiplier[roofType as keyof typeof roofTypeMultiplier]

    // Priplatky za doplnkové služby (EUR/m²)
    let additionalCosts = 0
    if (hasInsulation) {
      additionalCosts += 35 // Zateplenie
    }
    if (hasWaterproofing) {
      additionalCosts += 25 // Prémiová hydroizolácia
    }

    // Celková cena za m²
    const pricePerSqm = basePrice + additionalCosts

    // Celková cena
    let totalPrice = pricePerSqm * size

    // Zľava pre väčšie plochy
    if (size > 200) {
      totalPrice *= 0.9 // 10% zľava
    } else if (size > 100) {
      totalPrice *= 0.95 // 5% zľava
    }

    return Math.round(totalPrice)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const price = calculatePrice()
    setCalculatedPrice(price)

    // Handle form submission
    console.log({
      serviceType,
      roofType,
      roofSize,
      hasInsulation,
      hasWaterproofing,
      name,
      email,
      phone,
      city,
      agreeTerms,
      calculatedPrice: price,
    })
  }

  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm">Kalkulačka</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vypočítajte si cenu plochej strechy ihneď
          </h2>
          <p className="text-gray-600 text-lg">Výpočet je nezáväzný a zdarmo</p>
        </div>

        {/* Calculator Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 shadow-lg reveal-scale">
          {/* Service Type */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              O akú službu máte záujem? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded appearance-none bg-white cursor-pointer text-gray-900"
              >
                <option value="repair">Oprava/rekonštrukcia plochej strechy</option>
                <option value="new">Nová strecha</option>
                <option value="maintenance">Údržba strechy</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Roof Type and Size */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Typ vašej strechy <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={roofType}
                  onChange={(e) => setRoofType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded appearance-none bg-white cursor-pointer text-gray-900"
                >
                  <option value="residential">Rodinný dom</option>
                  <option value="apartment">Byt</option>
                  <option value="commercial">Obchodný priestor</option>
                  <option value="industrial">Priemyselný objekt</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Veľkosť strechy v m<sup>2</sup> <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={roofSize}
                onChange={(e) => setRoofSize(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Options Section */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <label className="block text-sm font-semibold text-gray-900">
                SKLADBA STRECHY <span className="text-xs text-gray-500">*</span>
              </label>
              <button type="button" className="text-gray-400 hover:text-gray-600">
                <Info className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              SKLADBA STRECHY* je hydroizolačná vrstva - hydroizolačné asfaltové pásy nopujúcej kvality
            </p>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasInsulation}
                  onChange={(e) => setHasInsulation(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-amber-500"
                />
                <span className="text-sm font-medium text-gray-900">Zateplenie strechy</span>
                <span className="text-xs text-gray-500">
                  Špecializované s minimálnou separačnou vrstvou podľa nayujúcej kvality
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasWaterproofing}
                  onChange={(e) => setHasWaterproofing(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-amber-500"
                />
                <span className="text-sm font-medium text-gray-900">Hydroizolácia</span>
                <span className="text-xs text-gray-500">
                  Typ hydroizolačného materiálu, modifikovaný asfaltové pásy nopujúcej kvality
                </span>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Kontaktné info <span className="text-red-500">*</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Meno</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Vaše meno"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 placeholder-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">E-mailová adresa</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vasa@email.sk"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Telefónne číslo</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+421 XXX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 placeholder-gray-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Mesto</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Bratislava"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-gray-900 placeholder-gray-400 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-gray-300 text-amber-500"
              />
              <span className="text-xs text-gray-600">
                Súhlasím so spracovaním osobných údajov v súlade s GDPR o ochrane osobných údajov
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-3 rounded-full text-base"
            >
              Vypočítať cenu
            </Button>

            {/* Calculated Price Display */}
            {calculatedPrice !== null && (
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
                <p className="text-sm text-gray-600 mb-2">Odhadovaná cena:</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  {calculatedPrice.toLocaleString("sk-SK")} €
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  {roofSize && Number.parseFloat(roofSize) > 0
                    ? `(${Math.round(calculatedPrice / Number.parseFloat(roofSize))} €/m²)`
                    : ""}
                </p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>✓ Nezáväzná cenová kalkulácia</p>
                  <p>✓ Finálna cena závisí od presnej obhliadky</p>
                  <p>✓ Cena zahŕňa materiál a prácu</p>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4">
              Táto ponuka je zdarma a bez akéhokoľvek záväzku •{" "}
              <a href="#" className="text-amber-500 hover:underline">
                Bezplatná cenová ponuka
              </a>{" "}
              •{" "}
              <a href="#" className="text-amber-500 hover:underline">
                Všeobecné podmienky
              </a>{" "}
              spravuje Google
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

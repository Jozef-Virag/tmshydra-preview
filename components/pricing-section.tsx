"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Základný",
    price: "29",
    description: "Ideálne pre malé opravy a údržbu",
    features: ["Inšpekcia strechy", "Menšie opravy", "Základná konzultácia", "Email podpora"],
    highlighted: false,
  },
  {
    name: "Štandardný",
    price: "59",
    description: "Najobľúbenejšia voľba pre domácnosti",
    features: ["Kompletná inšpekcia", "Stredné opravy", "Detailná správa", "Prioritná podpora", "Záruka 2 roky"],
    highlighted: true,
  },
  {
    name: "Prémiový",
    price: "119",
    description: "Kompletné riešenie pre náročných",
    features: [
      "VIP servis",
      "Všetky typy opráv",
      "Non-stop podpora",
      "Záruka 5 rokov",
      "Pravidelná údržba",
      "Prioritné termíny",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm">Cenové plány</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Vyberte si správny plán</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 reveal-scale ${
                plan.highlighted
                  ? "bg-gray-900 text-white -mt-4 mb-4 lg:-mt-8 lg:mb-8 shadow-2xl"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 text-sm font-medium">
                  Odporúčané
                </div>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.highlighted ? "text-gray-400" : "text-gray-500"}>/mesiac</span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-600"}`}>{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlighted ? "text-amber-500" : "text-amber-500"}`} />
                    <span className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-6 rounded-none font-semibold ${
                  plan.highlighted
                    ? "bg-amber-500 hover:bg-amber-600 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Vybrať plán
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

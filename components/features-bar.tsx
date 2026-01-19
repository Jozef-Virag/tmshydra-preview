"use client"

import { Award, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Certifikované materiály",
    description: "Používame len prémiové hydroizolačné materiály s dlhou životnosťou.",
  },
  {
    icon: Users,
    title: "Skúsený tým",
    description: "Vyškolení odborníci s certifikátmi pre izolácie plochých striech.",
  },
  {
    icon: Clock,
    title: "Rýchla reakcia",
    description: "Pohotová diagnostika a riešenie problémov s vlhkosťou a zatečením.",
  },
]

export function FeaturesBar() {
  return (
    <section className="relative z-20 px-6 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 shadow-xl reveal">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 flex items-start gap-4 ${
                index === 1 ? "bg-amber-500 text-white" : "bg-white text-gray-900"
              }`}
            >
              <div className={`p-3 rounded-full ${index === 1 ? "bg-white/20" : "bg-amber-500/10"}`}>
                <feature.icon className={`w-6 h-6 ${index === 1 ? "text-white" : "text-amber-500"}`} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${index === 1 ? "text-white/90" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

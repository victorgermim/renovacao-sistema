"use client"

import { siteConfig } from "@/lib/site-config"
import { Users, Hotel, DollarSign, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const iconMap = {
  users: Users,
  hotel: Hotel,
  money: DollarSign,
  chart: TrendingUp,
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: string
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericValue = Number.parseInt(value)
          if (isNaN(numericValue)) return

          const duration = 2000
          const steps = 60
          const increment = numericValue / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              setCount(numericValue)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados</h2>
          <p className="text-muted-foreground text-lg">Números que comprovam o sucesso do programa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <div key={index} className="text-center space-y-3">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold tabular-nums">
                  <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-base font-semibold">{stat.label}</div>

                {/* Description */}
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

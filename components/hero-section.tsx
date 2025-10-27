"use client"

import { siteConfig } from "@/lib/site-config"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        {/* Year badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
          {siteConfig.year}
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">{siteConfig.hero.headline}</h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">{siteConfig.hero.subheadline}</p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          {siteConfig.hero.description}
        </p>

        <div className="pt-4">
          <Button onClick={scrollToPricing} size="lg" className="text-base px-8">
            {siteConfig.hero.cta}
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToPricing}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8 group"
        >
          Ver resultados
          <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

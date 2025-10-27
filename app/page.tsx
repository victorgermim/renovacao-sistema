import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <PricingSection />
    </main>
  )
}

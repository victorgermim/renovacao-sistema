"use client"

import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Escolha Seu Plano de Renovação</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantenha seu sistema ativo, seguro e evoluindo. Escolha o plano ideal para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative bg-card border rounded-3xl p-8 flex flex-col",
                plan.highlighted && "border-primary shadow-lg scale-105",
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-sm text-muted-foreground">{plan.installments} de</span>
                    <span className="text-4xl font-bold">R$ {plan.price}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total: R$ {(Number.parseFloat(plan.price) * 10).toFixed(0)}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full",
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80",
                )}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.renewal.reasons.map((reason, index) => (
            <div key={index} className="text-center space-y-2">
              <h4 className="font-semibold text-sm">{reason.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Dúvidas sobre qual plano escolher?{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline font-medium">
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

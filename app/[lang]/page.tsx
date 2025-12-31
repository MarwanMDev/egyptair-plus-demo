import { HeroCarousel } from "@/components/ui/hero-carousel"
import { getDictionary } from "@/lib/get-dictionary"
import { Locale } from "@/i18n-config"
import { BenefitsSection } from "@/components/home/benefits-section"
import { TiersSection } from "@/components/home/tiers-section"
import { TierCards3D } from "@/components/home/tier-cards-3d"
import { Badge } from "@/components/ui/badge"
import { LiquidTransition } from "@/components/ui/liquid-transition"
import { SkyMap } from "@/components/home/sky-map"
import { FloatingClouds } from "@/components/ui/floating-clouds"
import { RevealAnimation } from "@/components/ui/reveal-animation"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Locale
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <FloatingClouds />

      {/* Hero Section */}
      <HeroCarousel dictionary={dictionary.hero} lang={lang} />

      <LiquidTransition variant="downward" />

      {/* Benefits Section */}
      <RevealAnimation>
        <BenefitsSection lang={lang} dictionary={dictionary.benefits} />
      </RevealAnimation>

      <LiquidTransition variant="swirl" className="-mt-32 h-64" />

      <RevealAnimation>
        <SkyMap dictionary={dictionary.dashboard.skyMap} />
      </RevealAnimation>

      <LiquidTransition variant="upward" className="-mt-16" />

      {/* Tiers Preview */}
      <RevealAnimation
        className="bg-gradient-to-b from-transparent to-primary/5 py-24 relative"
      >
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="glass" className="bg-secondary/20 text-secondary border-secondary/30 uppercase tracking-[0.3em] font-black">
              {dictionary.tiersSection.title}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-primary dark:text-secondary tracking-tighter">
              Elevate Your Status
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              {dictionary.tiersSection.description}
            </p>
          </div>
        </div>
        <TierCards3D dictionary={dictionary.tiersSection} />
      </RevealAnimation>
    </div>
  )
}

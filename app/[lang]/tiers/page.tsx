import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getDictionary } from "@/lib/get-dictionary"
import { Locale } from "@/i18n-config"
import { LiquidTransition } from "@/components/ui/liquid-transition"
import * as motion from "framer-motion/client"
import { TierCard } from "./tier-card"

export default async function TiersPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)
    const t = dictionary.tiers

    const tierKeys = ["blue", "silver", "gold", "elite", "platinum"]

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,177,0.15),transparent_70%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary font-medium tracking-wider uppercase bg-primary/5">
                            {t.qualification}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                            {t.title.split(' ')[0]} <span className="text-gold">{t.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                            {t.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            <LiquidTransition variant="downward" />

            {/* Tiers Grid */}
            <section className="py-24 relative z-10 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {tierKeys.map((key, index) => {
                            const level = t.levels[key as keyof typeof t.levels]

                            return (
                                <TierCard
                                    key={key}
                                    tierKey={key}
                                    level={level}
                                    index={index}
                                />
                            )
                        }
                        )}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-32 max-w-4xl mx-auto"
                    >
                        <div className="glass-card p-12 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5 opacity-50" />
                            <div className="relative z-10 space-y-6">
                                <h2 className="text-4xl font-bold text-primary tracking-tight">
                                    {t.cta.title}
                                </h2>
                                <p className="text-xl text-muted-foreground/80">
                                    {t.cta.subtitle}
                                </p>
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95 text-lg">
                                    {t.cta.button}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <LiquidTransition variant="swirl" className="mt-20" />
        </div>
    )
}

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getDictionary } from "@/lib/get-dictionary"
import { Locale } from "@/i18n-config"
import { LiquidTransition } from "@/components/ui/liquid-transition"
import * as motion from "framer-motion/client"

export default async function TiersPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)
    const t = dictionary.tiers

    const tierConfigs = [
        {
            key: "blue",
            color: "from-blue-600/20 to-blue-900/40",
            borderColor: "group-hover:border-blue-500/50",
            iconColor: "text-blue-500",
            badgeColor: "bg-blue-500/10 text-blue-500",
            shadow: "hover:shadow-blue-500/10",
        },
        {
            key: "silver",
            color: "from-slate-400/20 to-slate-600/40",
            borderColor: "group-hover:border-slate-400/50",
            iconColor: "text-slate-400",
            badgeColor: "bg-slate-400/10 text-slate-400",
            shadow: "hover:shadow-slate-400/10",
        },
        {
            key: "gold",
            color: "from-gold/20 to-gold/40",
            borderColor: "group-hover:border-gold/50",
            iconColor: "text-gold",
            badgeColor: "bg-gold/10 text-gold",
            shadow: "hover:shadow-gold/10",
        },
        {
            key: "elite",
            color: "from-red-900/20 to-red-950/40",
            borderColor: "group-hover:border-red-800/50",
            iconColor: "text-red-700",
            badgeColor: "bg-red-900/20 text-red-700",
            shadow: "hover:shadow-red-900/20",
        },
        {
            key: "platinum",
            color: "from-slate-800/20 to-slate-950/40",
            borderColor: "group-hover:border-slate-700/50",
            iconColor: "text-slate-300",
            badgeColor: "bg-slate-800/50 text-slate-300",
            shadow: "hover:shadow-slate-800/20",
        }
    ]

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
                        {tierConfigs.map((config, index) => {
                            const level = t.levels[config.key as keyof typeof t.levels]
                            return (
                                <motion.div
                                    key={config.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className={`glass-card group flex flex-col h-full border-none shadow-2xl transition-all duration-500 ${config.shadow} relative overflow-hidden active:scale-[0.98]`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-30 transition-opacity group-hover:opacity-50 duration-500`} />

                                        <CardHeader className="relative z-10 pt-8 pb-4">
                                            <div className="flex justify-between items-center mb-4">
                                                <Badge className={`${config.badgeColor} border-none font-semibold uppercase tracking-widest text-[10px]`}>
                                                    {config.key === "blue" ? t.entryLevel : "Premium"}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-3xl font-black tracking-tight text-primary group-hover:text-gold transition-colors">
                                                {level.name.toUpperCase()}
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground/80 font-medium mt-2 min-h-[40px]">
                                                {level.description}
                                            </p>
                                        </CardHeader>

                                        <CardContent className="relative z-10 flex-1 space-y-6 pb-8">
                                            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                                            <ul className="space-y-4">
                                                {level.benefits.map((benefit, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className="flex items-start gap-3 group/item"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                    >
                                                        <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center shrink-0 bg-primary/5 group-hover/item:bg-primary/10 transition-colors`}>
                                                            <Check className={`h-3 w-3 ${config.iconColor}`} />
                                                        </div>
                                                        <span className="text-sm font-medium text-muted-foreground/90 group-hover/item:text-primary transition-colors leading-tight">
                                                            {benefit}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
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

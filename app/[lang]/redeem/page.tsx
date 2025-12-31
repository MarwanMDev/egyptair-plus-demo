import Link from "next/link"
import { Plane, ArrowUpCircle, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/lib/get-dictionary"
import { Locale } from "@/i18n-config"
import { LiquidTransition } from "@/components/ui/liquid-transition"

export default async function RedeemPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)
    const t = dictionary.redeem

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,177,0.15),transparent_70%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4">
                            <span className="text-sm font-medium tracking-wider text-primary uppercase">
                                {t.title}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                            {t.title.split(' ')[0]} <span className="text-gold">{t.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <LiquidTransition variant="downward" />

            {/* Redeem Grid */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Award Flights */}
                        <Card className="glass-card group hover:scale-[1.02] transition-all duration-500 border-none shadow-xl overflow-hidden">
                            <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center relative overflow-hidden">
                                <Plane className="h-20 w-20 text-primary/40 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-700 ease-out" />
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <CardHeader className="pt-8">
                                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {t.flights.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8 pb-8">
                                <p className="text-muted-foreground leading-relaxed h-20">
                                    {t.flights.text}
                                </p>
                                <Link href={`/${lang}/dashboard`}>
                                    <Button className="w-full h-12 rounded-xl text-lg font-medium shadow-lg hover:shadow-primary/20 transition-all bg-primary hover:bg-primary/90">
                                        {t.flights.cta}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Upgrade Awards */}
                        <Card className="glass-card group hover:scale-[1.02] transition-all duration-500 border-none shadow-xl overflow-hidden">
                            <div className="aspect-[16/10] w-full bg-gradient-to-br from-secondary/10 to-transparent flex items-center justify-center relative overflow-hidden">
                                <ArrowUpCircle className="h-20 w-20 text-secondary/40 group-hover:scale-110 group-hover:text-secondary/60 transition-all duration-700 ease-out" />
                                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <CardHeader className="pt-8">
                                <CardTitle className="text-2xl font-bold group-hover:text-secondary transition-colors">
                                    {t.upgrade.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8 pb-8">
                                <p className="text-muted-foreground leading-relaxed h-20">
                                    {t.upgrade.text}
                                </p>
                                <Link href={`/${lang}/dashboard`}>
                                    <Button className="w-full h-12 rounded-xl text-lg font-medium shadow-lg hover:shadow-secondary/20 transition-all bg-secondary hover:bg-secondary/90 text-white">
                                        {t.upgrade.cta}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Excess Baggage */}
                        <Card className="glass-card group hover:scale-[1.02] transition-all duration-500 border-none shadow-xl overflow-hidden">
                            <div className="aspect-[16/10] w-full bg-gradient-to-br from-gold/10 to-transparent flex items-center justify-center relative overflow-hidden">
                                <Briefcase className="h-20 w-20 text-gold/40 group-hover:scale-110 group-hover:text-gold/60 transition-all duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <CardHeader className="pt-8">
                                <CardTitle className="text-2xl font-bold group-hover:text-gold transition-colors">
                                    {t.baggage.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8 pb-8">
                                <p className="text-muted-foreground leading-relaxed h-20">
                                    {t.baggage.text}
                                </p>
                                <Link href={`/${lang}/dashboard`}>
                                    <Button className="w-full h-12 rounded-xl text-lg font-medium shadow-lg hover:shadow-gold/20 transition-all bg-gold hover:bg-gold/90 text-white border-none">
                                        {t.baggage.cta}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <LiquidTransition variant="swirl" className="mt-20" />
        </div>
    )
}

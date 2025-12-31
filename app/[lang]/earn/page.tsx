import Link from "next/link"
import { Plane, CreditCard, ShoppingBag, Hotel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"
import { LiquidTransition } from "@/components/ui/liquid-transition"
import { Badge } from "@/components/ui/badge"
import { EarnCalculator } from "@/components/earn/earn-calculator"

export default async function EarnPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)
    const t = dictionary.earn

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative">
            {/* Animated Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <section className="relative pt-32 pb-24 overflow-hidden z-10">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <Badge variant="glass" className="bg-secondary/20 text-secondary border-secondary/30 uppercase tracking-[0.3em] font-black">
                            {t.title}
                        </Badge>
                        <h1 className="text-6xl md:text-8xl font-black text-primary dark:text-secondary tracking-tighter leading-none">
                            Every Mile <br /> <span className="opacity-50 italic">Counts.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            <LiquidTransition variant="downward" />

            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
                        <section className="space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-12 bg-secondary rounded-full" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">{t.fly.title}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary dark:text-primary-foreground">
                                    Earn with <span className="text-secondary">EgyptAir</span>
                                </h2>
                                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                    {t.fly.description}
                                </p>
                            </div>

                            <div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-3xl overflow-hidden glass-card">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-b border-white/5 hover:bg-transparent">
                                            <TableHead className="text-[10px] font-black uppercase tracking-widest py-6 px-8">{t.fly.table.cabin}</TableHead>
                                            <TableHead className="text-[10px] font-black uppercase tracking-widest py-6 px-8">{t.fly.table.booking}</TableHead>
                                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-right py-6 px-8">{t.fly.table.miles}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { cabin: "Business", classes: "C, D, J, Z", rate: "125% - 200%" },
                                            { cabin: "Economy (Flex)", classes: "Y, B, M", rate: "100%" },
                                            { cabin: "Economy (Saver)", classes: "H, Q, K", rate: "70% - 75%" },
                                            { cabin: "Promo / Discount", classes: "Various", rate: "0% - 50%" }
                                        ].map((row, idx) => (
                                            <TableRow key={idx} className="border-b border-white/5 last:border-0 group hover:bg-white/5 transition-colors">
                                                <TableCell className="font-black text-primary dark:text-white py-6 px-8">{row.cabin}</TableCell>
                                                <TableCell className="font-mono text-xs opacity-60 py-6 px-8">{row.classes}</TableCell>
                                                <TableCell className="text-right font-black text-secondary py-6 px-8">
                                                    <span className="group-hover:tracking-widest transition-all duration-300">{row.rate}</span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic font-medium opacity-60 px-4">
                                {t.fly.disclaimer}
                            </p>
                        </section>

                        <div className="sticky top-32">
                            <EarnCalculator dictionary={t.calculator} />
                        </div>
                    </div>

                    <LiquidTransition variant="swirl" className="mb-24" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                        <section className="space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-12 bg-primary rounded-full" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary dark:text-secondary">{t.starAlliance.title}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary dark:text-primary-foreground">
                                    Global Network <span className="opacity-40 italic">Sync</span>
                                </h2>
                                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                    {t.starAlliance.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {t.starAlliance.list.map((item: string, index: number) => (
                                    <div key={index} className="flex gap-6 p-6 rounded-3xl glass-card border-none hover:bg-white/5 transition-all group">
                                        <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 group-hover:scale-110 transition-transform">
                                            <span className="text-xl font-black text-secondary">{index + 1}</span>
                                        </div>
                                        <p className="text-sm font-bold text-muted-foreground leading-relaxed group-hover:text-primary dark:group-hover:text-white transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="flex flex-col justify-center">
                            <Card className="glass-card border-none p-10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Plane className="h-32 w-32 rotate-45" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <Badge variant="outline" className="border-secondary/30 text-secondary bg-secondary/5 font-black tracking-widest uppercase py-1 px-4">
                                        {t.starAlliance.didYouKnow.title}
                                    </Badge>
                                    <p className="text-2xl font-black tracking-tighter text-primary dark:text-white leading-tight">
                                        {t.starAlliance.didYouKnow.text}
                                    </p>
                                    <Link href={`/${lang}/earn/star-alliance`}>
                                        <Button variant="link" className="px-0 text-secondary font-black tracking-widest uppercase text-[10px] hover:tracking-[0.2em] transition-all">
                                            {t.starAlliance.viewList} →
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
                        {[
                            { icon: CreditCard, title: t.cobranded.title, desc: t.cobranded.description, text: t.cobranded.text, cta: t.cobranded.cta },
                            { icon: Hotel, title: t.hotels.title, desc: t.hotels.description, text: t.hotels.text, cta: t.hotels.cta }
                        ].map((service, idx) => (
                            <Card key={idx} className="glass-card border-none hover:scale-[1.02] transition-all cursor-pointer group p-10">
                                <div className="space-y-6">
                                    <div className="h-16 w-16 rounded-3xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">{service.desc}</h4>
                                        <h3 className="text-3xl font-black tracking-tighter text-primary dark:text-white">{service.title}</h3>
                                    </div>
                                    <p className="text-sm font-bold text-muted-foreground leading-relaxed">
                                        {service.text}
                                    </p>
                                    <Button variant="link" className="px-0 text-primary dark:text-white font-black tracking-widest uppercase text-[10px] hover:tracking-[0.2em] transition-all">
                                        {service.cta} &rarr;
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 p-12 glass-card border-none rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="space-y-4 relative z-10">
                            <Badge variant="outline" className="border-primary/30 text-primary dark:text-secondary bg-primary/5 font-black tracking-widest uppercase py-1 px-4">
                                Tracking Assistance
                            </Badge>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-primary dark:text-white">{t.missing.title}</h3>
                            <p className="text-lg text-muted-foreground font-medium max-w-lg leading-relaxed">
                                {t.missing.text}
                            </p>
                        </div>
                        <Link href={`/${lang}/dashboard`} className="relative z-10">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-black tracking-widest uppercase h-16 px-10 rounded-2xl transition-all hover:scale-110 shadow-2xl">
                                {t.missing.cta}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

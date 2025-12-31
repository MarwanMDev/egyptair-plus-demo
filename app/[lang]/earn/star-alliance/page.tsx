import Link from "next/link"
import { Star, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"
import { LiquidTransition } from "@/components/ui/liquid-transition"
import { Badge } from "@/components/ui/badge"
import * as motion from "framer-motion/client"

const partners = [
    "Aegean Airlines", "Air Canada", "Air China", "Air India", "Air New Zealand",
    "ANA", "Asiana Airlines", "Austrian", "Avianca", "Brussels Airlines",
    "Copa Airlines", "Croatia Airlines", "Ethiopian Airlines", "EVA Air",
    "LOT Polish Airlines", "Lufthansa", "Shenzhen Airlines", "Singapore Airlines",
    "South African Airways", "SWISS", "TAP Air Portugal", "THAI", "Turkish Airlines",
    "United"
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default async function StarAlliancePage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)
    const t = dictionary.earn.starAlliance

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative">
            {/* Animated Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden z-10">
                <div className="container mx-auto px-4 md:px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href={`/${lang}/earn`}
                            className="inline-flex items-center text-muted-foreground hover:text-secondary transition-all group mb-8 font-black uppercase tracking-[0.2em] text-[10px]"
                        >
                            <ArrowLeft className={`h-4 w-4 ${lang === 'ar' ? 'ml-2 rotate-180' : 'mr-2'} group-hover:-translate-x-1 transition-transform font-black`} />
                            {t.backToEarn}
                        </Link>
                    </motion.div>

                    <div className="max-w-4xl space-y-6">
                        <Badge variant="glass" className="bg-secondary/20 text-secondary border-secondary/30 uppercase tracking-[0.3em] font-black">
                            {t.title}
                        </Badge>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary dark:text-secondary tracking-tighter leading-[0.85]">
                            {t.pageTitle.split(' ')[0]} <br />
                            <span className="opacity-50 italic">{t.pageTitle.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                            {t.pageSubtitle}
                        </p>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
                    <Star className="h-96 w-96 rotate-12" />
                </div>
            </section>

            <LiquidTransition variant="downward" />

            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mb-24">
                        <p className="text-xl text-muted-foreground font-medium leading-relaxed italic border-l-4 border-secondary/30 pl-8">
                            {t.intro}
                        </p>
                    </div>

                    {/* Chart Section */}
                    <div className="mb-32">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-12 bg-secondary rounded-full" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Rewards</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary dark:text-primary-foreground">
                                    {t.chartsTitle}
                                </h2>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic font-medium opacity-60">
                                {t.chartsDisclaimer}
                            </p>
                        </div>

                        <Card className="glass-card border-none shadow-3xl overflow-hidden rounded-[2rem] md:rounded-[3rem]">
                            <CardContent className="p-0 overflow-x-auto">
                                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 dark:divide-white/10">
                                    {[
                                        {
                                            name: "Lufthansa",
                                            data: [
                                                { class: "First (A, F)", rate: "200% - 300%" },
                                                { class: "Business (C, D, J)", rate: "150% - 200%" },
                                                { class: "Economy (Y, B)", rate: "100% - 125%" },
                                                { class: "Economy (L, S, W)", rate: "25% - 50%" }
                                            ]
                                        },
                                        {
                                            name: "United Airlines",
                                            data: [
                                                { class: "Business (J, C, D)", rate: "150% - 200%" },
                                                { class: "Economy (Y, B, M)", rate: "100%" },
                                                { class: "Economy (H, Q, V)", rate: "75%" },
                                                { class: "Basic Economy", rate: "0%", muted: true }
                                            ]
                                        },
                                        {
                                            name: "Turkish Airlines",
                                            data: [
                                                { class: "Business (C, D, K)", rate: "150%" },
                                                { class: "Economy (Y, B, M)", rate: "100%" },
                                                { class: "Economy (H, S, E)", rate: "70%" },
                                                { class: "Promo (V, W, F)", rate: "25% - 50%" }
                                            ]
                                        }
                                    ].map((partner, pIdx) => (
                                        <div key={pIdx} className="p-10 space-y-8">
                                            <h3 className="text-2xl font-black tracking-tighter text-primary dark:text-white flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-secondary" />
                                                {partner.name}
                                            </h3>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="border-b border-white/5 hover:bg-transparent">
                                                        <TableHead className="text-[10px] font-black uppercase tracking-widest p-0 h-10">{t.tableHeaders.class}</TableHead>
                                                        <TableHead className="text-[10px] font-black uppercase tracking-widest text-right p-0 h-10">{t.tableHeaders.earned}</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {partner.data.map((row, rIdx) => (
                                                        <TableRow key={rIdx} className="border-b border-white/5 last:border-0 group hover:bg-white/5 transition-colors">
                                                            <TableCell className="font-bold text-sm text-primary dark:text-white/80 py-4 px-0 px-r-4">{row.class}</TableCell>
                                                            <TableCell className={`text-right font-black py-4 px-0 ${row.muted ? 'text-muted-foreground opacity-40' : 'text-secondary'}`}>
                                                                <span className="group-hover:tracking-widest transition-all duration-300">{row.rate}</span>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <LiquidTransition variant="swirl" className="mb-24" />

                    {/* Member Airlines Section */}
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-12 bg-primary rounded-full" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary dark:text-secondary">Network</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary dark:text-primary-foreground">
                                {t.memberAirlinesTitle}
                            </h2>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6"
                        >
                            {partners.map((partner) => (
                                <motion.div
                                    variants={item}
                                    key={partner}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass-card group flex items-center justify-center p-8 rounded-3xl h-32 text-center border-none shadow-xl hover:shadow-2xl transition-all cursor-default"
                                >
                                    <span className="text-sm font-black tracking-tight text-primary dark:text-white/70 group-hover:text-secondary transition-colors leading-tight">
                                        {partner}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <LiquidTransition variant="downward" className="mt-24 rotate-180" />
        </div>
    )
}

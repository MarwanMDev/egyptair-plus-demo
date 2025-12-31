"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TiersSection({ lang, dictionary }: { lang: string, dictionary: any }) {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            {dictionary.title}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {dictionary.description}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                                <span className="font-medium">{dictionary.blue}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                                <span className="font-medium">{dictionary.silver}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                                <span className="font-medium">{dictionary.gold}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                                <span className="font-medium">{dictionary.platinum}</span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link href={`/${lang}/tiers`}>
                                <Button variant="default" className="gap-2">
                                    {dictionary.viewAll} <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} className="transform translate-y-8">
                                <img src="/images/card-blue.png" alt="Blue Tier" className="rounded-xl shadow-xl border border-white/10" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <img src="/images/card-silver.png" alt="Silver Tier" className="rounded-xl shadow-xl border border-white/10" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="transform -translate-y-8">
                                <img src="/images/card-gold.png" alt="Gold Tier" className="rounded-xl shadow-xl border border-white/10" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <img src="/images/card-platinum.png" alt="Platinum Tier" className="rounded-xl shadow-xl border border-white/10" />
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-secondary/20 blur-3xl -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

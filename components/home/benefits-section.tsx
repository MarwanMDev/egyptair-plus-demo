"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, Plane, Star } from "lucide-react"

export function BenefitsSection({ lang, dictionary }: { lang: string, dictionary: any }) {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{dictionary.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{dictionary.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <Card className="bg-card hover:shadow-lg transition-shadow border-none shadow-md h-full">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Plane className="h-6 w-6 text-primary rotate-[-45deg]" />
                                </div>
                                <CardTitle>{dictionary.earn.title}</CardTitle>
                                <CardDescription>
                                    {dictionary.earn.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {dictionary.earn.text}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <Card className="bg-card hover:shadow-lg transition-shadow border-none shadow-md h-full">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Star className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>{dictionary.lounge.title}</CardTitle>
                                <CardDescription>
                                    {dictionary.lounge.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {dictionary.lounge.text}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <Card className="bg-card hover:shadow-lg transition-shadow border-none shadow-md h-full">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>{dictionary.priority.title}</CardTitle>
                                <CardDescription>
                                    {dictionary.priority.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {dictionary.priority.text}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

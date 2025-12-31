"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import { Dictionary } from "@/types/dictionary"

const partners = [
    { name: "Lufthansa", x: 20, y: 30, size: 40 },
    { name: "United", x: 80, y: 20, size: 35 },
    { name: "Singapore Airlines", x: 70, y: 70, size: 45 },
    { name: "Air Canada", x: 15, y: 80, size: 38 },
    { name: "Turkish Airlines", x: 50, y: 50, size: 50, primary: true }, // EgyptAir Hub (conceptual)
    { name: "ANA", x: 90, y: 50, size: 30 },
]

export function StarAllianceWeb({ dictionary }: { dictionary: Dictionary['dashboard']['network'] }) {
    const [hovered, setHovered] = React.useState<string | null>(null)

    return (
        <Card className="overflow-hidden glass-card h-full relative border-none group flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-50 z-0" />

            <CardHeader className="absolute top-0 left-0 w-full z-20 p-8 flex flex-row items-center justify-between pointer-events-none">
                <div className="space-y-1">
                    <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] opacity-60 italic">
                        {dictionary.subtitle}
                    </CardTitle>
                    <p className="text-3xl font-black text-primary dark:text-primary-foreground tracking-tighter">
                        {dictionary.title}
                    </p>
                </div>
                <div className="p-3 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md">
                    <Globe className="h-6 w-6 text-secondary animate-[spin_10s_linear_infinite]" />
                </div>
            </CardHeader>

            <CardContent className="flex-1 p-0 flex items-center justify-center relative overflow-hidden bg-[#001D36] min-h-[300px]">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(to right, #C5A96F 1px, transparent 1px), linear-gradient(to bottom, #C5A96F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <svg className="w-full h-full absolute inset-0 z-10">
                    <defs>
                        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {/* Connections */}
                    {partners.map((p, i) => (
                        <React.Fragment key={i}>
                            {partners.slice(i + 1).map((target, j) => (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={`${p.x}%`}
                                    y1={`${p.y}%`}
                                    x2={`${target.x}%`}
                                    y2={`${target.y}%`}
                                    stroke="url(#line-grad)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: hovered === p.name || hovered === target.name ? 0.8 : 0.2,
                                        stroke: hovered === p.name || hovered === target.name ? "var(--secondary)" : "rgba(197,169,111,0.2)"
                                    }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </svg>

                {/* Partner Nodes */}
                {partners.map((p) => (
                    <motion.div
                        key={p.name}
                        className="absolute z-20 cursor-pointer group"
                        style={{ left: `${p.x}%`, top: `${p.y}%`, x: "-50%", y: "-50%" }}
                        onHoverStart={() => setHovered(p.name)}
                        onHoverEnd={() => setHovered(null)}
                        whileHover={{ scale: 1.4 }}
                    >
                        <div className={`rounded-full flex items-center justify-center transition-all duration-700 ${p.primary
                            ? "w-14 h-14 bg-secondary shadow-[0_0_30px_rgba(197,169,111,0.6)] border-4 border-primary/20"
                            : "w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-secondary/50 group-hover:bg-secondary/20 shadow-xl"
                            }`}>
                            <div className={`rounded-full shadow-inner ${p.primary ? "w-3 h-3 bg-primary" : "w-2 h-2 bg-secondary"}`} />
                        </div>

                        <motion.div
                            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-xl border border-secondary/30 px-3 py-1.5 rounded-lg text-[10px] font-black text-secondary whitespace-nowrap pointer-events-none shadow-2xl tracking-widest uppercase z-30"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{
                                y: hovered === p.name ? 0 : 10,
                                opacity: hovered === p.name ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {p.name}
                        </motion.div>
                    </motion.div>
                ))}

                {/* Depth Atmosphere */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,48,91,0.4),transparent_80%)]" />
            </CardContent>

            <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-3 text-[10px] font-black text-secondary uppercase tracking-[0.3em] bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-secondary/20 shadow-2xl">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    {dictionary.partners}
                </div>
            </div>
        </Card>
    )
}

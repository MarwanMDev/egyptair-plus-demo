"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock } from "lucide-react"
import { Dictionary } from "@/types/dictionary"

const deals = [
    { id: 1, city: "Cairo", destination: "London", discount: "20%", type: "Last Minute", status: "ON TIME" },
    { id: 2, city: "Dubai", destination: "Paris", discount: "15%", type: "Member Exclusive", status: "BOARDING" },
    { id: 3, city: "Athens", destination: "Rome", discount: "30%", type: "Early Bird", status: "LOW MILES" },
]

export function TravelPulse({ dictionary }: { dictionary: Dictionary['dashboard']['pulse'] }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % deals.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Card className="overflow-hidden glass-card h-full border-none shadow-2xl relative group flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-50 pointer-events-none" />

            <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                        <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
                    </div>
                    <div>
                        <CardTitle className="text-xs font-black text-muted-foreground tracking-[0.3em] uppercase italic opacity-60">
                            {dictionary.category}
                        </CardTitle>
                        <p className="text-lg font-bold text-primary dark:text-secondary tracking-tight">{dictionary.title}</p>
                    </div>
                </div>
                <Badge variant="glass" className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse font-mono tracking-widest">
                    {dictionary.live}
                </Badge>
            </CardHeader>

            <CardContent className="p-0 relative z-10 flex-1 flex flex-col justify-center">
                <div className="relative h-full flex flex-col justify-center px-8 py-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black font-mono text-secondary tracking-[0.5em]">{deals[activeIndex].city.toUpperCase()}</span>
                                <div className="h-[1px] w-8 bg-gradient-to-r from-secondary to-transparent" />
                                <span className="text-[10px] font-black font-mono text-white/40 tracking-[0.5em]">{deals[activeIndex].destination.toUpperCase()}</span>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <div className="text-5xl font-black text-primary dark:text-primary-foreground tracking-tighter leading-none">
                                        {deals[activeIndex].discount} <span className="text-xl">{dictionary.off}</span>
                                    </div>
                                    <p className="text-xs font-bold text-secondary tracking-widest uppercase mt-2">
                                        {deals[activeIndex].type}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-mono text-green-400 font-bold border border-green-400/30 px-3 py-1 bg-green-400/5 rounded backdrop-blur-sm">
                                        {deals[activeIndex].status}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Scanline Effect */}
                    <div className="absolute inset-x-0 h-[2px] bg-secondary/20 shadow-[0_0_15px_rgba(197,169,111,0.5)] top-0 left-0 animate-[scan_3s_linear_infinite] pointer-events-none opacity-20" />
                </div>

                <div className="flex px-8 gap-1 mb-6">
                    {deals.map((_, i) => (
                        <div key={i} className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-secondary shadow-[0_0_10px_rgba(197,169,111,0.8)]"
                                initial={{ width: "0%" }}
                                animate={{ width: activeIndex === i ? "100%" : i < activeIndex ? "100%" : "0%" }}
                                transition={{ duration: activeIndex === i ? 5 : 0.3, ease: "linear" }}
                            />
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-black/20 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-widest px-8">
                    <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-secondary" />
                        {dictionary.nextForecast} <span className="text-white/80 font-bold">04:59</span>
                    </div>
                    <button className="text-secondary font-bold hover:text-white transition-all hover:tracking-widest">
                        {dictionary.expand}
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}

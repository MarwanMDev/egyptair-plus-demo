"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Dictionary } from "@/types/dictionary"

interface MemberCardProps {
    name: string
    id: string
    tier: string
    dictionary: Dictionary['dashboard']['memberCard']
}

export function MemberCard({ name, id, tier, dictionary }: MemberCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    // Dynamic gradient based on tier
    const isGold = tier.toLowerCase().includes("gold")
    const isPlatinum = tier.toLowerCase().includes("platinum")

    const cardGradient = isPlatinum
        ? "from-slate-300 via-slate-100 to-slate-400"
        : isGold
            ? "from-[#C5A96F] via-[#F3E5AB] to-[#8A7038]"
            : "from-[#00305B] via-[#004A8C] to-[#001D36]"

    return (
        <div
            className="perspective-1000 w-full max-w-md mx-auto h-64 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={`relative w-full h-full rounded-2xl p-8 shadow-2xl overflow-hidden bg-gradient-to-br ${cardGradient} border border-white/30`}
            >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />

                {/* Liquid Shine Effect */}
                <motion.div
                    className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                    style={{
                        x: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "20%"]),
                        y: useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "20%"]),
                    }}
                />

                <div className="relative h-full flex flex-col justify-between z-10 select-none">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold">
                                {dictionary.title}
                            </p>
                            <img src="/images/logo.png" alt="EgyptAir Plus" className="h-8 brightness-0 invert opacity-90" />
                        </div>
                        <Badge variant="glass" className="bg-white/20 text-white border-white/30 px-3 py-1 text-xs">
                            {tier}
                        </Badge>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-widest text-white/50">{dictionary.holder}</p>
                            <p className="text-xl font-bold text-white tracking-tight">{name}</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-white/50">{dictionary.id}</p>
                                <p className="text-lg font-mono text-white/90">{id}</p>
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-sm bg-white/10 border border-white/20 flex flex-col justify-between p-1">
                                    <div className="h-0.5 w-full bg-white/40" />
                                    <div className="h-0.5 w-3/4 bg-white/40" />
                                    <div className="h-0.5 w-full bg-white/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reflection effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"
                    style={{
                        opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0.3, 0.6])
                    }}
                />
            </motion.div>
        </div>
    )
}

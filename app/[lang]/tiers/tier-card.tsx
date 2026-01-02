"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LucideIcon, ChevronRight, X, Plane, Star, Award, Zap } from "lucide-react"

interface TierVisualConfig {
    name: string
    gradient: string
    refraction: string
    shadow: string
    icon: LucideIcon
    saStatus: string | null
    decorations: boolean
}

const tierVisuals: Record<string, TierVisualConfig> = {
    blue: {
        name: "Blue",
        gradient: "bg-gradient-to-br from-[#0077C0] via-[#005C9E] to-[#003C6E]",
        refraction: "backdrop-blur-xl bg-black/10 border-[#005C9E]/30",
        shadow: "shadow-[#005C9E]/40 hover:shadow-[#005C9E]/60",
        icon: Plane,
        saStatus: null,
        decorations: true
    },
    silver: {
        name: "Silver",
        gradient: "bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]",
        refraction: "backdrop-blur-xl bg-black/5 border-slate-300/30",
        shadow: "shadow-slate-500/30 hover:shadow-slate-500/50",
        icon: Star,
        saStatus: "Silver",
        decorations: true
    },
    gold: {
        name: "Gold",
        gradient: "bg-gradient-to-br from-[#D4AF37] via-[#C5A028] to-[#8B7500]",
        refraction: "backdrop-blur-xl bg-black/5 border-[#C5A028]/30",
        shadow: "shadow-[#C5A028]/40 hover:shadow-[#C5A028]/60",
        icon: Award,
        saStatus: "Gold",
        decorations: true
    },
    elite: {
        name: "Elite",
        gradient: "bg-gradient-to-br from-[#A52A2A] via-[#8B0000] to-[#4A0404]",
        refraction: "backdrop-blur-xl bg-black/20 border-[#8B0000]/30",
        shadow: "shadow-[#8B0000]/40 hover:shadow-[#8B0000]/60",
        icon: Award,
        saStatus: "Gold",
        decorations: true
    },
    platinum: {
        name: "Platinum",
        gradient: "bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#000000]",
        refraction: "backdrop-blur-xl bg-black/40 border-white/10",
        shadow: "shadow-black/60 hover:shadow-black/80",
        icon: Zap,
        saStatus: "Gold",
        decorations: true
    }
}

interface TierLevel {
    name: string
    description: string
    benefits: string[]
}

interface TierCardProps {
    tierKey: string
    level: TierLevel
    index: number
}

export function TierCard({ tierKey, level, index }: TierCardProps) {
    const config = tierVisuals[tierKey]
    if (!config) return null

    const Icon = config.icon
    const [showBenefits, setShowBenefits] = useState(false)

    // Staggered layout calculation:
    // Even items pushed down, Odd items regular, or some randomized-feel pattern
    const yOffset = index % 2 === 0 ? 0 : 80

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 + yOffset }}
            animate={{ opacity: 1, y: yOffset }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-[500px] w-full relative perspective-1000"
        >
            <div
                className={`relative h-full w-full rounded-[2rem] p-1 transition-all duration-500 hover:-translate-y-2`}
            >
                <div className={`w-full h-full rounded-[1.9rem] p-6 flex flex-col relative overflow-hidden border ${config.refraction} ${config.gradient} ${config.shadow} transition-all duration-300 group`}>

                    {/* Deity Graphic Pattern */}
                    <div className="absolute right-[-20%] top-[-10%] bottom-[-10%] w-[120%] opacity-20 pointer-events-none mix-blend-overlay">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                            <path d="M90,50 C90,30 70,10 50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 Z M50,80 C33.4,80 20,66.6 20,50 C20,33.4 33.4,20 50,20 C66.6,20 80,33.4 80,50 C80,66.6 66.6,80 50,80 Z" opacity="0.1" />
                            <path d="M85,30 Q95,50 85,70 M75,25 Q85,50 75,75 M65,20 Q75,50 65,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>

                    {/* Circular Dots */}
                    <div className="absolute top-12 left-44 w-12 h-12 opacity-30">
                        <div className="absolute top-0 left-4 w-2 h-2 rounded-full bg-[#FF6B6B]" />
                        <div className="absolute top-4 left-8 w-3 h-3 rounded-full bg-[#FF6B6B]" />
                        <div className="absolute top-10 left-6 w-2 h-2 rounded-full bg-[#FF6B6B]" />
                        <div className="absolute top-8 left-2 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] transition-all group-hover:scale-150" />
                    </div>

                    {/* Star Alliance Branding */}
                    <div className="absolute bottom-6 right-6 flex flex-col items-end z-20">
                        <div className="bg-black/90 p-2 rounded flex flex-col items-center gap-1 border border-white/10 shadow-xl scale-90 origin-bottom-right">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-2 h-2 bg-white/90 rotate-45 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                                ))}
                            </div>
                            <span className="text-[7px] font-black uppercase tracking-tighter text-white">Star Alliance</span>
                            {config.saStatus && (
                                <>
                                    <div className="h-[1px] w-full bg-white/20 my-0.5" />
                                    <span className={`text-[12px] font-black uppercase tracking-widest 
                                        ${config.saStatus === 'Gold' ? 'text-[#C5A96F]' : 'text-slate-300'}
                                    `}>
                                        {config.saStatus}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg text-white`}>
                                <Icon className="h-8 w-8" />
                            </div>
                            <Badge variant="glass" className="font-mono tracking-widest uppercase border-white/20 text-white bg-white/10 hover:bg-white/20">
                                {config.name}
                            </Badge>
                        </div>

                        <h3 className="text-3xl font-black tracking-tighter mb-2 text-white">
                            {level.name.toUpperCase()}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-white/70 mb-8 max-w-[80%]">
                            {level.description}
                        </p>

                        <div className="mt-auto">
                            <Button
                                variant="ghost"
                                className="group/btn bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl w-full justify-between"
                                onClick={() => setShowBenefits(true)}
                            >
                                <span className="uppercase tracking-widest text-xs font-bold">View Benefits</span>
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex justify-between text-[8px] font-black text-white/60 uppercase tracking-widest mb-2">
                                <span>Progress</span>
                                <span>0%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-black/20 overflow-hidden border border-white/5">
                                <div className="h-full bg-white/50 w-0" />
                            </div>
                        </div>
                    </div>

                    {/* Benefits Popup Overlay */}
                    <AnimatePresence>
                        {showBenefits && (
                            <motion.div
                                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                className="absolute inset-0 z-30 bg-black/60 rounded-[1.9rem] flex items-center justify-center p-4"
                            >
                                <motion.div
                                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                                    animate={{ scale: 1, y: 0, opacity: 1 }}
                                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                                    className="bg-black/80 border border-white/10 w-full h-full rounded-2xl p-6 relative overflow-y-auto custom-scrollbar"
                                >
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setShowBenefits(false); }}
                                        className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <h4 className="text-xl font-bold text-white mb-6 tracking-tight">Tier Benefits</h4>

                                    <div className="space-y-3">
                                        {level.benefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/90 p-2 rounded-lg hover:bg-white/5 transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                                                {benefit}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}

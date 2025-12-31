"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Plane, Star, Award, Zap } from "lucide-react"
import { Dictionary } from "@/types/dictionary"

const tiers = [
    {
        name: "Blue",
        color: "bg-[#005C9E]",
        shadow: "shadow-[#005C9E]/40",
        descriptionKey: "blue" as const,
        icon: Plane,
        benefits: ["No Expiration", "Digital Card"],
        refraction: "backdrop-blur-xl bg-black/10 border-[#005C9E]/30",
        accent: "text-white/90"
    },
    {
        name: "Silver",
        color: "bg-slate-400",
        shadow: "shadow-slate-500/30",
        descriptionKey: "silver" as const,
        icon: Star,
        benefits: ["Priority Check-in", "Extra Bag Discount"],
        refraction: "backdrop-blur-xl bg-black/5 border-slate-300/30",
        accent: "text-white/90"
    },
    {
        name: "Gold",
        color: "bg-[#C5A028]",
        shadow: "shadow-[#C5A028]/40",
        descriptionKey: "gold" as const,
        icon: Award,
        benefits: ["Gold Track Priority", "Lounge Access"],
        refraction: "backdrop-blur-xl bg-black/5 border-[#C5A028]/30",
        accent: "text-white/90"
    },
    {
        name: "Elite",
        color: "bg-[#8B0000]", // Burgundy
        shadow: "shadow-[#8B0000]/40",
        descriptionKey: "elite" as const,
        icon: Award,
        benefits: ["Free Reservation Change", "Transfer Tier Miles"],
        refraction: "backdrop-blur-xl bg-black/20 border-[#8B0000]/30",
        accent: "text-white/90",
        isElite: true
    },
    {
        name: "Platinum",
        color: "bg-[#1A1A1A]",
        shadow: "shadow-black/60",
        descriptionKey: "platinum" as const,
        icon: Zap,
        benefits: ["Meet & Assist", "Purchase Tier Miles"],
        refraction: "backdrop-blur-xl bg-black/40 border-white/10",
        accent: "text-white"
    }
]

export function TierCards3D({ dictionary }: { dictionary: Dictionary['tiersSection'] }) {
    const [activeIndex, setActiveIndex] = useState(2) // Gold default

    return (
        <div className="relative min-h-[550px] w-full flex items-center justify-center py-10 md:py-20 overflow-hidden">
            {/* Desktop 3D Layout (Hidden on Mobile) */}
            <div className="hidden md:flex relative w-full max-w-5xl h-[550px] items-center justify-center perspective-1000">
                <AnimatePresence mode="popLayout">
                    {tiers.map((tier, index) => {
                        const isActive = index === activeIndex
                        const offset = index - activeIndex

                        return (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, scale: 0.8, x: offset * 200 }}
                                animate={{
                                    opacity: 1,
                                    scale: isActive ? 1.1 : 0.8,
                                    x: offset * 280,
                                    z: isActive ? 150 : 0,
                                    rotateY: offset * -15,
                                    filter: isActive ? "blur(0px)" : "blur(4px)",
                                    zIndex: isActive ? 50 : 30 - Math.abs(offset)
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onClick={() => setActiveIndex(index)}
                                className={`absolute cursor-pointer w-[300px] h-[450px] rounded-[2rem] p-1 transition-all duration-500 group`}
                            >
                                <div className={`w-full h-full rounded-[1.9rem] p-8 flex flex-col justify-between overflow-hidden relative border ${tier.refraction} ${tier.shadow} group-hover:shadow-2xl transition-all 
                                    ${tier.name === 'Elite' ? 'bg-gradient-to-br from-[#A52A2A] via-[#8B0000] to-[#4A0404]' : ''}
                                    ${tier.name === 'Blue' ? 'bg-gradient-to-br from-[#0077C0] via-[#005C9E] to-[#003C6E]' : ''}
                                    ${tier.name === 'Silver' ? 'bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]' : ''}
                                    ${tier.name === 'Gold' ? 'bg-gradient-to-br from-[#D4AF37] via-[#C5A028] to-[#8B7500]' : ''}
                                    ${tier.name === 'Platinum' ? 'bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#000000]' : ''}
                                `}>
                                    {/* Liquid Background Effect */}
                                    {tier.name !== 'Elite' && tier.name !== 'Blue' && tier.name !== 'Silver' && tier.name !== 'Gold' && tier.name !== 'Platinum' && (
                                        <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full ${tier.color} opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-1000 ease-out`} />
                                    )}

                                    {/* Elite, Blue, Silver, Gold & Platinum Specific Decorations */}
                                    {(tier.name === 'Elite' || tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') && (
                                        <>
                                            {/* Deity Graphic Pattern */}
                                            <div className="absolute right-[-20%] top-[-10%] bottom-[-10%] w-[120%] opacity-20 pointer-events-none mix-blend-overlay">
                                                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                                                    <path d="M90,50 C90,30 70,10 50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 Z M50,80 C33.4,80 20,66.6 20,50 C20,33.4 33.4,20 50,20 C66.6,20 80,33.4 80,50 C80,66.6 66.6,80 50,80 Z" opacity="0.1" />
                                                    {/* Simplified deity-like wing wings/pattern */}
                                                    <path d="M85,30 Q95,50 85,70 M75,25 Q85,50 75,75 M65,20 Q75,50 65,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                                </svg>
                                            </div>
                                            {/* Circular Dots near logo area */}
                                            <div className="absolute top-12 left-44 w-12 h-12 opacity-30">
                                                <div className={`absolute top-0 left-4 w-2 h-2 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                                                <div className={`absolute top-4 left-8 w-3 h-3 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                                                <div className={`absolute top-10 left-6 w-2 h-2 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                                                <div className={`absolute top-8 left-2 w-1.5 h-1.5 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'} transition-all group-hover:scale-150`} />
                                            </div>
                                        </>
                                    )}

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-4 rounded-2xl ${isActive ? tier.color + " shadow-lg" : "bg-muted/50"} text-white transition-all duration-500`}>
                                                <tier.icon className="h-8 w-8" />
                                            </div>
                                            <Badge variant="glass" className="font-mono tracking-widest uppercase border-white/20">
                                                {tier.name}
                                            </Badge>
                                        </div>

                                        <h3 className={`text-3xl font-black tracking-tighter mb-2 ${isActive ? 'text-white' : 'text-primary dark:text-white'}`}>{tier.name}</h3>
                                        <p className={`text-sm font-medium leading-relaxed ${isActive ? 'text-white/70' : 'text-muted-foreground'}`}>
                                            {dictionary[tier.descriptionKey]}
                                        </p>
                                    </div>

                                    <div className="relative z-10 space-y-6">
                                        {tier.name === 'Silver' && isActive && (
                                            <div className="flex gap-12 absolute -top-4 left-0 text-[6px] font-black uppercase tracking-tighter text-slate-400/60 transition-opacity">
                                                <div className="flex flex-col">
                                                    <span>Valid From</span>
                                                    <span className="text-slate-200">01/24</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span>Valid Thru</span>
                                                    <span className="text-slate-200">12/28</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="space-y-3">
                                            {tier.benefits.map((benefit, bIndex) => (
                                                <motion.div
                                                    key={benefit}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: isActive ? 0.9 : 0.3, x: 0 }}
                                                    transition={{ delay: isActive ? bIndex * 0.1 : 0 }}
                                                    className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-white' : ''}`}
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white/50' : tier.color}`} />
                                                    {benefit}
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Status Progress Bar */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-[8px] font-black text-muted-foreground uppercase tracking-widest">
                                                <span>Level Progress</span>
                                                <span className={tier.accent}>{isActive ? "100%" : "30%"}</span>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-black/10 dark:bg-white/5 overflow-hidden border border-white/5">
                                                <motion.div
                                                    className={`h-full ${tier.color}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: isActive ? "100%" : "30%" }}
                                                    transition={{ duration: 1.5, ease: "circOut" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Star Alliance Branding for Elite, Blue, Silver, Gold & Platinum */}
                                    {(tier.name === 'Elite' || tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') && (
                                        <div className="absolute bottom-10 right-8 flex flex-col items-end z-20">
                                            <div className="bg-black/90 p-2 rounded flex flex-col items-center gap-1 border border-white/10 shadow-xl scale-90 origin-bottom-right">
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4, 5].map(i => (
                                                        <div key={i} className="w-2 h-2 bg-white/90 rotate-45 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                                                    ))}
                                                </div>
                                                <span className="text-[7px] font-black uppercase tracking-tighter text-white">Star Alliance</span>
                                                {(tier.name === 'Elite' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') && (
                                                    <>
                                                        <div className="h-[1px] w-full bg-white/20 my-0.5" />
                                                        <span className={`text-[12px] font-black uppercase tracking-widest 
                                                            ${(tier.name === 'Elite' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'text-[#C5A96F]' : ''}
                                                            ${tier.name === 'Silver' ? 'text-slate-300' : ''}
                                                        `}>
                                                            {(tier.name === 'Elite' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'Gold' : 'Silver'}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Mobile Layout: Horizontal Scroll (Visible on Mobile) */}
            <div className="flex md:hidden w-full overflow-x-auto snap-x snap-mandatory px-4 pb-12 gap-6 no-scrollbar">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className="snap-center shrink-0 w-[280px] h-[420px] rounded-[2rem] glass-card p-1 shadow-2xl"
                        style={{ border: `1px solid rgba(255,255,255,0.1)` }}
                    >
                        <div className={`w-full h-full rounded-[1.9rem] p-6 flex flex-col justify-between overflow-hidden relative border ${tier.refraction} 
                            ${tier.name === 'Elite' ? 'bg-gradient-to-br from-[#A52A2A] via-[#8B0000] to-[#4A0404]' : ''}
                            ${tier.name === 'Blue' ? 'bg-gradient-to-br from-[#0077C0] via-[#005C9E] to-[#003C6E]' : ''}
                            ${tier.name === 'Silver' ? 'bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]' : ''}
                            ${tier.name === 'Gold' ? 'bg-gradient-to-br from-[#D4AF37] via-[#C5A028] to-[#8B7500]' : ''}
                            ${tier.name === 'Platinum' ? 'bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#000000]' : ''}
                        `}>
                            {/* Elite, Blue, Silver, Gold & Platinum Specific Decorations (Mobile) */}
                            {(tier.name === 'Elite' || tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') && (
                                <>
                                    <div className="absolute right-[-30%] top-[-10%] bottom-[-10%] w-[130%] opacity-10 pointer-events-none mix-blend-overlay">
                                        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                                            <path d="M85,30 Q95,50 85,70 M75,25 Q85,50 75,75 M65,20 Q75,50 65,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                        </svg>
                                    </div>
                                    <div className="absolute top-10 left-36 w-8 h-8 opacity-20">
                                        <div className={`absolute top-0 left-2 w-1.5 h-1.5 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                                        <div className={`absolute top-3 left-6 w-2 h-2 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                                        <div className={`absolute top-6 left-4 w-1.5 h-1.5 rounded-full ${(tier.name === 'Blue' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'bg-[#FF6B6B]' : 'bg-white'}`} />
                                    </div>
                                    {/* Star Alliance Branding Mobile */}
                                    <div className="absolute bottom-8 right-6 z-20">
                                        <div className="bg-black/90 p-1.5 rounded flex flex-col items-center border border-white/10 scale-90 origin-bottom-right">
                                            {(tier.name === 'Elite' || tier.name === 'Silver' || tier.name === 'Gold' || tier.name === 'Platinum') ? (
                                                <div className="flex flex-col items-center gap-0.5">
                                                    <div className="flex items-center gap-0.5">
                                                        {[1, 2, 3, 4, 5].map(i => (
                                                            <div key={i} className="w-1 h-1 bg-white/90 rotate-45" />
                                                        ))}
                                                    </div>
                                                    <span className="text-[5px] font-black uppercase tracking-tighter text-white">Star Alliance</span>
                                                    <div className="h-[0.5px] w-full bg-white/20 my-0.25" />
                                                    <span className={`text-[9px] font-black uppercase tracking-widest 
                                                        ${(tier.name === 'Elite' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'text-[#C5A96F]' : ''}
                                                        ${tier.name === 'Silver' ? 'text-slate-300' : ''}
                                                    `}>
                                                        {(tier.name === 'Elite' || tier.name === 'Gold' || tier.name === 'Platinum') ? 'Gold' : 'Silver'}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-0.5">
                                                    <div className="flex items-center gap-0.5">
                                                        {[1, 2, 3, 4, 5].map(i => (
                                                            <div key={i} className="w-1 h-1 bg-white/90 rotate-45" />
                                                        ))}
                                                    </div>
                                                    <span className="text-[5px] font-black uppercase tracking-tighter text-white">Star Alliance</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${tier.color} text-white shadow-lg`}>
                                        <tier.icon className="h-6 w-6" />
                                    </div>
                                    <Badge variant="glass" className="font-mono tracking-widest uppercase border-white/20 text-[10px]">
                                        {tier.name}
                                    </Badge>
                                </div>
                                <h3 className="text-2xl font-black tracking-tighter mb-2 text-white">{tier.name}</h3>
                                <p className="text-xs text-white/70 font-medium leading-relaxed">
                                    {dictionary[tier.descriptionKey]}
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="space-y-2">
                                    {tier.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-white/80">
                                            <div className="w-1 h-1 rounded-full bg-white/50" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2 pt-2 border-t border-white/5">
                                    <div className="h-1.5 w-full rounded-full bg-black/10 dark:bg-white/5 overflow-hidden">
                                        <div className={`h-full ${tier.color}`} style={{ width: '60%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Perspective UI Labels (Only on Desktop) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 text-[10px] font-mono text-muted-foreground opacity-30 select-none">
                <span>FRONT_AXIS_ACTIVE</span>
                <div className="w-1 h-1 rounded-full bg-secondary" />
                <span>3D_PERSPECTIVE_ENABLED</span>
            </div>
        </div>
    )
}

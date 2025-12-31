"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Plane } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dictionary } from "@/types/dictionary"

const hubs = [
    { id: "cairo", name: "Cairo", x: 550, y: 150, description: "Our Central Global Hub", connections: ["london", "dubai", "paris", "tokyo", "newyork"] },
    { id: "london", name: "London", x: 450, y: 80, connections: ["cairo"] },
    { id: "dubai", name: "Dubai", x: 620, y: 160, connections: ["cairo"] },
    { id: "paris", name: "Paris", x: 470, y: 100, connections: ["cairo"] },
    { id: "tokyo", name: "Tokyo", x: 850, y: 120, connections: ["cairo"] },
    { id: "newyork", name: "New York", x: 200, y: 110, connections: ["cairo"] },
]

export function SkyMap({ dictionary }: { dictionary: Dictionary['dashboard']['skyMap'] }) {
    const [hoveredHub, setHoveredHub] = useState<string | null>("cairo")

    return (
        <section className="relative py-32 overflow-hidden bg-black/5">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    <div className="max-w-xl space-y-4">
                        <Badge variant="glass" className="bg-secondary/20 text-secondary border-secondary/30 uppercase tracking-[0.3em] font-black">
                            {dictionary.badge}
                        </Badge>
                        <h2 className="text-5xl md:text-6xl font-black text-primary dark:text-secondary tracking-tighter">
                            {dictionary.title.split(' ')[0]} <br /> <span className="opacity-50 italic">{dictionary.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-medium">
                            {dictionary.description}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="p-6 rounded-3xl glass-card border-none space-y-2">
                            <Globe className="h-8 w-8 text-secondary animate-pulse" />
                            <p className="text-2xl font-black tracking-tighter">100+</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{dictionary.destinations}</p>
                        </div>
                        <div className="p-6 rounded-3xl glass-card border-none space-y-2">
                            <Plane className="h-8 w-8 text-secondary" />
                            <p className="text-2xl font-black tracking-tighter">26</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{dictionary.partners}</p>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-[21/9] w-full glass-card border-none rounded-[3rem] overflow-hidden group">
                    {/* Atmospheric Background */}
                    <div className="absolute inset-0 bg-[#001529] opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/20 opacity-40 blur-3xl animate-pulse" />

                    {/* SVG Map Container */}
                    <svg viewBox="0 0 1000 400" className="w-full h-full relative z-10 opacity-80 select-none">
                        {/* Simplified Continents Placeholder */}
                        <path
                            d="M150,100 Q200,50 300,80 T450,120 T600,100 T750,150 T900,100 L950,200 Q900,300 700,280 T500,320 T300,280 T100,200 Z"
                            fill="rgba(255,255,255,0.03)"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />

                        {/* Dynamic Connections (Liquid Ribbons) */}
                        <AnimatePresence>
                            {hubs.map(hub => {
                                const isCairo = hub.id === "cairo"
                                if (!isCairo) return null

                                return hub.connections.map(connId => {
                                    const target = hubs.find(h => h.id === connId)
                                    if (!target) return null

                                    const isTargetHovered = hoveredHub === target.id
                                    const isCairoHovered = hoveredHub === "cairo"
                                    const isActive = isTargetHovered || isCairoHovered

                                    return (
                                        <motion.path
                                            key={`${hub.id}-${target.id}`}
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{
                                                pathLength: 1,
                                                opacity: isActive ? 0.6 : 0.1,
                                                strokeWidth: isActive ? 2 : 1
                                            }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                            d={`M${hub.x},${hub.y} Q${(hub.x + target.x) / 2},${Math.min(hub.y, target.y) - 50} ${target.x},${target.y}`}
                                            fill="none"
                                            stroke={isActive ? "#C5A96F" : "white"}
                                            className="pointer-events-none"
                                        />
                                    )
                                })
                            })}
                        </AnimatePresence>

                        {/* Interactive Hub Points */}
                        {hubs.map(hub => (
                            <motion.g
                                key={hub.id}
                                onMouseEnter={() => setHoveredHub(hub.id)}
                                onMouseLeave={() => setHoveredHub("cairo")}
                                className="cursor-pointer"
                            >
                                <motion.circle
                                    cx={hub.x}
                                    cy={hub.y}
                                    r={hub.id === "cairo" ? 6 : 4}
                                    fill={hoveredHub === hub.id ? "#C5A96F" : "white"}
                                    animate={{
                                        scale: hoveredHub === hub.id ? 1.5 : 1,
                                        opacity: hoveredHub === hub.id ? 1 : 0.6
                                    }}
                                />
                                {hub.id === "cairo" && (
                                    <motion.circle
                                        cx={hub.x}
                                        cy={hub.y}
                                        r={12}
                                        fill="none"
                                        stroke="#C5A96F"
                                        strokeWidth="1"
                                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                )}
                                <AnimatePresence>
                                    {hoveredHub === hub.id && (
                                        <motion.text
                                            x={hub.x}
                                            y={hub.y - 15}
                                            textAnchor="middle"
                                            initial={{ opacity: 0, y: hub.y - 10 }}
                                            animate={{ opacity: 1, y: hub.y - 15 }}
                                            fill="white"
                                            className="text-[10px] font-black uppercase tracking-widest pointer-events-none"
                                        >
                                            {hub.name}
                                        </motion.text>
                                    )}
                                </AnimatePresence>
                            </motion.g>
                        ))}
                    </svg>

                    {/* Scanline Effect Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />

                    {/* Custom Corner UI Labels */}
                    <div className="absolute top-8 left-8 space-y-1">
                        <p className="text-[10px] font-mono text-secondary tracking-[0.5em] uppercase italic font-bold">Vector_Grid_Active</p>
                        <p className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Global Hub Synchronization: 100%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

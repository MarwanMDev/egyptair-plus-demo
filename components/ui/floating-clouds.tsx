"use client"

import { motion } from "framer-motion"
import React from "react"

export function FloatingClouds() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
            {/* Layer 1: Slow, large drifting clouds */}
            <Cloud
                id="cloud-1"
                className="w-[800px] h-[400px] top-[10%] -left-[20%] opacity-20 blur-[100px]"
                animate={{
                    x: ["0%", "120%"],
                    y: [0, 50, 0],
                }}
                duration={120}
            />

            {/* Layer 2: Faster, medium clouds */}
            <Cloud
                id="cloud-2"
                className="w-[600px] h-[300px] top-[40%] -left-[10%] opacity-15 blur-[80px]"
                animate={{
                    x: ["-20%", "140%"],
                    y: [0, -30, 0],
                }}
                duration={90}
                delay={-20}
            />

            {/* Layer 3: Foreground wispy clouds */}
            <Cloud
                id="cloud-3"
                className="w-[1000px] h-[500px] -bottom-[10%] -left-[30%] opacity-25 blur-[120px]"
                animate={{
                    x: ["0%", "150%"],
                    y: [0, 100, 0],
                }}
                duration={150}
                delay={-60}
            />

            {/* Subtle atmosphere glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 dark:from-secondary/5 dark:to-black/20" />
        </div>
    )
}

function Cloud({
    className,
    animate,
    duration,
    delay = 0
}: {
    className: string,
    animate: any,
    duration: number,
    delay?: number,
    id: string
}) {
    return (
        <motion.div
            className={`absolute ${className}`}
            animate={animate}
            transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay
            }}
        >
            {/* Core Volumetric Cloud */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full relative"
            >
                <div className="absolute inset-0 bg-white/40 dark:bg-sky-300/20 rounded-full blur-[60px]" />
                <div className="absolute inset-[10%] bg-white/30 dark:bg-sky-200/10 rounded-full blur-[40px]" />
                <div className="absolute inset-[25%] bg-white/20 dark:bg-sky-100/5 rounded-full blur-[20px]" />
            </motion.div>
        </motion.div>
    )
}

"use client"

import { motion } from "framer-motion"

type TransitionVariant = "downward" | "swirl" | "upward"

interface LiquidTransitionProps {
    variant?: TransitionVariant
    className?: string
    color?: string
}

const paths: Record<TransitionVariant, string[]> = {
    downward: [
        "M0,160 C120,120 240,240 360,200 C480,160 600,80 720,100 C840,120 960,200 1080,180 C1200,160 1320,120 1440,140 L1440,320 L0,320 Z",
        "M0,180 C150,220 300,140 450,160 C600,180 750,240 900,220 C1050,200 1200,140 1350,160 L1440,170 L1440,320 L0,320 Z",
        "M0,150 C180,180 360,120 540,140 C720,160 900,220 1080,200 C1260,180 1440,150 1440,150 L1440,320 L0,320 Z",
        "M0,160 C120,120 240,240 360,200 C480,160 600,80 720,100 C840,120 960,200 1080,180 C1200,160 1320,120 1440,140 L1440,320 L0,320 Z"
    ],
    swirl: [
        "M0,192 C240,240 480,120 720,160 C960,200 1200,280 1440,240 L1440,320 L0,320 Z",
        "M0,224 C200,180 400,260 600,240 C800,220 1000,160 1200,180 C1400,200 1440,224 1440,224 L1440,320 L0,320 Z",
        "M0,200 C300,160 600,240 900,200 C1200,160 1440,200 1440,200 L1440,320 L0,320 Z",
        "M0,192 C240,240 480,120 720,160 C960,200 1200,280 1440,240 L1440,320 L0,320 Z"
    ],
    upward: [
        "M0,128 C240,160 480,80 720,100 C960,120 1200,200 1440,160 L1440,320 L0,320 Z",
        "M0,100 C200,140 400,100 600,80 C800,60 1000,120 1200,140 C1400,160 1440,180 1440,180 L1440,320 L0,320 Z",
        "M0,140 C150,110 300,160 450,140 C600,120 750,100 900,120 C1050,140 1200,160 1350,140 L1440,130 L1440,320 L0,320 Z",
        "M0,128 C240,160 480,80 720,100 C960,120 1200,200 1440,160 L1440,320 L0,320 Z"
    ]
}

export function LiquidTransition({
    variant = "downward",
    className = "-mt-16",
    color = "text-primary/5 dark:text-secondary/5"
}: LiquidTransitionProps) {
    return (
        <div className={`relative w-full h-32 z-20 overflow-hidden pointer-events-none ${className}`}>
            <svg
                viewBox="0 0 1440 320"
                className="absolute bottom-0 w-full h-full preserve-3d"
                preserveAspectRatio="none"
            >
                <motion.path
                    initial={{ d: paths[variant][0] }}
                    animate={{
                        d: paths[variant]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    fill="currentColor"
                    className={color}
                />

                {/* Secondary Accent Wave - slightly offset */}
                <motion.path
                    initial={{ d: paths[variant][0] }}
                    animate={{
                        d: paths[variant]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -5
                    }}
                    fill="currentColor"
                    className={`${color} opacity-40`}
                />
            </svg>
        </div>
    )
}

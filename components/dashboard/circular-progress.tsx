"use client"

import { motion } from "framer-motion"

interface CircularProgressProps {
    value: number
    max: number
    label?: string
    sublabel?: string
    size?: number
    strokeWidth?: number
    color?: string
}

export function CircularProgress({
    value,
    max,
    label,
    sublabel,
    size = 120,
    strokeWidth = 10,
    color = "currentColor"
}: CircularProgressProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const progress = Math.min(Math.max(value / max, 0), 1)
    const dashOffset = circumference - progress * circumference

    return (
        <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="rotate-[-90deg]"
            >
                {/* Background Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-muted/30"
                />

                {/* Progress Circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: dashOffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </svg>

            {(label || sublabel) && (
                <div className="absolute flex flex-col items-center justify-center text-center">
                    {label && <span className="text-2xl font-bold">{label}</span>}
                    {sublabel && <span className="text-xs text-muted-foreground">{sublabel}</span>}
                </div>
            )}
        </div>
    )
}

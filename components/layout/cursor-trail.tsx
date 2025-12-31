"use client"

import React, { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Particle {
    id: number
    x: number
    y: number
}

export function CursorTrail() {
    const [particles, setParticles] = useState<Particle[]>([])
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const springX = useSpring(cursorX, springConfig)
    const springY = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)

            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            }

            setParticles((prev) => [...prev.slice(-20), newParticle])
        }

        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [cursorX, cursorY])

    useEffect(() => {
        const timer = setInterval(() => {
            setParticles((prev) => prev.filter((p) => Date.now() - p.id < 1000))
        }, 50)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {particles.map((particle, index) => (
                <motion.div
                    key={particle.id}
                    initial={{ opacity: 0.4, scale: 0.5 }}
                    animate={{
                        opacity: 0,
                        scale: 2,
                        x: particle.x,
                        y: particle.y,
                        filter: "blur(4px)"
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute w-2 h-2 rounded-full bg-secondary/30"
                    style={{
                        left: -4,
                        top: -4,
                    }}
                />
            ))}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                }}
                className="absolute w-4 h-4 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-sm -ml-2 -mt-2 flex items-center justify-center"
            >
                <div className="w-1 h-1 bg-secondary rounded-full shadow-[0_0_10px_rgba(197,169,111,0.8)]" />
            </motion.div>
        </div>
    )
}

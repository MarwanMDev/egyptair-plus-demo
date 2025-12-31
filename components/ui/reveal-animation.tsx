"use client"

import { motion } from "framer-motion"
import React from "react"

interface RevealAnimationProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function RevealAnimation({ children, className, delay = 0 }: RevealAnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

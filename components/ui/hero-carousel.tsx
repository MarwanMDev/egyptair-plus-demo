"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dictionary } from "@/types/dictionary"
import { Locale } from "@/i18n-config"

export function HeroCarousel({ dictionary, lang }: { dictionary: Dictionary['hero'], lang: Locale }) {
    const slides = React.useMemo(() => [
        {
            id: 1,
            image: "/images/hero.png",
            title: dictionary.title,
            subtitle: dictionary.subtitle,
            cta: dictionary.joinNow,
            link: `/${lang}/signup`,
        },
        {
            id: 2,
            image: "/images/carousel-2.jpg",
            title: "Explore the World",
            subtitle: "Redeem your miles for flights to over 1,300 destinations worldwide.",
            cta: "Book Now",
            link: `/${lang}/redeem`,
        },
        {
            id: 3,
            image: "/images/carousel-3.jpg",
            title: "Premium Comfort",
            subtitle: "Enjoy lounge access and priority services with Gold & Platinum status.",
            cta: "View Tiers",
            link: `/${lang}/tiers`,
        },
    ], [dictionary, lang])

    const [current, setCurrent] = React.useState(0)

    // Auto-advance
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        setMousePos({
            x: (clientX / innerWidth - 0.5) * 20,
            y: (clientY / innerHeight - 0.5) * 20
        })
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full overflow-hidden bg-primary"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Parallax */}
                    <motion.div
                        className="absolute inset-0 z-0"
                        animate={{
                            x: mousePos.x,
                            y: mousePos.y,
                            scale: 1.1
                        }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    >
                        <img
                            src={slides[current].image}
                            alt={slides[current].title}
                            className="h-full w-full object-cover opacity-60 sm:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent md:from-primary/90 md:to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 md:px-8 mx-auto">
                        <div className="max-w-3xl space-y-4 sm:space-y-6 text-center md:text-left">
                            <motion.h1
                                initial={{ clipPath: "inset(0 100% -20% 0)", opacity: 0 }}
                                animate={{ clipPath: "inset(0 0% -20% 0)", opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-3xl font-black tracking-tight sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] pb-4"
                            >
                                {slides[current].title} <br className="hidden sm:inline" />
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-secondary inline-block mt-2 pb-2"
                                >
                                    EgyptAir Plus
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="text-lg text-primary-foreground/90 sm:text-xl md:text-2xl max-w-[600px] mx-auto md:mx-0 font-medium"
                            >
                                {slides[current].subtitle}
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start"
                            >
                                <Link href={slides[current].link} className="w-full sm:w-auto">
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-primary-foreground font-black text-lg px-10 h-14 rounded-2xl shadow-xl shadow-secondary/20 transition-all hover:scale-105 active:scale-95">
                                            {slides[current].cta}
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link href={`/${lang}/earn`} className="w-full sm:w-auto">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto glass-surface text-white border-white/20 hover:bg-white/10 hover:text-white transition-all hover:scale-105 active:scale-95 h-14 rounded-2xl px-10 font-bold backdrop-blur-md">
                                        Learn More
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-2 rounded-full transition-all ${index === current ? "bg-secondary w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-10 w-10" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
                aria-label="Next slide"
            >
                <ChevronRight className="h-10 w-10" />
            </button>
        </div>
    )
}

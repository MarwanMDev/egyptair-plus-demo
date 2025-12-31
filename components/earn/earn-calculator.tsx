"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Plane, MapPin, Sparkles } from "lucide-react"
import { Dictionary } from "@/types/dictionary"

const routes = [
    { from: "Cairo (CAI)", to: "London (LHR)", baseMiles: 2182 },
    { from: "Cairo (CAI)", to: "Dubai (DXB)", baseMiles: 1500 },
    { from: "Cairo (CAI)", to: "New York (JFK)", baseMiles: 5612 },
    { from: "Cairo (CAI)", to: "Paris (CDG)", baseMiles: 1993 },
    { from: "Cairo (CAI)", to: "Tokyo (NRT)", baseMiles: 5945 },
]

const classes = [
    { label: "Business (C, D, J, Z)", multiplier: 2.0 },
    { label: "Economy Flex (Y, B, M)", multiplier: 1.0 },
    { label: "Economy Saver (H, Q, K)", multiplier: 0.75 },
    { label: "Economy Promo (U, L, V)", multiplier: 0.25 },
]

export function EarnCalculator({ dictionary }: { dictionary: Dictionary['earn']['calculator'] }) {
    const [selectedRoute, setSelectedRoute] = React.useState(routes[0])
    const [selectedClass, setSelectedClass] = React.useState(classes[1])
    const [estimatedMiles, setEstimatedMiles] = React.useState(0)
    const [isCalculating, setIsCalculating] = React.useState(false)

    const calculate = () => {
        setIsCalculating(true)
        const total = Math.round(selectedRoute.baseMiles * selectedClass.multiplier)

        // Simulate a slight delay for "calculation" feel
        setTimeout(() => {
            setEstimatedMiles(total)
            setIsCalculating(false)
        }, 600)
    }

    React.useEffect(() => {
        calculate()
    }, [selectedRoute, selectedClass])

    return (
        <Card className="glass-card border-none overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-50" />

            <CardHeader className="relative z-10 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-secondary/10 border border-secondary/20">
                        <Calculator className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-black tracking-tight text-primary dark:text-secondary uppercase">
                            {dictionary.title}
                        </CardTitle>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-black opacity-60 italic">
                            {dictionary.subtitle}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="relative z-10 pt-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">
                            {dictionary.from} / {dictionary.to}
                        </label>
                        <Select
                            defaultValue={selectedRoute.to}
                            onValueChange={(val) => {
                                const route = routes.find(r => r.to === val)
                                if (route) setSelectedRoute(route)
                            }}
                        >
                            <SelectTrigger className="glass-card border-white/10 h-14 bg-white/5 font-bold">
                                <SelectValue placeholder="Select Route" />
                            </SelectTrigger>
                            <SelectContent className="glass-card border-white/10 bg-black/80 backdrop-blur-2xl">
                                {routes.map(route => (
                                    <SelectItem key={route.to} value={route.to} className="font-bold cursor-pointer hover:bg-secondary/20">
                                        {route.from} → {route.to}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">
                            {dictionary.class}
                        </label>
                        <Select
                            defaultValue={selectedClass.label}
                            onValueChange={(val) => {
                                const cls = classes.find(c => c.label === val)
                                if (cls) setSelectedClass(cls)
                            }}
                        >
                            <SelectTrigger className="glass-card border-white/10 h-14 bg-white/5 font-bold">
                                <SelectValue placeholder="Select Class" />
                            </SelectTrigger>
                            <SelectContent className="glass-card border-white/10 bg-black/80 backdrop-blur-2xl">
                                {classes.map(cls => (
                                    <SelectItem key={cls.label} value={cls.label} className="font-bold cursor-pointer hover:bg-secondary/20">
                                        {cls.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="relative p-8 rounded-3xl bg-primary/5 border border-white/5 overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,169,111,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex flex-col items-center justify-center text-center space-y-2 relative z-10">
                        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-black">
                            {dictionary.result}
                        </p>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={estimatedMiles}
                                initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="flex items-baseline gap-2"
                            >
                                <span className="text-7xl font-black tracking-tighter text-primary dark:text-primary-foreground">
                                    {isCalculating ? "---" : estimatedMiles.toLocaleString()}
                                </span>
                                <span className="text-xl font-bold text-secondary uppercase tracking-widest">
                                    Miles
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3 text-secondary" />
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                    {selectedRoute.baseMiles} Base
                                </span>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            <div className="flex items-center gap-2">
                                <Sparkles className="h-3 w-3 text-secondary" />
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                    x{selectedClass.multiplier} Multiplier
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-[10px] text-center text-muted-foreground/60 italic font-medium px-8 leading-relaxed">
                    * {dictionary.disclaimer}
                </p>
            </CardContent>
        </Card>
    )
}

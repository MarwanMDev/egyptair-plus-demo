"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Compass, MapPin } from "lucide-react"
import { Dictionary } from "@/types/dictionary"

const destinations = [
    { city: "Athens", country: "Greece", miles: 10000, color: "from-blue-400 to-cyan-300" },
    { city: "Dubai", country: "UAE", miles: 25000, color: "from-orange-400 to-red-300" },
    { city: "London", country: "UK", miles: 35000, color: "from-indigo-400 to-purple-300" },
    { city: "Paris", country: "France", miles: 40000, color: "from-pink-400 to-rose-300" },
    { city: "New York", country: "USA", miles: 65000, color: "from-blue-600 to-indigo-500" },
    { city: "Tokyo", country: "Japan", miles: 85000, color: "from-red-600 to-orange-500" },
]

export function MilesVisualizer({ currentBalance, dictionary }: { currentBalance: number, dictionary: Dictionary['dashboard']['visualizer'] }) {
    const [spendMiles, setSpendMiles] = React.useState(currentBalance)

    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-primary dark:text-secondary tracking-tight">
                        {dictionary.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{dictionary.subtitle}</p>
                </div>
                <Compass className="h-6 w-6 text-secondary animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-8">
                {/* Interactive Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{dictionary.spend}</p>
                            <div className="text-4xl font-black text-primary dark:text-primary-foreground tracking-tighter">
                                {spendMiles.toLocaleString()} <span className="text-lg font-bold text-secondary">{dictionary.miles}</span>
                            </div>
                        </div>
                        <Badge variant="glass" className="bg-secondary/20 text-secondary border-secondary/30">
                            {dictionary.explore}
                        </Badge>
                    </div>
                    <div className="relative pt-6">
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            step="1000"
                            value={spendMiles}
                            onChange={(e) => setSpendMiles(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
                        />
                        <div className="flex justify-between mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                            <span>0</span>
                            <span>25k</span>
                            <span>50k</span>
                            <span>75k</span>
                            <span>100k+</span>
                        </div>
                    </div>
                </div>

                {/* Destination Web */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {destinations.map((dest) => {
                        const canAfford = spendMiles >= dest.miles
                        return (
                            <motion.div
                                key={dest.city}
                                layout
                                className={`relative group p-4 rounded-xl border transition-all duration-500 overflow-hidden ${canAfford
                                    ? "border-secondary/20 bg-secondary/5 shadow-lg"
                                    : "border-muted/20 bg-muted/5 opacity-40 grayscale"
                                    }`}
                            >
                                {/* Glow Effect for Affordable Destinations */}
                                {canAfford && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.15 }}
                                        className={`absolute inset-0 bg-gradient-to-br ${dest.color} blur-2xl`}
                                    />
                                )}

                                <div className="relative z-10 flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                        <MapPin className={`h-4 w-4 ${canAfford ? "text-secondary" : "text-muted-foreground"}`} />
                                        {canAfford && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="bg-secondary rounded-full p-1"
                                            >
                                                <Plane className="h-2 w-2 text-primary" />
                                            </motion.div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{dest.country}</p>
                                        <p className="text-sm font-black text-primary dark:text-primary-foreground leading-tight">{dest.city}</p>
                                    </div>
                                    <p className={`text-[10px] font-bold ${canAfford ? "text-secondary" : "text-muted-foreground"}`}>
                                        {dest.miles.toLocaleString()} {dictionary.miles}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="pt-4 border-t border-muted/20">
                    <Button variant="glass" className="w-full font-bold h-12">
                        {dictionary.cta} <Plane className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

"use client"

import * as React from "react"

export function CabinMood() {
    React.useEffect(() => {
        const updateMood = () => {
            const hour = new Date().getHours()
            const root = document.documentElement

            // Dawn: 5am - 9am
            // Noon: 9am - 5pm
            // Dusk: 5pm - 8pm
            // Night: 8pm - 5am

            let mood = "noon"
            if (hour >= 5 && hour < 9) mood = "dawn"
            else if (hour >= 17 && hour < 20) mood = "dusk"
            else if (hour >= 20 || hour < 5) mood = "night"

            root.setAttribute("data-mood", mood)

            // Inject dynamic variables if needed, or rely on CSS [data-mood] selectors
        }

        updateMood()
        const interval = setInterval(updateMood, 1000 * 60 * 15) // Check every 15 mins
        return () => clearInterval(interval)
    }, [])

    return null
}

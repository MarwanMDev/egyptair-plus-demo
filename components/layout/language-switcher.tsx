"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@/i18n-config"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const pathname = usePathname()
    const router = useRouter()

    const redirectedPathName = (locale: string) => {
        if (!pathname) return "/"
        const segments = pathname.split("/")
        segments[1] = locale
        return segments.join("/")
    }

    const handleCreateNewPathInfo = (newLocale: string) => {
        const newPath = redirectedPathName(newLocale)
        router.push(newPath)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 px-0">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {i18n.locales.map((locale) => {
                    return (
                        <DropdownMenuItem
                            key={locale}
                            className="cursor-pointer"
                            onClick={() => handleCreateNewPathInfo(locale)}
                        >
                            <span className={locale === currentLang ? "font-bold" : ""}>
                                {locale === "en" && "English"}
                                {locale === "ar" && "العربية"}
                                {locale === "fr" && "Français"}
                            </span>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

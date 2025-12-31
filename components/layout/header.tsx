"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Plane, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"



import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { ModeToggle } from "@/components/layout/theme-toggle"

export function Header({ dictionary, lang }: { dictionary: any, lang: string }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: dictionary.home, href: `/${lang}` },
        { name: dictionary.earn, href: `/${lang}/earn` },
        { name: dictionary.redeem, href: `/${lang}/redeem` },
        { name: dictionary.tiers, href: `/${lang}/tiers` },
    ]

    return (
        <header className="sticky top-0 z-50 w-full glass-surface">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href={`/${lang}`} className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="EgyptAir Plus" className="h-10 w-auto dark:brightness-0 dark:invert" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <LanguageSwitcher currentLang={lang} />
                    <Link href={`/${lang}/login`}>
                        <Button variant="ghost" size="sm" className="gap-2">
                            <User className="h-4 w-4" />
                            {dictionary.signIn}
                        </Button>
                    </Link>
                    <Link href={`/${lang}/signup`}>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-semibold">
                            {dictionary.joinNow}
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2">
                    <ModeToggle />
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-surface border-t border-white/10 overflow-hidden"
                    >
                        <div className="space-y-1 px-4 pb-6 pt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "block rounded-xl px-4 py-3 text-base font-bold transition-all",
                                        pathname === item.href
                                            ? "bg-secondary text-primary-foreground shadow-lg"
                                            : "text-muted-foreground hover:bg-white/10"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                        {lang === 'ar' ? 'اللغة' : 'Language'}
                                    </span>
                                    <LanguageSwitcher currentLang={lang} />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <Link href={`/${lang}/login`} onClick={() => setMobileMenuOpen(false)} className="w-full">
                                        <Button variant="outline" className="w-full justify-center gap-2 h-12 rounded-xl border-white/20">
                                            <User className="h-4 w-4" />
                                            {dictionary.signIn}
                                        </Button>
                                    </Link>
                                    <Link href={`/${lang}/signup`} onClick={() => setMobileMenuOpen(false)} className="w-full">
                                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold h-12 rounded-xl">
                                            {dictionary.joinNow}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

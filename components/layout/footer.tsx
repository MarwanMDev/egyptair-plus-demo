import Link from "next/link"
import { Plane } from "lucide-react"

export function Footer({ lang, dictionary }: { lang: string, dictionary: any }) {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/logo.png" alt="EgyptAir Plus" className="h-12 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-sm text-primary-foreground/80">
                            {dictionary.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                            {dictionary.program}
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><Link href={`/${lang}/tiers`} className="hover:text-white">{dictionary.tierLevels}</Link></li>
                            <li><Link href={`/${lang}/earn`} className="hover:text-white">{dictionary.earnMiles}</Link></li>
                            <li><Link href={`/${lang}/redeem`} className="hover:text-white">{dictionary.redeemMiles}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                            {dictionary.support}
                        </h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><Link href="#" className="hover:text-white">{dictionary.contactUs}</Link></li>
                            <li><Link href="#" className="hover:text-white">{dictionary.faq}</Link></li>
                            <li><Link href="#" className="hover:text-white">{dictionary.termsConditions}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                            {dictionary.followUs}
                        </h3>
                        <div className="flex space-x-4">
                            {/* Social icons would go here */}
                            <a href="#" className="text-primary-foreground/80 hover:text-white">Facebook</a>
                            <a href="#" className="text-primary-foreground/80 hover:text-white">Twitter</a>
                            <a href="#" className="text-primary-foreground/80 hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
                    © {new Date().getFullYear()} {dictionary.rightsReserved}
                </div>
            </div>
        </footer>
    )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignUpForm({ lang, dictionary }: { lang: string, dictionary: any }) {
    const { signUp } = dictionary
    const [isLoading, setIsLoading] = React.useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            alert("This is a demo. Registration logic would be implemented here.")
        }, 2000)
    }

    return (
        <div className="flex min-h-screen bg-muted/20 pb-20 pt-10">
            <div className="container mx-auto max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border-t-4 border-t-primary shadow-xl">
                        <CardHeader className="text-center space-y-2 border-b bg-card/50 pb-8">
                            <CardTitle className="text-3xl font-bold text-primary">{signUp.title}</CardTitle>
                            <CardDescription className="text-lg">
                                {signUp.description}
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={onSubmit}>
                            <CardContent className="space-y-8 p-6 md:p-8">
                                {/* Section 1: Identity Information */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white text-xs">1</span>
                                        {signUp.step1}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="space-y-2 col-span-1">
                                            <Label htmlFor="title">{signUp.titleLabel} <span className="text-destructive">*</span></Label>
                                            <Select required>
                                                <SelectTrigger id="title">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="mr">Mr.</SelectItem>
                                                    <SelectItem value="mrs">Mrs.</SelectItem>
                                                    <SelectItem value="ms">Ms.</SelectItem>
                                                    <SelectItem value="dr">Dr.</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2 col-span-3">
                                            {/* Spacer for alignment if needed, or merge title with first name line */}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">{signUp.firstName} <span className="text-destructive">*</span></Label>
                                            <Input id="firstName" required placeholder="As per passport" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="middleName">{signUp.middleName} <span className="text-destructive">*</span></Label>
                                            <Input id="middleName" required placeholder="As per passport" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">{signUp.lastName} <span className="text-destructive">*</span></Label>
                                            <Input id="lastName" required placeholder="As per passport" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="gender">{signUp.gender} <span className="text-destructive">*</span></Label>
                                            <Select required>
                                                <SelectTrigger id="gender">
                                                    <SelectValue placeholder="Select Gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="dob">{signUp.dob} <span className="text-destructive">*</span></Label>
                                            <Input id="dob" type="date" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="nationality">{signUp.nationality} <span className="text-destructive">*</span></Label>
                                        <Select required>
                                            <SelectTrigger id="nationality">
                                                <SelectValue placeholder="Select Nationality" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eg">Egyptian</SelectItem>
                                                <SelectItem value="us">American</SelectItem>
                                                <SelectItem value="uk">British</SelectItem>
                                                <SelectItem value="fr">French</SelectItem>
                                                <SelectItem value="de">German</SelectItem>
                                                {/* Add more as needed */}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="border-t my-6" />

                                {/* Section 2: Contact Information */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white text-xs">2</span>
                                        {signUp.step2}
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">{signUp.email} <span className="text-destructive">*</span></Label>
                                            <Input id="email" type="email" required placeholder="user@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">{signUp.mobile} <span className="text-destructive">*</span></Label>
                                            <div className="flex gap-2">
                                                <Select defaultValue="eg">
                                                    <SelectTrigger className="w-[100px]">
                                                        <SelectValue placeholder="+20" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="eg">+20</SelectItem>
                                                        <SelectItem value="us">+1</SelectItem>
                                                        <SelectItem value="uk">+44</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <Input id="phone" type="tel" required placeholder="10xxxxxxxxx" className="flex-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address">{signUp.address} <span className="text-destructive">*</span></Label>
                                        <Input id="address" required placeholder="e.g. 12 El Tahrir St." />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="country">{signUp.country} <span className="text-destructive">*</span></Label>
                                            <Select required>
                                                <SelectTrigger id="country">
                                                    <SelectValue placeholder="Select Country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="eg">Egypt</SelectItem>
                                                    <SelectItem value="us">United States</SelectItem>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="city">{signUp.city} <span className="text-destructive">*</span></Label>
                                            <Input id="city" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="postalCode">{signUp.postalCode}</Label>
                                            <Input id="postalCode" />
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t my-6" />

                                {/* Section 3: Legal & Consents */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white text-xs">3</span>
                                        {signUp.step3}
                                    </h3>

                                    <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                                        <div className="flex items-start space-x-2">
                                            <Checkbox id="marketing" />
                                            <Label htmlFor="marketing" className="leading-normal font-normal cursor-pointer">
                                                {signUp.marketingConsent}
                                            </Label>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <Checkbox id="terms" required />
                                            <Label htmlFor="terms" className="leading-normal font-normal cursor-pointer">
                                                {signUp.termsConsent} <span className="text-destructive">*</span>
                                            </Label>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                            <Checkbox id="privacy" required />
                                            <Label htmlFor="privacy" className="leading-normal font-normal cursor-pointer">
                                                {signUp.privacyConsent} <span className="text-destructive">*</span>
                                            </Label>
                                        </div>
                                    </div>
                                </div>

                            </CardContent>
                            <CardFooter className="flex flex-col gap-4 border-t bg-muted/10 p-6">
                                <Button type="submit" size="lg" className="w-full text-lg font-bold" disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {signUp.submit}
                                </Button>
                                <p className="text-center text-sm text-muted-foreground">
                                    {signUp.alreadyMember} <Link href={`/${lang}/login`} className="text-primary hover:underline font-medium">{signUp.loginHere}</Link>
                                </p>
                            </CardFooter>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

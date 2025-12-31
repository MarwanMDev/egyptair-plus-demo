"use client"

import * as React from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginForm({ lang, dictionary }: { lang: string, dictionary: any }) {
    const router = useRouter()
    const { signIn } = dictionary
    const [isLoading, setIsLoading] = React.useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            router.push(`/${lang}/dashboard`)
        }, 1000)
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 bg-muted/20">
            <Card className="w-full max-w-sm">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Plane className="h-6 w-6 text-primary rotate-[-45deg]" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">{signIn.title}</CardTitle>
                    <CardDescription>
                        {signIn.description}
                    </CardDescription>
                </CardHeader>
                <form onSubmit={onSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="membership-id" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {signIn.membershipId}
                            </label>
                            <Input
                                id="membership-id"
                                placeholder="123456789"
                                required
                                defaultValue="998877665"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {signIn.password}
                                </label>
                                <a href="#" className="text-sm font-medium text-primary hover:underline">
                                    {signIn.forgotPin}
                                </a>
                            </div>
                            <Input id="password" type="password" required defaultValue="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-primary hover:bg-primary/90" type="submit" disabled={isLoading}>
                            {isLoading ? signIn.submitting : signIn.submit}
                        </Button>
                    </CardFooter>
                </form>
                <div className="px-8 pb-8 text-center text-sm text-muted-foreground">
                    {signIn.notMember}{" "}
                    <Link href={`/${lang}/signup`} className="hover:text-primary underline underline-offset-4">
                        {signIn.join}
                    </Link>
                </div>
            </Card>
        </div>
    )
}

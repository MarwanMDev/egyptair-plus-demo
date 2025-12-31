import { getDictionary } from "@/lib/get-dictionary"
import { Locale } from "@/i18n-config"
import SignUpForm from "@/components/auth/signup-form"

export default async function SignUpPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)

    return (
        <SignUpForm lang={lang} dictionary={dictionary.auth} />
    )
}

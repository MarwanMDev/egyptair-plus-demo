import { getDictionary } from "@/lib/get-dictionary"
import { Locale } from "@/i18n-config"
import LoginForm from "@/components/auth/login-form"

export default async function LoginPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Locale
    const dictionary = await getDictionary(lang)

    return (
        <LoginForm lang={lang} dictionary={dictionary.auth} />
    )
}

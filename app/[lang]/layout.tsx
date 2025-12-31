import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { ThemeProvider } from "@/components/theme-provider"
import { CabinMood } from "@/components/layout/cabin-mood";
import { CursorTrail } from "@/components/layout/cursor-trail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EgyptAir Plus - Loyalty Program",
  description: "Join EgyptAir Plus and earn miles on every flight. Enjoy exclusive benefits, upgrades, and more.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CabinMood />
          <CursorTrail />
          <Header dictionary={dictionary.navigation} lang={lang} />
          <main className="flex-1">
            {children}
          </main>
          <Footer lang={lang} dictionary={dictionary.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}

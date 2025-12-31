import 'server-only'
import type { Locale } from '@/i18n-config'
import type { Dictionary } from '@/types/dictionary'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
    fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]()

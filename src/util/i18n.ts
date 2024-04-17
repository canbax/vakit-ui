import { en } from '@/locales/en'
import { tr } from '@/locales/tr'

const stringsInLanguages: Record<'tr' | 'en', Record<string, string>> = { en, tr }

/**
 * returns 2 letter language code ('en', 'de', 'tr', ...) of the browser. By default returns 'en'
 */
export function getDefaultLangCode(): 'tr' | 'en' {
  return (localStorage.getItem('currentLanguage') as 'tr' | 'en') ?? 'tr'
}

export function translate(key: string) {
  return stringsInLanguages[getDefaultLangCode()][key]
}

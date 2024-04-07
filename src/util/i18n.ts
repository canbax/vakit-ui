import { en } from '@/locales/en'
import { tr } from '@/locales/tr'

const stringsInLanguages: Record<'tr' | 'en', Record<string, string>> = { en, tr }

/**
 * returns 2 letter language code ('en', 'de', 'tr', ...) of the browser. By default returns 'en'
 */
export function getDefaultLangCode(): 'tr' | 'en' {
  const userLang = navigator.language
  if (userLang && typeof userLang === 'string' && userLang.includes('-')) {
    const langCode = userLang.split('-')[0] as 'tr' | 'en'
    if (stringsInLanguages[langCode]) {
      return langCode
    } else {
      console.warn(`${langCode} is not a supported language`)
    }
  } else {
    console.warn(`${userLang} is not a valid language indicator`)
  }
  return 'en'
}

export function translate(key: string) {
  return stringsInLanguages[getDefaultLangCode()][key]
}

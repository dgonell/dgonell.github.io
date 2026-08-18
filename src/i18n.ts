import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import es from '@/locales/es'
const saved = localStorage.getItem('locale')
const detected = navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
export const i18n = createI18n({
  legacy: false,
  locale: saved === 'es' || saved === 'en' ? saved : detected,
  fallbackLocale: 'en',
  messages: { en, es },
})

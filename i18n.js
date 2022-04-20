import i18n from 'i18next'
import copyDE from './de'
import copyEN from './en'
import { initReactI18next } from 'react-i18next'
import Languagedetector from 'i18next-browser-languagedetector'

const resources = {
  en: copyEN,
  de: copyDE,
}
const detector = new Languagedetector()
detector.init({
  order: ['path'],
  lookupFromPathIndex: 0,
})
i18n
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    },
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
    },
  })

export default i18n

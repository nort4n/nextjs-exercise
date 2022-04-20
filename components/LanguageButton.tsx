import { t } from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export default function LanguageButton() {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const { i18n } = useTranslation()
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  const [language, setLanguage] = useState<string>('en')
  const [buttonText, setButtonText] = useState<string>('Deutsch')
  return (
    <div>
      <button
        className="bg-slate-600 px-2"
        onClick={() => {
          language === 'en' ? setLanguage('de') : setLanguage('en')
          changeLanguage(language)
          // buttonText === 'Deutsch'
          //   ? setButtonText('English')
          //   : setButtonText('Deutsch')
        }}
      >
        {t('button:text')}
      </button>
    </div>
  )
}

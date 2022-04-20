import { useTranslation } from 'react-i18next'
export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-center text-6xl font-bold">{t('test:heading')}</h1>
    </div>
  )
}

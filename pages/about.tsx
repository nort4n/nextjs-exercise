import { t } from 'i18next'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>{t('about:head.title')}</title>
        <meta http-equiv="Content-Type" content="text/html, charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="author"
          content="Devhaus Leizpig — A learning community for tech professionals"
        />
        <meta name="description" content={t('home:head.description')} />
        <meta name="keywords" content={t('home:head.keywords')} />
      </Head>
      <div>
        <div>{t('about:text')}</div>
      </div>
    </>
  )
}

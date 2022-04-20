import Link from 'next/link'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../i18n'
import LanguageButton from '../components/LanguageButton'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <header className="sticky top-0 w-full bg-slate-800 p-5">
        <nav className="flex space-x-4 text-fuchsia-200">
          <Link href="/">
            <a className="hover:text-fuchsia-500">Home</a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-fuchsia-500">Blog</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-fuchsia-500">About</a>
          </Link>
          <Link href="/SecondMind">
            <a className="hover:text-fuchsia-500 flex-grow">Second Mind</a>
          </Link>
          <LanguageButton />
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default App

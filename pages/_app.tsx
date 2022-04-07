import Link from 'next/link'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <header className="sticky top-0 w-full bg-slate-800 p-5">
        <nav className="flex space-x-4 text-fuchsia-200">
          <Link href="/Home">
            <a className="hover:text-fuchsia-500">Home</a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-fuchsia-500">Blog</a>
          </Link>
          <Link href="/GuestBook">
            <a className="hover:text-fuchsia-500">Guest Book</a>
          </Link>
          <Link href="/SecondMind">
            <a className="hover:text-fuchsia-500">Second Mind</a>
          </Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default App

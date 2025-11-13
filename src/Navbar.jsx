import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const enableDark = stored ? stored === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', enableDark)
    setIsDark(enableDark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-neutral-900/50 border-b border-black/5 dark:border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-black to-neutral-700 dark:from-white dark:to-neutral-300 shadow-inner" />
            <span className="font-semibold tracking-tight text-lg">Vishwak</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="px-3 py-2 rounded-full text-sm font-medium text-neutral-700 hover:text-black hover:bg-black/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10 transition"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="ml-1 px-4 py-2 rounded-full text-sm font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition shadow"
            >
              Get in touch
            </a>
          </nav>

          <div className="md:hidden inline-flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="px-4 py-3 space-y-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-black hover:bg-black/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="block px-3 py-2 rounded-lg text-sm font-semibold bg-black text-white dark:bg-white dark:text-black transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

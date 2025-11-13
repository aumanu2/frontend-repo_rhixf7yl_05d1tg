import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'
import ProjectCard from './components/ProjectCard'

function Gradient() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[840px] rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-400/20 to-cyan-400/30 blur-3xl opacity-60" />
    </div>
  )
}

function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      <Gradient />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm/0">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium shadow-sm">
            Available for freelance from Jan ‘25
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight leading-[0.95]">
            Vishwak — Product & UI/UX Designer
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg max-w-xl">
            I craft calm, delightful interfaces with a focus on clarity, motion, and human-centered systems. Previously at startup labs and design studios.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#work" className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium shadow hover:shadow-md transition">
              View work
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 font-medium">
              Contact
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span>Figma</span>
            <span>•</span>
            <span>Prototyping</span>
            <span>•</span>
            <span>Design Systems</span>
            <span>•</span>
            <span>Motion</span>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

function Work() {
  const projects = [
    {
      title: 'Neobank onboarding',
      description: 'Frictionless KYC, progressive disclosure, and motion-led feedback.',
      tags: ['Fintech', 'Motion', 'System'],
      link: '#',
    },
    {
      title: 'Health insights app',
      description: 'Ambient charts with focus states, accessibility-first controls.',
      tags: ['Health', 'Accessibility', 'Data viz'],
      link: '#',
    },
    {
      title: 'E‑commerce design system',
      description: 'Composable primitives, semantic tokens, and smart templates.',
      tags: ['Design system', 'Figma', 'Tokens'],
      link: '#',
    },
    {
      title: 'AI assistant UI',
      description: 'Conversational patterns, multi-modal inputs, and trust cues.',
      tags: ['AI', 'UX', 'Prototype'],
      link: '#',
    },
  ]

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
          <a href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">All projects</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/60 dark:bg-neutral-900/60 ring-1 ring-black/5 dark:ring-white/10 p-8 sm:p-12 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Vishwak</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I’m a designer who blends system-thinking with playful exploration. I build design systems that scale, prototype interactions that feel alive, and advocate for accessibility and inclusive design.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400"/> 8+ years in product design</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400"/> Motion & micro-interactions</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400"/> Systems & tokens</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400"/> Research → execution</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black text-white dark:bg-white dark:text-black p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something calm</h2>
              <p className="mt-3 text-white/80 dark:text-black/70">Currently open to product design, systems, and prototype work.</p>
            </div>
            <a href="mailto:vishwak.design@studio.com" className="px-5 py-2.5 rounded-full bg-white text-black dark:bg-black dark:text-white font-medium hover:opacity-90 transition">Email Vishwak</a>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Vishwak. Crafted with care.</p>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('bg-white', 'dark:bg-neutral-950')
  }, [])

  return (
    <div className="relative min-h-screen text-neutral-900 dark:text-white selection:bg-indigo-200 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App

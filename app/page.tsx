'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, Search, X } from 'lucide-react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-1-rrbh3coseyuDDqpr2SIf1R9Y9YaJ0Bq.avif',
  secondary: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-2-GGZ2VH1nOtsOnJyyHvBAhroBi1yAve.avif',
  collection: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-5-9RS39ai2TWR2Vh2vZkobsx2INURVda.avif',
  detail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-4-v2rZqOPhxKbAxtRpX8Y3e5iGiSqJxa.avif',
  story: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-3-9BmYaIw7WAHcTBdZ4PmGeH3maari50.avif',
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-8-UowM90jYKfp86Xscqegtag9jF3SmBX.avif',
  texture: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-9-4sPuyUSyAx1rCMwq4iD3yOogwmwoWV.avif',
  final: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-7-rog3kiKTA5s9iZPKfo7d4bxLDwzwsL.avif',
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
    }, { threshold: 0.14 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => { window.clearTimeout(timer); observer.disconnect() }
  }, [])

  return (
    <main className="site-shell">
      <div className={`loading-screen ${loading ? '' : 'loading-screen--done'}`} aria-hidden={!loading}>
        <img className="loader-logo" src="/carpediam-logo-original.svg" alt="Carpe Diam" />
        <div className="loader-line"><span /></div>
        <span className="loader-label">Carpe Diem</span>
      </div>

      <header className="site-header">
        <button className="icon-button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={19} strokeWidth={1.25} /></button>
        <a className="wordmark" href="#top"><img src="/carpediam-logo-original.svg" alt="Carpe Diam" /></a>
        <div className="header-actions"><button className="icon-button" aria-label="Search"><Search size={17} strokeWidth={1.25} /></button><a className="header-link" href="#contact">Inquire <ArrowUpRight size={13} strokeWidth={1.2} /></a></div>
      </header>

      <div className={`menu-drawer ${menuOpen ? 'menu-drawer--open' : ''}`}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} strokeWidth={1.2} /></button>
        <span className="eyebrow">Explore</span>
        <nav><a href="#collection" onClick={() => setMenuOpen(false)}>Collections</a><a href="#edit" onClick={() => setMenuOpen(false)}>The Edit</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>
        <p>Objects with a point of view.<br />Made for a life well lived.</p>
      </div>

      <section className="hero" id="top">
        <img src={images.hero} alt="A sculptural jewel in warm light" />
        <div className="hero-shade" />
        <div className="hero-copy"><span className="eyebrow">Objects with a point of view</span><h1>Wear the<br /><em>unfamiliar.</em></h1><a className="circle-link" href="#collection">Discover <ArrowDown size={15} strokeWidth={1} /></a></div>
        <span className="hero-index">01 / 08</span>
      </section>

      <section className="intro section-pad"><Reveal><span className="eyebrow">A new language of luxury</span><h2>For those who<br /><em>look closer.</em></h2></Reveal><Reveal className="intro-body"><p>Carpediam is a study in contrast — ancient instinct and modern form, restraint and expression. Every piece begins with a question, and ends with something you will keep.</p><a className="text-link" href="#story">Read our story <ArrowUpRight size={14} /></a></Reveal><div className="scroll-word" aria-hidden="true">CARPE DIAM</div></section>

      <section className="split-feature"><div className="split-image"><img src={images.secondary} alt="Editorial portrait from the Carpediam collection" /></div><div className="split-copy"><Reveal><span className="eyebrow">The first collection</span><h2>Not made<br /><em>to blend in.</em></h2><p>Fluid silhouettes, tactile metals, and stones chosen for their imperfections. A collection that follows no rules but your own.</p><a className="text-link" href="#collection">View collection <ArrowUpRight size={14} /></a></Reveal></div></section>

      <section className="collection" id="collection"><div className="collection-head section-pad"><Reveal><span className="eyebrow">Selected works</span><h2>Uncommon<br /><em>ground.</em></h2></Reveal><span className="collection-count">02 — 05</span></div><div className="collection-grid"><Reveal><img src={images.collection} alt="Gold sculptural jewellery detail" /><span>01 / Orbit ring</span></Reveal><Reveal><img src={images.detail} alt="Close-up of a sculptural necklace" /><span>02 / Tidal necklace</span></Reveal><Reveal><img src={images.story} alt="Artful editorial jewellery composition" /><span>03 / Relic earrings</span></Reveal></div></section>

      <section className="edit-banner" id="edit"><img src={images.portrait} alt="The Edit editorial portrait" /><div className="edit-overlay" /><Reveal className="edit-copy"><span className="eyebrow">The edit / 001</span><h2>Quiet<br /><em>provocation.</em></h2><a className="circle-link" href="#contact">Enter the edit <ArrowUpRight size={15} strokeWidth={1} /></a></Reveal></section>

      <section className="story section-pad" id="story"><Reveal><span className="eyebrow">The Carpediam ethos</span><h2>Beauty is<br /><em>in the tension.</em></h2></Reveal><Reveal className="story-image"><img src={images.texture} alt="Textured material and jewellery composition" /></Reveal><Reveal className="story-copy"><p>We believe the most compelling objects carry a little friction. A sharp edge. A strange proportion. Something that makes you pause, then lean in.</p><a className="text-link" href="#contact">Discover more <ArrowUpRight size={14} /></a></Reveal></section>

      <section className="closing" id="contact"><img src={images.final} alt="Final Carpediam campaign image" /><div className="closing-overlay" /><Reveal className="closing-copy"><span className="eyebrow">Begin a conversation</span><h2>Make it<br /><em>personal.</em></h2><a className="circle-link" href="mailto:hello@carpediam.com">Get in touch <ArrowUpRight size={15} strokeWidth={1} /></a></Reveal></section>

      <footer className="footer section-pad"><a className="wordmark" href="#top"><img src="/carpediam-logo-original.svg" alt="Carpe Diam" /></a><div className="footer-links"><a href="#collection">Instagram</a><a href="#edit">The Edit</a><a href="mailto:hello@carpediam.com">hello@carpediam.com</a></div><span className="footer-note">© 2026 Carpediam / Made with intention</span></footer>
    </main>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, Search, X } from 'lucide-react'

const images = {
  hero: '/mock-woman-portrait.png',
  secondary: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-2-GGZ2VH1nOtsOnJyyHvBAhroBi1yAve.avif',
  collection: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-5-9RS39ai2TWR2Vh2vZkobsx2INURVda.avif',
  detail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-4-v2rZqOPhxKbAxtRpX8Y3e5iGiSqJxa.avif',
  story: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-3-9BmYaIw7WAHcTBdZ4PmGeH3maari50.avif',
  portrait: '/mock-woman-garden.png',
  texture: '/mock-woman-movement.png',
  final: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-7-rog3kiKTA5s9iZPKfo7d4bxLDwzwsL.avif',
}

const editSlides = [
  { image: images.hero, title: 'A study in presence.', detail: 'Quiet confidence, caught in warm light.' },
  { image: images.secondary, title: 'The Meher necklace.', detail: 'Emerald, pearls, diamonds, onyx in 14kt gold.' },
  { image: images.collection, title: 'Polki, reframed.', detail: 'Uncut diamonds with a contemporary pulse.' },
  { image: images.detail, title: 'Objects with a point of view.', detail: 'Pieces made to be remembered.' },
  { image: images.story, title: 'The ritual of making.', detail: 'Every surface, considered.' },
  { image: images.portrait, title: 'For the collectors.', detail: 'A world built around feeling.' },
  { image: images.texture, title: 'A little friction.', detail: 'Where restraint meets expression.' },
  { image: images.final, title: 'Begin with a question.', detail: 'Discover the world of Carpe Diam.' },
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
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
        <img src={images.hero} alt="Elegant woman in warm editorial light" />
        <div className="hero-shade" />
        <div className="hero-copy"><span className="eyebrow">Objects with a point of view</span><h1>Wear the<br /><em>unfamiliar.</em></h1><a className="circle-link" href="#collection">Discover <ArrowDown size={15} strokeWidth={1} /></a></div>
        <span className="hero-index">01 / 08</span>
      </section>

      <section className="intro section-pad"><Reveal><span className="eyebrow">A new language of luxury</span><h2>For those who<br /><em>look closer.</em></h2></Reveal><Reveal className="intro-body"><p>Carpediam is a study in contrast — ancient instinct and modern form, restraint and expression. Every piece begins with a question, and ends with something you will keep.</p><a className="text-link" href="#story">Read our story <ArrowUpRight size={14} /></a></Reveal><div className="scroll-word" aria-hidden="true">CARPE DIAM</div></section>

      <section className="split-feature"><div className="split-image"><img src={images.secondary} alt="Editorial portrait from the Carpediam collection" /></div><div className="split-copy"><Reveal><span className="eyebrow">The first collection</span><h2>Not made<br /><em>to blend in.</em></h2><p>Fluid silhouettes, tactile metals, and stones chosen for their imperfections. A collection that follows no rules but your own.</p><a className="text-link" href="#collection">View collection <ArrowUpRight size={14} /></a></Reveal></div></section>

      <section className="collection" id="collection"><div className="collection-head section-pad"><Reveal><span className="eyebrow">Selected works</span><h2>Uncommon<br /><em>ground.</em></h2></Reveal><span className="collection-count">02 — 05</span></div><div className="collection-grid"><Reveal><img src={images.collection} alt="Gold sculptural jewellery detail" /><span>01 / Orbit ring</span></Reveal><Reveal><img src={images.detail} alt="Close-up of a sculptural necklace" /><span>02 / Tidal necklace</span></Reveal><Reveal><img src={images.story} alt="Artful editorial jewellery composition" /><span>03 / Relic earrings</span></Reveal></div></section>

      <section className="edit-experience" id="edit">
        <div className="edit-stage">
          {editSlides.map((slide, index) => <img key={slide.title} className={`edit-slide-image ${index === activeSlide ? 'is-active' : ''}`} src={slide.image} alt={slide.title} />)}
          <div className="edit-stage-shade" />
          <div className="edit-topline"><span className="eyebrow">The Edit</span><span className="edit-kicker">Objects with a point of view</span></div>
          <button className="edit-arrow edit-arrow--left" aria-label="Previous edit slide" onClick={() => setActiveSlide((activeSlide + editSlides.length - 1) % editSlides.length)}><ArrowLeft size={19} strokeWidth={1} /></button>
          <button className="edit-arrow edit-arrow--right" aria-label="Next edit slide" onClick={() => setActiveSlide((activeSlide + 1) % editSlides.length)}><ArrowRight size={19} strokeWidth={1} /></button>
          <Reveal className="edit-hero-copy"><span className="eyebrow">Objects with a point of view</span><h2>{editSlides[activeSlide].title}</h2><p>{editSlides[activeSlide].detail}</p><a className="circle-link" href="#story">Discover <ArrowDown size={15} strokeWidth={1} /></a></Reveal>
          <span className="edit-counter">{String(activeSlide + 1).padStart(2, '0')} / 08</span>
        </div>
        <div className="edit-introduction section-pad"><Reveal><span className="eyebrow">A closer look</span><h2>The world<br /><em>behind the pieces.</em></h2></Reveal><Reveal className="edit-introduction-copy"><p>A closer look at the world of Carpe Diam. Its inspirations, latest creations and the people and processes behind the pieces.</p><a className="text-link" href="#story">Read the journal <ArrowUpRight size={14} /></a></Reveal></div>
      </section>

      <section className="story section-pad" id="story"><Reveal><span className="eyebrow">The Carpediam ethos</span><h2>Beauty is<br /><em>in the tension.</em></h2></Reveal><Reveal className="story-image"><img src={images.texture} alt="Textured material and jewellery composition" /></Reveal><Reveal className="story-copy"><p>We believe the most compelling objects carry a little friction. A sharp edge. A strange proportion. Something that makes you pause, then lean in.</p><a className="text-link" href="#contact">Discover more <ArrowUpRight size={14} /></a></Reveal></section>

      <section className="closing" id="contact"><img src={images.final} alt="Final Carpediam campaign image" /><div className="closing-overlay" /><Reveal className="closing-copy"><span className="eyebrow">Begin a conversation</span><h2>Make it<br /><em>personal.</em></h2><a className="circle-link" href="mailto:hello@carpediam.com">Get in touch <ArrowUpRight size={15} strokeWidth={1} /></a></Reveal></section>

      <footer className="footer section-pad"><a className="wordmark" href="#top"><img src="/carpediam-logo-original.svg" alt="Carpe Diam" /></a><div className="footer-links"><a href="#collection">Instagram</a><a href="#edit">The Edit / 08 stories</a><a href="mailto:hello@carpediam.com">hello@carpediam.com</a></div><span className="footer-note">© 2026 Carpediam / Made with intention</span></footer>
    </main>
  )
}

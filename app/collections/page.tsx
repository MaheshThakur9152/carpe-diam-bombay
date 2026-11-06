'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'
import styles from './collections.module.css'

const jewelleryImages = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-5-9RS39ai2TWR2Vh2vZkobsx2INURVda.avif',
  intro: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-2-GGZ2VH1nOtsOnJyyHvBAhroBi1yAve.avif',
  orbit: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-4-v2rZqOPhxKbAxtRpX8Y3e5iGiSqJxa.avif',
  relic: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-3-9BmYaIw7WAHcTBdZ4PmGeH3maari50.avif',
  closing: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage-7-rog3kiKTA5s9iZPKfo7d4bxLDwzwsL.avif',
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`${styles.reveal} ${className}`}>{children}</div>
}

function EditorialImage({ src, alt, className = '', fallback = '/mock-jewellery-hero.png', style }: { src: string; alt: string; className?: string; fallback?: string; style?: React.CSSProperties }) {
  const [source, setSource] = useState(src)
  return <img className={className} style={style} src={source} alt={alt} loading="lazy" onError={() => setSource(fallback)} />
}

const collections = [
  { number: '01', name: 'The Unfamiliar', copy: 'Sculptural forms for a life that refuses the expected.', image: jewelleryImages.hero, position: 'top center', className: styles.collectionWide },
  { number: '02', name: 'Meher', copy: 'A conversation between emerald, pearl, and light.', image: jewelleryImages.intro, position: 'center', className: styles.collectionReverse },
  { number: '03', name: 'Relic / Future', copy: 'Old-world craft with a new point of view.', image: jewelleryImages.relic, position: 'center', className: styles.collectionCinematic },
  { number: '04', name: 'Orbit', copy: 'Objects that hold their own gravity.', image: jewelleryImages.orbit, position: 'center', className: styles.collectionAsymmetric },
]

export default function CollectionsPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle(styles.visible, entry.isIntersecting))
    }, { threshold: 0.14 })
    document.querySelectorAll(`.${styles.reveal}`).forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <button className={styles.iconButton} aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={19} strokeWidth={1.25} /></button>
        <a href="/" className={styles.logo}><img src="/carpediam-logo-original.svg" alt="Carpe Diam" /></a>
        <a href="mailto:hello@carpediam.com" className={styles.inquire}>Inquire <ArrowUpRight size={13} strokeWidth={1.2} /></a>
      </header>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <button className={styles.drawerClose} aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} strokeWidth={1.2} /></button>
        <span className={styles.eyebrow}>Explore</span>
        <nav className={styles.drawerNav}>
          <a href="/">Home</a><a href="/collections">Collections</a><a href="/#edit">The Edit</a><a href="/#contact">Contact</a>
        </nav>
        <p>Objects with a point of view.<br />Made for a life well lived.</p>
      </div>

      <section className={styles.hero}>
        <EditorialImage src={jewelleryImages.hero} alt="Sculptural Carpe Diam jewellery in dramatic light" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <Reveal><span className={styles.eyebrow}>Carpe Diam / Collections</span><h1>Uncommon<br /><em>ground.</em></h1><a href="#introduction" className={styles.circleLink}>Explore <ArrowDown size={15} strokeWidth={1} /></a></Reveal>
        </div>
        <span className={styles.heroIndex}>01 / 04</span>
      </section>

      <section className={`${styles.introduction} ${styles.sectionPad}`} id="introduction">
        <Reveal className={styles.introHeading}><span className={styles.eyebrow}>The collection house</span><h2>Jewellery for<br /><em>the curious.</em></h2></Reveal>
        <Reveal className={styles.introBody}><p>Carpe Diam collections are made for people who find beauty in the unexpected. Each one is a world of its own — imagined, shaped, and made to be lived in.</p><a href="#featured" className={styles.textLink}>Enter the collections <ArrowUpRight size={14} /></a></Reveal>
        <div className={styles.introImage}><EditorialImage src={jewelleryImages.intro} alt="Editorial close-up of a Carpe Diam jewel" /></div>
      </section>

      <section className={styles.featured} id="featured">
        <div className={`${styles.sectionPad} ${styles.featuredHeader}`}><Reveal><span className={styles.eyebrow}>Selected collections</span><h2>Find your<br /><em>own gravity.</em></h2></Reveal><span className={styles.collectionCount}>04 worlds</span></div>
        <div className={styles.collectionList}>
          {collections.map((collection) => <article className={`${styles.collection} ${collection.className}`} key={collection.number}>
            <div className={styles.collectionImage}><EditorialImage src={collection.image} alt={`${collection.name} collection jewellery`} fallback="/mock-jewellery-hero.png" style={{ objectPosition: collection.position }} /></div>
            <Reveal className={styles.collectionCopy}><span className={styles.collectionNumber}>{collection.number} / Collection</span><h3>{collection.name}</h3><p>{collection.copy}</p><a href="#lookbook" className={styles.textLink}>Discover collection <ArrowUpRight size={14} /></a></Reveal>
          </article>)}
        </div>
      </section>

      <section className={`${styles.lookbook} ${styles.sectionPad}`} id="lookbook">
        <div className={styles.lookbookHead}><Reveal><span className={styles.eyebrow}>The lookbook</span><h2>Details<br /><em>worth keeping.</em></h2></Reveal><Reveal className={styles.lookbookNote}><p>A closer look at the gestures, surfaces, and stones that give each collection its character.</p></Reveal></div>
        <div className={styles.mosaic}>
          <Reveal className={styles.mosaicTall}><EditorialImage src={jewelleryImages.orbit} alt="Macro view of sculptural gold jewellery" /></Reveal>
          <Reveal className={styles.mosaicSmall}><EditorialImage src={jewelleryImages.relic} alt="Close-up jewellery detail" /></Reveal>
          <Reveal className={styles.mosaicWide}><EditorialImage src={jewelleryImages.closing} alt="Carpe Diam jewellery campaign image" /></Reveal>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyImage}><EditorialImage src={jewelleryImages.closing} alt="Cinematic Carpe Diam campaign image" /></div>
        <Reveal className={styles.storyCopy}><span className={styles.eyebrow}>Beyond the object</span><h2>Made to<br /><em>move with you.</em></h2><p>A collection is never finished when it leaves the studio. It gathers meaning in the way it is worn, remembered, and passed on.</p><a href="mailto:hello@carpediam.com" className={styles.textLink}>Begin a conversation <ArrowUpRight size={14} /></a></Reveal>
      </section>

      <section className={styles.finalDiscovery}>
        <EditorialImage src={jewelleryImages.relic} alt="Final Carpe Diam jewellery campaign image" className={styles.finalImage} />
        <div className={styles.heroShade} />
        <Reveal className={styles.finalCopy}><span className={styles.eyebrow}>Carpe Diam</span><h2>Find the<br /><em>unexpected.</em></h2><a href="mailto:hello@carpediam.com" className={styles.circleLink}>Enquire <ArrowUpRight size={15} strokeWidth={1} /></a></Reveal>
      </section>

      <footer className={`${styles.footer} ${styles.sectionPad}`}><a href="/" className={styles.logo}><img src="/carpediam-logo-original.svg" alt="Carpe Diam" /></a><div className={styles.footerLinks}><a href="/">Home</a><a href="/collections">Collections</a><a href="mailto:hello@carpediam.com">hello@carpediam.com</a></div><span className={styles.footerNote}>© 2026 Carpediam / Made with intention</span></footer>
    </main>
  )
}

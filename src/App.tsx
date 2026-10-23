import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Coffee,
  Globe2,
  Leaf,
  Menu,
  Mountain,
  PackageCheck,
  Mail,
  Quote,
  Sprout,
  X,
} from 'lucide-react'
import './App.css'
import productsJson from './data/products.json'
import { applyDocument, localeFromLocation, messages, prepareLocale, rememberLocale } from './i18n/locale.ts'
import type { Locale, Localized, LotStatus } from './i18n/types.ts'

const contactEmail = 'edgar@brothershn.coffee'
const whatsappNumber = '50495693232'
const whatsappLabel = '+504 9569-3232'

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const navItems = [
  { label: 0, href: '#cafes' },
  { label: 1, href: '#productores' },
  { label: 2, href: '#proceso' },
  { label: 3, href: '#trazabilidad' },
  { label: 4, href: '#nosotros' },
  { label: 5, href: '#contacto' },
] as const

const legacySections: Record<string, string> = {
  '#/producers': '#productores',
  '#/approach': '#proceso',
  '#/traceability': '#trazabilidad',
  '#/about': '#nosotros',
}

const lotOrder = { disponible: 0, consultar: 1, agotado: 2 } as const

type Lot = {
  id: string
  name: string
  status: LotStatus
  region: string
  producer: Localized
  variety: string
  process: Localized
  altitude: Localized
  notes: Localized
  volume: Localized
  score: string
  summary: Localized
  image: string
  imageAlt: Localized
}

const lots = [...(productsJson as Lot[])].sort(
  (a, b) => lotOrder[a.status] - lotOrder[b.status],
)

const heroMedia = [
  { src: '/images/slides/hero-02.jpg', position: 'hero-pos-02', primaryHref: '#cafes', secondaryHref: '#origen' },
  { src: '/images/slides/hero-03.jpg', position: 'hero-pos-03', primaryHref: '#proceso' },
  { src: '/images/slides/hero-04.jpg', position: 'hero-pos-04', primaryHref: '#productores' },
  { src: '/images/slides/hero-05.jpg', position: 'hero-pos-05', primaryHref: '#trazabilidad' },
] as const

const coffeeImages = {
  green: asset('/images/green-coffee.jpg'),
  roasted: asset('/images/cerezas.jpg'),
} as const

const processIcons = [Sprout, Coffee, PackageCheck]
const valueIcons = [Globe2, Leaf, Coffee]

const text = (value: Localized, locale: Locale) => value[locale]

function App() {
  const [locale, setLocale] = useState<Locale>(() => prepareLocale())
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [slide, setSlide] = useState(0)
  const [slidesPaused, setSlidesPaused] = useState(false)
  const copy = messages[locale]
  const heroSlide = copy.hero.slides[slide]
  const heroLink = heroMedia[slide]

  useEffect(() => {
    const onPop = () => {
      const next = localeFromLocation()
      applyDocument(next)
      setLocale(next)
    }
    const onHash = () => {
      const next = legacySections[window.location.hash]
      if (next) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${next}`)
        document.querySelector(next)?.scrollIntoView()
      }
      setMenuOpen(false)
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('hashchange', onHash)
    onHash()
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  const chooseLocale = (next: Locale) => {
    rememberLocale(next)
    if (next === locale) return
    applyDocument(next)
    setLocale(next)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    
    const honeypot = String(data.get('website') || '')
    if (honeypot) {
      form.reset()
      setFormStatus('success')
      return
    }

    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    if (!name || !email) {
      return
    }

    const interestValue = String(data.get('interest') || '')
    const interestLabel =
      copy.form.interestOptions.find((option) => option.value === interestValue)?.label ?? interestValue

    setFormStatus('sending')

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT ?? 
      'https://script.google.com/macros/s/AKfycbxzvMPUOS4pEkspal3YseF_wiGXTzuwnqHHeZplw3beviwfo_re6PdQ8zkQF4tpQH5xzA/exec'

    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: name,
          empresa: String(data.get('company') || ''),
          email,
          interes: interestLabel,
          mensaje: String(data.get('message') || ''),
          idioma: locale,
          pagina: window.location.href,
          website: honeypot,
        }),
        mode: 'no-cors',
      })

      setFormStatus('success')
      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    }
  }

  const handleProducerContact = () => {
    const fields = copy.producers.fields.map((field, i) => `${i + 1}. ${field}`).join('\n')
    const message = `${copy.producers.title} ${copy.producers.titleEm}\n\n${copy.producers.whatToSend}:\n${fields}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noreferrer')
  }

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || slidesPaused) return
    const id = window.setInterval(() => {
      if (document.hidden) return
      setSlide((current) => (current + 1) % heroMedia.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [slidesPaused])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label={copy.header.home}>
          <img className="brand-logo" src={asset('/images/logos/negativo.png')} alt="" />
        </a>

        <nav className="desktop-nav" aria-label={copy.header.mainNav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{copy.nav[item.label]}</a>
          ))}
        </nav>

        <div className="header-tools">
          <div className="lang-switch" role="group" aria-label={copy.lang.label}>
            <button type="button" aria-pressed={locale === 'es'} onClick={() => chooseLocale('es')}>ES</button>
            <span className="lang-switch-divider" aria-hidden="true">|</span>
            <button type="button" aria-pressed={locale === 'en'} onClick={() => chooseLocale('en')}>EN</button>
          </div>

          <a className="header-cta" href="#contacto">
            {copy.header.cta} <ArrowRight size={16} />
          </a>

          <button
            className="menu-button"
            aria-label={menuOpen ? copy.header.closeMenu : copy.header.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label={copy.header.mobileNav}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {copy.nav[item.label]} <ChevronRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
          <>
            <section
              className="hero-section"
              id="inicio"
              onMouseEnter={() => setSlidesPaused(true)}
              onMouseLeave={() => setSlidesPaused(false)}
              onFocus={() => setSlidesPaused(true)}
              onBlur={(event) => {
                const next = event.relatedTarget
                if (next instanceof Node && event.currentTarget.contains(next)) return
                setSlidesPaused(false)
              }}
            >
              {heroMedia.map((media, index) => (
                <img
                  key={media.src}
                  className={`hero-image ${media.position}${index === slide ? ' is-active' : ''}`}
                  src={asset(media.src)}
                  alt={index === slide ? copy.hero.slides[index].imageAlt : ''}
                  aria-hidden={index !== slide}
                />
              ))}
              <div className="hero-shade" />
              <div className="hero-content" key={slide}>
                <p className="hero-kicker"><span />{heroSlide.kicker}</p>
                <h1>{heroSlide.title}<br /><em>{heroSlide.titleEm}</em></h1>
                <p className="hero-intro">{heroSlide.intro}</p>
                <div className="hero-actions">
                  <a className="button button-light" href={heroLink.primaryHref}>
                    {heroSlide.primary} <ArrowRight size={18} />
                  </a>
                  {'secondary' in heroSlide && 'secondaryHref' in heroLink && (
                    <a className="text-link light" href={heroLink.secondaryHref}>
                      {heroSlide.secondary} <ArrowDown size={17} />
                    </a>
                  )}
                </div>
                <div className="hero-dots" role="tablist" aria-label={copy.hero.label}>
                  {copy.hero.slides.map((item, index) => (
                    <button
                      key={item.kicker}
                      type="button"
                      role="tab"
                      aria-selected={index === slide}
                      aria-label={item.kicker}
                      onClick={() => setSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="origin-intro section" id="origen">
              <div className="origin-copy">
                <div className="section-label"><p>{copy.origin.label}</p></div>
                <p className="overline">{copy.origin.overline}</p>
                <h2>{copy.origin.title}<br /><em>{copy.origin.titleEm}</em></h2>
                <div className="origin-body">
                  <p>{copy.origin.paragraph}</p>
                </div>
              </div>
              <div className="origin-image">
                <img src={asset('/images/our-origin.jpg')} alt={copy.origin.imageAlt} />
              </div>
            </section>

            <section className="lots-section section" id="lotes">
              <div className="section-label"><p>{copy.lots.label}</p></div>
              <div className="lots-heading">
                <p className="overline">{copy.lots.overline}</p>
                <h2>{copy.lots.title}<br /><em>{copy.lots.titleEm}</em></h2>
                <p>{copy.lots.intro}</p>
              </div>
              <div className="lot-grid">
                {lots.map((lot) => {
                  const producer = text(lot.producer, locale)
                  const altitude = text(lot.altitude, locale)
                  return (
                    <article key={lot.id} className="lot-card">
                      <div className="lot-image-wrap">
                        <img src={asset(lot.image)} alt={text(lot.imageAlt, locale)} />
                      </div>
                      <div className="lot-content">
                        <div className="lot-header">
                          <div>
                            <h3 className="lot-name">{lot.name}</h3>
                            <p className="lot-producer">{producer}</p>
                          </div>
                          <span className={`lot-badge lot-${lot.status}`}>{copy.lots.status[lot.status]}</span>
                        </div>
                        <div className="lot-details">
                          {lot.score && <span className="lot-tag">{copy.lots.score(lot.score)}</span>}
                          {lot.variety && <span className="lot-tag">{lot.variety}</span>}
                          {text(lot.process, locale) && <span className="lot-tag">{text(lot.process, locale)}</span>}
                          {altitude && <span className="lot-tag"><Mountain size={14} />{altitude}</span>}
                        </div>
                        <a href="#contacto" className="lot-inquire">{copy.lots.inquire} <ArrowRight size={14} /></a>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>

            <section className="coffee-section section" id="cafes">
              <div className="coffee-heading">
                <div className="section-label section-label-light"><p>{copy.coffees.label}</p></div>
                <p className="overline">{copy.coffees.overline}</p>
                <h2>{copy.coffees.title}<br /><em>{copy.coffees.titleEm}</em></h2>
                <p>{copy.coffees.intro}</p>
              </div>

              <div className="coffee-cards">
                {copy.coffees.cards.map((coffee) => (
                  <article className="coffee-card" key={coffee.id}>
                    <div className="card-image-wrap">
                      <img src={coffeeImages[coffee.id]} alt={coffee.imageAlt} />
                    </div>
                    <div className="card-copy">
                      <p className="card-eyebrow">{coffee.eyebrow}</p>
                      <h3>{coffee.title}</h3>
                      <p>{coffee.description}</p>
                      <ul>
                        {coffee.details.map((detail) => (
                          <li key={detail}><Check size={15} /> {detail}</li>
                        ))}
                      </ul>
                      <a href="#contacto">{copy.coffees.inquire} <ArrowRight size={16} /></a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="story-section section" id="productores">
              <div className="story-layout">
                <div className="story-copy">
                  <div className="section-label"><p>{copy.producers.label}</p></div>
                  <p className="overline">{copy.producers.howItWorks}</p>
                  <h2>{copy.producers.title}<br /><em>{copy.producers.titleEm}</em></h2>
                  <p className="story-intro">{copy.producers.intro}</p>
                  <button className="button button-copper" type="button" onClick={handleProducerContact}>
                    {copy.producers.cta} <ArrowRight size={18} />
                  </button>
                </div>
                <div className="story-panel">
                  <ol className="story-steps">
                    {copy.producers.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <h3>{copy.producers.whatToSend}</h3>
                  <ul className="story-checks">
                    {copy.producers.fields.map((field) => (
                      <li key={field}><Check size={16} /> {field}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="process-section section" id="proceso">
              <div className="process-heading">
                <div className="section-label"><p>{copy.process.label}</p></div>
                <p className="overline">{copy.process.overline}</p>
                <h2>{copy.process.title}<br /><em>{copy.process.titleEm}</em></h2>
                <p className="story-intro">{copy.approach.intro}</p>
              </div>
              <div className="process-list">
                {copy.process.steps.map((step, index) => {
                  const Icon = processIcons[index]
                  return (
                    <article key={step.title}>
                      <Icon />
                      <div><h3>{step.title}</h3><p>{step.body}</p></div>
                    </article>
                  )
                })}
              </div>
              <div className="section-cta">
                <a className="text-link" href="#contacto">
                  {copy.approach.cta} <ArrowRight size={17} />
                </a>
              </div>
            </section>

            <section className="story-section section" id="trazabilidad">
              <div className="story-layout">
                <div className="story-copy">
                  <div className="section-label"><p>{copy.traceability.label}</p></div>
                  <p className="overline">{copy.traceability.whatCanBeShown}</p>
                  <h2>{copy.traceability.title}<br /><em>{copy.traceability.titleEm}</em></h2>
                  <p className="story-intro">{copy.traceability.intro}</p>
                </div>
                <div className="story-panel">
                  <ul className="story-checks">
                    {copy.traceability.items.map((item) => (
                      <li key={item}><Check size={16} /> {item}</li>
                    ))}
                  </ul>
                  <p className="story-note">{copy.traceability.disclaimer}</p>
                </div>
              </div>
            </section>

            <section className="manifesto-section" id="impacto">
              <img
                className="manifesto-media manifesto-fallback"
                src={asset('/images/amanecer.jpg')}
                alt={copy.gallery.dawnAlt}
              />
              <video
                className="manifesto-media"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={asset('/images/amanecer.jpg')}
                aria-hidden="true"
              >
                <source src={asset('/videos/finca.mp4')} type="video/mp4" />
              </video>
              <div className="manifesto-shade" />
              <div className="manifesto-content">
                <Quote size={38} strokeWidth={1} />
                <blockquote>{copy.manifesto.quote}</blockquote>
                <p>{copy.manifesto.caption}</p>
              </div>
            </section>

            <section className="values-section section">
              <div className="section-label"><p>{copy.values.label}</p></div>
              <div className="values-grid">
                {copy.values.items.map((item, index) => {
                  const Icon = valueIcons[index]
                  return (
                    <article key={item.title}>
                      <Icon />
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  )
                })}
              </div>
            </section>

            <section className="origin-intro section" id="nosotros">
              <div className="origin-copy">
                <div className="section-label"><p>{copy.about.label}</p></div>
                <h2>{copy.about.title}<br /><em>{copy.about.titleEm}</em></h2>
                <div className="origin-body">
                  <p>{copy.about.intro}</p>
                  <p>{copy.about.experience}</p>
                  <a className="button button-copper" href="#contacto">
                    {copy.about.cta} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="origin-image">
                <img src={asset('/images/origin.jpg')} alt={copy.gallery.teamAlt} />
              </div>
            </section>

            <section className="contact-section section" id="contacto">
              <div className="contact-copy">
                <p className="overline">{copy.contact.overline}</p>
                <h2>{copy.contact.title}<br />{copy.contact.titleRest}<em>{copy.contact.titleEm}</em></h2>
                <p>{copy.contact.intro}</p>
                <div className="contact-channels">
                  <a className="contact-channel" href={`mailto:${contactEmail}`}>
                    <Mail size={18} />
                    <span>{copy.contact.email}</span>
                    <strong>{contactEmail}</strong>
                  </a>
                  <a className="contact-channel" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                    <span>WhatsApp</span>
                    <strong>{whatsappLabel}</strong>
                  </a>
                  <div className="contact-location">
                    <span>{copy.contact.origin}</span><strong>Marcala, La Paz</strong><small>{copy.contact.region}</small>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row">
                  <label>{copy.form.name}<input name="name" placeholder={copy.form.namePlaceholder} required /></label>
                  <label>{copy.form.company}<input name="company" placeholder={copy.form.companyPlaceholder} /></label>
                </div>
                <label>{copy.form.email}<input name="email" type="email" placeholder={copy.form.emailPlaceholder} required /></label>
                <label>
                  {copy.form.interest}
                  <select name="interest" defaultValue="">
                    <option value="" disabled>{copy.form.interestPlaceholder}</option>
                    {copy.form.interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
                <label>{copy.form.message}<textarea name="message" rows={4} placeholder={copy.form.messagePlaceholder} /></label>
                <input 
                  name="website" 
                  type="text" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                />
                <button className="button button-copper" type="submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? <>{copy.form.sending}</> : <>{copy.form.submit} <ArrowRight size={18} /></>}
                </button>
                {formStatus === 'success' && (
                  <small style={{ color: '#2d5a44' }}>{copy.form.success}</small>
                )}
                {formStatus === 'error' && (
                  <small style={{ color: '#a13939' }}>{copy.form.error(contactEmail)}</small>
                )}
              </form>
            </section>
          </>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#" aria-label={copy.header.home}>
            <img className="brand-logo brand-logo-footer" src={asset('/images/logos/negativo.png')} alt="" />
          </a>
          <p>{copy.footer.tagline}</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp {whatsappLabel}</a>
        </div>
        <div className="footer-links">
          <div>
            <span>{copy.footer.explore}</span>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{copy.nav[item.label]}</a>
            ))}
          </div>
          <div>
            <span>{copy.footer.destination}</span>
            {copy.footer.places.map((place) => <p key={place}>{place}</p>)}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Brothers Coffee</p>
          <p>Marcala, Honduras</p>
          <p className="footer-credit">
            {copy.footer.developedBy} <a href="https://www.laureldev.hn" target="_blank" rel="noopener">LaurelDev</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

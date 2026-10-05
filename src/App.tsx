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

const navHrefs = ['#origen', '#cafes', '#lotes', '#proceso', '#impacto'] as const

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
  const [mailOpened, setMailOpened] = useState(false)
  const copy = messages[locale]

  useEffect(() => {
    const onPop = () => {
      const next = localeFromLocation()
      applyDocument(next)
      setLocale(next)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const chooseLocale = (next: Locale) => {
    rememberLocale(next)
    if (next === locale) return
    applyDocument(next)
    setLocale(next)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const interestValue = String(data.get('interest') || '')
    const interestLabel =
      copy.form.interestOptions.find((option) => option.value === interestValue)?.label ?? interestValue
    const request = [
      copy.form.bodyTitle,
      `${copy.form.name}: ${data.get('name')}`,
      `${copy.form.company}: ${data.get('company') || '—'}`,
      `${copy.form.email}: ${data.get('email')}`,
      `${copy.form.interest}: ${interestLabel}`,
      `${copy.form.message}: ${data.get('message') || '—'}`,
    ].join('\n')
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(copy.form.subject)}&body=${encodeURIComponent(request)}`
    window.location.href = mailto
    setMailOpened(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={copy.header.home}>
          <img className="brand-logo" src={asset('/images/logos/negativo.png')} alt="" />
        </a>

        <nav className="desktop-nav" aria-label={copy.header.mainNav}>
          {copy.nav.map((label, index) => <a key={navHrefs[index]} href={navHrefs[index]}>{label}</a>)}
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
            {copy.nav.map((label, index) => (
              <a key={navHrefs[index]} href={navHrefs[index]} onClick={() => setMenuOpen(false)}>
                {label} <ChevronRight size={18} />
              </a>
            ))}
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              {copy.header.samples} <ChevronRight size={18} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <img
            className="hero-image"
            src={asset('/images/equipo.jpg')}
            alt={copy.hero.imageAlt}
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-kicker"><span />Marcala, Honduras</p>
            <h1>{copy.hero.title}<br /><em>{copy.hero.titleEm}</em></h1>
            <p className="hero-intro">{copy.hero.intro}</p>
            <div className="hero-actions">
              <a className="button button-light" href="#cafes">
                {copy.hero.coffees} <ArrowRight size={18} />
              </a>
              <a className="text-link light" href="#origen">
                {copy.hero.origin} <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <div className="hero-side-note"><span>14°09′ N</span><span>{copy.hero.west}</span></div>
        </section>

        <section className="origin-intro section" id="origen">
          <div className="section-label"><p>{copy.origin.label}</p></div>
          <div className="origin-copy">
            <p className="overline">{copy.origin.overline}</p>
            <h2>{copy.origin.title}<br /><em>{copy.origin.titleEm}</em></h2>
            <div className="origin-body">
              {copy.origin.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="origin-gallery section">
          <div className="gallery-main">
            <img src={asset('/images/drying.jpg')} alt={copy.gallery.dryingAlt} />
            <span className="image-caption">{copy.gallery.dryingCaption}</span>
          </div>
          <div className="gallery-secondary">
            <div className="gallery-stat">
              <Mountain size={28} strokeWidth={1.5} />
              <p><strong>Marcala</strong><span>{copy.gallery.place}</span></p>
            </div>
            <img src={asset('/images/origin.jpg')} alt={copy.gallery.teamAlt} />
          </div>
        </section>

        <section className="finca-mosaic" aria-label={copy.gallery.farmLabel}>
          <figure className="finca-main">
            <img src={asset('/images/patio.jpg')} alt={copy.gallery.patiosAlt} />
            <span className="image-caption">{copy.gallery.patiosCaption}</span>
          </figure>
          <div className="finca-side">
            <img src={asset('/images/amanecer.jpg')} alt={copy.gallery.dawnAlt} />
            <img src={asset('/images/conversacion.jpg')} alt={copy.gallery.conversationAlt} />
          </div>
        </section>

        <section className="coffee-section section" id="cafes">
          <div className="section-label section-label-light"><p>{copy.coffees.label}</p></div>
          <div className="coffee-heading">
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
              const volume = text(lot.volume, locale)
              return (
                <article className="lot-card" key={lot.id}>
                  <div className="lot-image">
                    <img src={asset(lot.image)} alt={text(lot.imageAlt, locale)} />
                    <span className={`lot-status is-${lot.status}`}>{copy.lots.status[lot.status]}</span>
                  </div>
                  <div className="lot-copy">
                    <p className="card-eyebrow">{text(lot.process, locale)}</p>
                    <h3>{lot.name}</h3>
                    <p className="lot-meta">
                      {[lot.region, lot.variety, altitude].filter(Boolean).join(' · ')}
                    </p>
                    <p>{text(lot.notes, locale)}</p>
                    <p className="lot-summary">{text(lot.summary, locale)}</p>
                    <div className="lot-facts">
                      {producer && <span>{producer}</span>}
                      {lot.score && <span>{copy.lots.score(lot.score)}</span>}
                      {volume && <span>{volume}</span>}
                    </div>
                    <a href="#contacto">{copy.lots.inquire} <ArrowRight size={16} /></a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="process-section section" id="proceso">
          <div className="section-label"><p>{copy.process.label}</p></div>
          <div className="process-content">
            <div className="process-heading">
              <p className="overline">{copy.process.overline}</p>
              <h2>{copy.process.title}<br /><em>{copy.process.titleEm}</em></h2>
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
            <button className="button button-copper" type="submit">
              {mailOpened ? <><Check size={18} /> {copy.form.submitDone}</> : <>{copy.form.submit} <ArrowRight size={18} /></>}
            </button>
            <small>
              {mailOpened ? copy.form.opened(contactEmail) : copy.form.hint(contactEmail)}
            </small>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#inicio" aria-label={copy.header.home}>
            <img className="brand-logo brand-logo-footer" src={asset('/images/logos/negativo.png')} alt="" />
          </a>
          <p>{copy.footer.tagline}</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp {whatsappLabel}</a>
        </div>
        <div className="footer-links">
          <div>
            <span>{copy.footer.explore}</span>
            {copy.nav.map((label, index) => <a key={navHrefs[index]} href={navHrefs[index]}>{label}</a>)}
          </div>
          <div>
            <span>{copy.footer.destination}</span>
            {copy.footer.places.map((place) => <p key={place}>{place}</p>)}
          </div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Brothers Coffee</p><p>Marcala, Honduras</p></div>
      </footer>
    </div>
  )
}

export default App

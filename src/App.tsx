import { useState } from 'react'
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
  Quote,
  Sprout,
  X,
} from 'lucide-react'
import './App.css'

const navItems = [
  ['Origen', '#origen'],
  ['Cafés', '#cafes'],
  ['Proceso', '#proceso'],
  ['Impacto', '#impacto'],
]

const coffeeTypes = [
  {
    number: '01',
    title: 'Café verde',
    eyebrow: 'Para tostadores e importadores',
    description:
      'Lotes y microlotes de especialidad preparados según las necesidades de cada comprador, con información clara desde el origen.',
    details: ['Trazabilidad por lote', 'Muestras disponibles', 'Preparación para exportación'],
    image: '/images/drying.webp',
  },
  {
    number: '02',
    title: 'Café tostado',
    eyebrow: 'Para marcas y negocios',
    description:
      'El carácter de Marcala expresado en perfiles de tueste pensados para una taza dulce, limpia y memorable.',
    details: ['Tueste por perfil', 'Presentaciones a medida', 'Consistencia en cada entrega'],
    image: '/images/hero.webp',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const request = [
      'Solicitud para Brothers Coffee',
      `Nombre: ${data.get('name')}`,
      `Empresa: ${data.get('company')}`,
      `Correo: ${data.get('email')}`,
      `Interés: ${data.get('interest')}`,
      `Mensaje: ${data.get('message')}`,
    ].join('\n')

    try {
      await navigator.clipboard.writeText(request)
    } finally {
      setCopied(true)
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Brothers Coffee, inicio">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span className="brand-name">Brothers <strong>Coffee</strong></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos <ArrowRight size={16} />
        </a>

        <button
          className="menu-button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label} <ChevronRight size={18} />
              </a>
            ))}
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Solicitar muestras <ChevronRight size={18} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <img
            className="hero-image"
            src="/images/hero.webp"
            alt="Productora supervisando cerezas de café durante el secado en Marcala"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-kicker"><span />Marcala, Honduras</p>
            <h1>Café de altura.<br /><em>Carácter de origen.</em></h1>
            <p className="hero-intro">
              Café verde y tostado de especialidad, conectado con las personas y
              montañas que hacen de Marcala un origen extraordinario.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#cafes">
                Descubrir nuestros cafés <ArrowRight size={18} />
              </a>
              <a className="text-link light" href="#origen">
                Conocer el origen <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <div className="hero-side-note"><span>14°09′ N</span><span>87°58′ O</span></div>
        </section>

        <section className="origin-intro section" id="origen">
          <div className="section-label"><span>01</span><p>Nuestro origen</p></div>
          <div className="origin-copy">
            <p className="overline">Entre montañas, nace algo excepcional</p>
            <h2>Un café que lleva<br /><em>Marcala al mundo.</em></h2>
            <div className="origin-body">
              <p>
                Brothers Coffee conecta a compradores exigentes con cafés de
                especialidad cultivados en Marcala, una región hondureña reconocida
                por su tradición cafetalera y sus condiciones de altura.
              </p>
              <p>
                Trabajamos cerca del origen, cuidando cada etapa para conservar la
                identidad de cada lote y construir relaciones comerciales claras y
                duraderas.
              </p>
            </div>
          </div>
        </section>

        <section className="origin-gallery section">
          <div className="gallery-main">
            <img src="/images/origin.webp" alt="Productora y comprador entre plantas de café" loading="lazy" />
            <span className="image-caption">Relaciones que comienzan en la finca</span>
          </div>
          <div className="gallery-secondary">
            <div className="gallery-stat">
              <Mountain size={28} strokeWidth={1.5} />
              <p><strong>Marcala</strong><span>La Paz · Honduras</span></p>
            </div>
            <img src="/images/drying.webp" alt="Productor revisando café en camas de secado" loading="lazy" />
          </div>
        </section>

        <section className="coffee-section section" id="cafes">
          <div className="section-label section-label-light"><span>02</span><p>Nuestra oferta</p></div>
          <div className="coffee-heading">
            <p className="overline">Calidad que se puede rastrear</p>
            <h2>Del grano verde<br /><em>a la taza.</em></h2>
            <p>
              Una oferta flexible para tostadores, importadores, distribuidores y
              marcas que buscan café hondureño con identidad.
            </p>
          </div>

          <div className="coffee-cards">
            {coffeeTypes.map((coffee) => (
              <article className="coffee-card" key={coffee.title}>
                <div className="card-image-wrap">
                  <img src={coffee.image} alt="" loading="lazy" />
                  <span className="card-number">{coffee.number}</span>
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
                  <a href="#contacto">Consultar disponibilidad <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section section" id="proceso">
          <div className="section-label"><span>03</span><p>Cómo trabajamos</p></div>
          <div className="process-content">
            <div className="process-heading">
              <p className="overline">De la finca al destino</p>
              <h2>Cuidado en cada<br /><em>decisión.</em></h2>
            </div>
            <div className="process-list">
              <article>
                <span>01</span><Sprout />
                <div><h3>Selección en origen</h3><p>Identificamos cafés con perfiles claros y potencial para cada mercado.</p></div>
              </article>
              <article>
                <span>02</span><Coffee />
                <div><h3>Control de calidad</h3><p>Evaluamos cada lote para proteger su consistencia y expresión en taza.</p></div>
              </article>
              <article>
                <span>03</span><PackageCheck />
                <div><h3>Preparación y exportación</h3><p>Coordinamos la preparación del café según el destino y las necesidades del comprador.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="manifesto-section" id="impacto">
          <img src="/images/community.webp" alt="Grupo de mujeres de comunidades cafetaleras de Marcala" loading="lazy" />
          <div className="manifesto-shade" />
          <div className="manifesto-content">
            <Quote size={38} strokeWidth={1} />
            <blockquote>
              El mejor café no solo se reconoce en la taza. También se reconoce en
              las relaciones que deja a su paso.
            </blockquote>
            <p>Una visión de calidad compartida desde Marcala.</p>
          </div>
        </section>

        <section className="values-section section">
          <div className="section-label"><span>04</span><p>Lo que nos guía</p></div>
          <div className="values-grid">
            <article><Globe2 /><h3>Origen visible</h3><p>Cada café comienza con una finca, una familia y una historia que merece ser conocida.</p></article>
            <article><Leaf /><h3>Calidad responsable</h3><p>Buscamos calidad con una mirada de largo plazo sobre la tierra y las comunidades.</p></article>
            <article><Coffee /><h3>Relaciones directas</h3><p>Preferimos conversaciones transparentes y alianzas construidas cosecha tras cosecha.</p></article>
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="contact-copy">
            <p className="overline">Comencemos una conversación</p>
            <h2>Tu próximo café<br />puede comenzar <em>aquí.</em></h2>
            <p>
              Cuéntanos qué perfil, volumen o presentación estás buscando. Podemos
              preparar una solicitud para iniciar la conversación.
            </p>
            <div className="contact-location">
              <span>Origen</span><strong>Marcala, La Paz</strong><small>Honduras · Centroamérica</small>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>Nombre<input name="name" placeholder="Tu nombre" required /></label>
              <label>Empresa<input name="company" placeholder="Nombre de tu empresa" /></label>
            </div>
            <label>Correo electrónico<input name="email" type="email" placeholder="nombre@empresa.com" required /></label>
            <label>
              Me interesa
              <select name="interest" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Café verde</option><option>Café tostado</option><option>Muestras</option><option>Alianza comercial</option>
              </select>
            </label>
            <label>Cuéntanos qué buscas<textarea name="message" rows={4} placeholder="Mercado, volumen estimado, perfil o proceso..." /></label>
            <button className="button button-copper" type="submit">
              {copied ? <><Check size={18} /> Solicitud copiada</> : <>Preparar solicitud <ArrowRight size={18} /></>}
            </button>
            <small>
              {copied
                ? 'Tu solicitud quedó copiada. Pégala en el canal de contacto de Brothers Coffee.'
                : 'En esta primera versión, el botón copia tu solicitud para compartirla por tu canal preferido.'}
            </small>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand brand-light" href="#inicio">
            <span className="brand-mark" aria-hidden="true"><span /><span /></span>
            <span className="brand-name">Brothers <strong>Coffee</strong></span>
          </a>
          <p>Café de especialidad desde Marcala, Honduras.</p>
        </div>
        <div className="footer-links">
          <div><span>Explorar</span>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div><span>Destino</span><p>Honduras</p><p>Norteamérica</p><p>Europa</p><p>Asia</p></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Brothers Coffee</p><p>Marcala, Honduras</p></div>
      </footer>
    </div>
  )
}

export default App

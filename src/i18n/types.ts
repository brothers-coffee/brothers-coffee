export type Locale = 'es' | 'en'

export type Localized = {
  es: string
  en: string
}

export type LotStatus = 'disponible' | 'consultar' | 'agotado'

export type Interest = 'green' | 'roasted' | 'samples' | 'partnership'

export type Messages = {
  meta: {
    title: string
    description: string
  }
  lang: {
    label: string
  }
  nav: [string, string, string, string, string]
  header: {
    home: string
    mainNav: string
    mobileNav: string
    cta: string
    openMenu: string
    closeMenu: string
    samples: string
  }
  hero: {
    imageAlt: string
    title: string
    titleEm: string
    intro: string
    coffees: string
    origin: string
    west: string
  }
  origin: {
    label: string
    overline: string
    title: string
    titleEm: string
    paragraphs: [string, string, string]
  }
  gallery: {
    dryingAlt: string
    dryingCaption: string
    place: string
    teamAlt: string
    farmLabel: string
    patiosAlt: string
    patiosCaption: string
    dawnAlt: string
    conversationAlt: string
  }
  coffees: {
    label: string
    overline: string
    title: string
    titleEm: string
    intro: string
    inquire: string
    cards: [
      {
        id: 'green'
        eyebrow: string
        title: string
        description: string
        details: [string, string, string]
        imageAlt: string
      },
      {
        id: 'roasted'
        eyebrow: string
        title: string
        description: string
        details: [string, string, string]
        imageAlt: string
      },
    ]
  }
  lots: {
    label: string
    overline: string
    title: string
    titleEm: string
    intro: string
    inquire: string
    score: (score: string) => string
    status: Record<LotStatus, string>
  }
  process: {
    label: string
    overline: string
    title: string
    titleEm: string
    steps: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
  }
  manifesto: {
    quote: string
    caption: string
  }
  values: {
    label: string
    items: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
  }
  contact: {
    overline: string
    title: string
    titleRest: string
    titleEm: string
    intro: string
    email: string
    origin: string
    region: string
  }
  form: {
    subject: string
    bodyTitle: string
    name: string
    namePlaceholder: string
    company: string
    companyPlaceholder: string
    email: string
    emailPlaceholder: string
    interest: string
    interestPlaceholder: string
    interestOptions: [
      { value: Interest; label: string },
      { value: Interest; label: string },
      { value: Interest; label: string },
      { value: Interest; label: string },
    ]
    message: string
    messagePlaceholder: string
    submit: string
    submitDone: string
    opened: (email: string) => string
    hint: (email: string) => string
  }
  footer: {
    tagline: string
    explore: string
    destination: string
    places: [string, string, string, string]
  }
}

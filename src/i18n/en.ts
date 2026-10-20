import type { Messages } from './types.ts'

export const en = {
  meta: {
    title: 'Brothers Coffee · Specialty coffee, built on relationships',
    description: 'Brothers Coffee connects specialty coffee producers with international buyers through carefully presented lots, trusted origin partners and transparent communication.',
  },
  lang: {
    label: 'Language',
  },
  nav: ['Origin', 'Our Coffees', 'Lots', 'Our Approach', 'Contact'],
  header: {
    home: 'Brothers Coffee, home',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    cta: 'Explore available coffees',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    samples: 'Request samples',
  },
  hero: {
    imageAlt: 'Three people from the team among coffee trees with ripe cherry',
    title: 'Specialty coffee,',
    titleEm: 'built on relationships.',
    intro:
      'Brothers Coffee connects specialty coffee producers with international buyers through carefully presented lots, trusted origin partners and transparent communication.',
    coffees: 'Explore available coffees',
    origin: 'Talk to our sourcing team',
    west: '87°58′ W',
  },
  origin: {
    label: 'Our origin',
    overline: 'Behind every lot, there are people',
    title: 'Connecting origin',
    titleEm: 'with opportunity.',
    paragraphs: [
      'We work with producers and origin partners to identify and present specialty coffee lots for buyers looking for quality, clear information and reliable communication. Each opportunity is discussed according to the details and availability confirmed for that lot.',
      'We want buyers to understand the people, knowledge and work behind each coffee. Origin stories are shared with the permission of the people featured and with respect for their privacy.',
      'Share your requirements and let\'s start a focused conversation about available lots, samples and next steps.',
    ],
  },
  gallery: {
    dryingAlt: 'A producer among cherries and parchment drying in the sun, with the mountain behind her',
    dryingCaption: 'Drying, in front of the mountain',
    place: 'La Paz · Honduras',
    teamAlt: 'The farm team among coffee plants in Marcala',
    farmLabel: 'The farm',
    patiosAlt: 'Drying patios with cherry and parchment under a cloudy sky',
    patiosCaption: 'Drying patios on the farm',
    dawnAlt: "Dawn mist over the farm's mountains",
    conversationAlt: 'Producers talking beside coffee cherries left to dry',
  },
  coffees: {
    label: 'Our coffees',
    overline: 'Explore available coffees',
    title: 'Tell us what varieties,',
    titleEm: 'profiles, volumes and timing you are sourcing.',
    intro:
      'We will share the lot information currently available and help identify relevant options.',
    inquire: 'View coffee lots',
    cards: [
      {
        id: 'green',
        eyebrow: 'For roasters and importers',
        title: 'Green coffee',
        description:
          "Specialty lots and microlots prepared to each buyer's needs, with clear information from origin.",
        details: ['Traceability by lot', 'Samples available', 'Prepared for export'],
        imageAlt: 'A producer arranging coffee bags for transport',
      },
      {
        id: 'roasted',
        eyebrow: 'For brands and businesses',
        title: 'Roasted coffee',
        description:
          'The character of Marcala, expressed in roast profiles meant for a sweet, clean, memorable cup.',
        details: ['Roast by profile', 'Presentations made to order', 'Consistency in every delivery'],
        imageAlt: 'Coffee cherries ripening on the tree',
      },
    ],
  },
  lots: {
    label: 'Lots',
    overline: 'Our coffees',
    title: 'Explore the coffee lots',
    titleEm: 'we can currently discuss with buyers.',
    intro:
      'Details vary by producer and lot, so we share confirmed information directly and update availability as it changes. Interested in a lot? Contact us for the latest availability, technical details and sample options.',
    inquire: 'Request lot information',
    score: (score) => `Score ${score}`,
    status: {
      disponible: 'Available',
      consultar: 'Inquire',
      agotado: 'Sold out',
    },
  },
  process: {
    label: 'Our approach',
    overline: 'A clear process, built on trust',
    title: 'Clear information.',
    titleEm: 'Trusted partners. Better relationships.',
    steps: [
      {
        title: 'Quality with information',
        body: 'We share quality data and characteristics only when they are available and supported.',
      },
      {
        title: 'Origin partnerships',
        body: 'We coordinate capabilities with producers and partners; we do not claim to do all stages directly.',
      },
      {
        title: 'Transparency',
        body: 'We separate confirmed information from data pending validation.',
      },
    ],
  },
  manifesto: {
    quote:
      'At Brothers Coffee, coffee unites us.',
    caption: 'Our shared vision.',
  },
  values: {
    label: 'Our principles',
    items: [
      {
        title: 'Quality with information',
        body: 'We share quality data and characteristics only when they are available and supported.',
      },
      {
        title: 'Origin partnerships',
        body: 'We coordinate capabilities with producers and partners; we do not claim to do all stages directly.',
      },
      {
        title: 'Long-term relationships',
        body: 'We seek clear communication, realistic commitments and viable commercial opportunities.',
      },
    ],
  },
  contact: {
    overline: "Let's talk coffee",
    title: 'Tell us a little about your company',
    titleRest: 'and ',
    titleEm: 'what you are sourcing.',
    intro:
      "We will follow up with the relevant information currently available and the next steps.",
    email: 'Email',
    origin: 'Origin',
    region: 'Honduras · Central America',
  },
  form: {
    subject: '[EN] Request for Brothers Coffee',
    bodyTitle: 'Request for Brothers Coffee',
    name: 'Name',
    namePlaceholder: 'Your name',
    company: 'Company',
    companyPlaceholder: 'Your company name',
    email: 'Email',
    emailPlaceholder: 'name@company.com',
    interest: "I'm interested in",
    interestPlaceholder: 'Select an option',
    interestOptions: [
      { value: 'green', label: 'Green coffee' },
      { value: 'roasted', label: 'Roasted coffee' },
      { value: 'samples', label: 'Samples' },
      { value: 'partnership', label: 'Commercial partnership' },
    ],
    message: "Tell us what you're looking for",
    messagePlaceholder: 'Market, estimated volume, profile, or process...',
    submit: 'Send inquiry',
    submitDone: 'Email ready',
    opened: (_email) => `Thank you for contacting Brothers Coffee. We have received your inquiry and will respond with the relevant information available.`,
    hint: (email) => `The request opens in your email, addressed to ${email}.`,
  },
  footer: {
    tagline: 'Brothers Coffee connects specialty coffee producers with international buyers through origin partnerships and transparent communication. At Brothers Coffee, coffee unites us.',
    explore: 'Explore',
    destination: 'Destination',
    places: ['Honduras', 'North America', 'Europe', 'Asia'],
  },
} satisfies Messages

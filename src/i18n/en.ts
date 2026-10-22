import type { Messages } from './types.ts'

export const en = {
  meta: {
    title: 'Brothers Coffee · Specialty coffee, built on relationships',
    description: 'Brothers Coffee connects specialty coffee producers with international buyers through carefully presented lots, trusted origin partners and transparent communication.',
  },
  lang: {
    label: 'Language',
  },
  nav: ['Our Coffees', 'For Producers', 'Our Approach', 'Traceability', 'About Us', 'Contact'],
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
    paragraph:
      'We work with producers and origin partners to identify and present specialty coffee lots for buyers looking for quality, clear information and reliable communication. We want buyers to understand the people, knowledge and work behind each coffee.',
    imageAlt: 'The farm team among coffee plants in Marcala',
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
    title: 'Explore',
    titleEm: 'available coffees',
    intro:
      'Tell us what varieties, profiles, volumes and timing you are sourcing. We will share the lot information currently available and help identify relevant options.',
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
  approach: {
    label: 'Our approach',
    title: 'A clear process, built on trust.',
    intro:
      'Our approach brings together careful lot presentation, coordination with origin partners and direct communication with buyers. We aim to make each opportunity easier to understand by clarifying what is known, what still needs confirmation and what the next step will be.',
    principles: [
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
      {
        title: 'Long-term relationships',
        body: 'We seek clear communication, realistic commitments and viable commercial opportunities.',
      },
    ],
    cta: 'Talk to our team',
  },
  traceability: {
    label: 'Traceability',
    title: 'Know what is documented.',
    intro:
      'For each lot, the information available may include origin, variety, process, harvest, volume and quality details when confirmed. The records and documents that can be shared depend on the lot and the partners involved. Traceability information should not be confused with a certification.',
    whatCanBeShown: 'What information can be shown',
    items: [
      'Lot identification data and general origin',
      'Variety, process and harvest, if confirmed',
      'Documented quality information',
      'Documents available for sharing, subject to authorization',
      'Update date and contact for inquiries',
    ],
    disclaimer:
      'We do not claim that all coffees are organic, regenerative, certified or free of deforestation without current evidence. We do not promise social or environmental impacts without verifiable data.',
  },
  about: {
    label: 'About us',
    title: 'A coffee business shaped by relationships.',
    intro:
      'Brothers Coffee is building a network that connects specialty coffee producers, origin partners and international buyers. Our work focuses on presenting lots clearly, coordinating the right conversations and building commercial relationships grounded in transparency and follow-through.',
    experience:
      'Our CEO brings ten years of specialty coffee export experience developed through another company. That experience informs the way we approach quality, coordination and buyer relationships at Brothers Coffee.',
    cta: 'Get to know us',
  },
  producers: {
    label: 'For producers',
    title: 'Are you a specialty coffee producer?',
    intro:
      'We are interested in learning about producers and coffee lots with clear information on origin, variety, process, harvest and availability. Share your details so we can understand your coffee and discuss whether there may be a fit with buyer requirements. Submitting a lot does not guarantee a purchase; we aim to communicate the next steps clearly.',
    howItWorks: 'How it works',
    steps: [
      'Share basic information about the producer and the lot.',
      'We review the available data and request clarifications if needed.',
      'If there is a relevant opportunity, we discuss evaluation, samples and requirements.',
      'Before moving forward, we clarify conditions, responsibilities and next steps.',
    ],
    whatToSend: 'What information to send',
    fields: [
      'Name and community/region',
      'Phone or WhatsApp and email (if available)',
      'Variety and process',
      'Harvest year and estimated volume',
      'Available quality information',
      'Photos of the lot or process (optional)',
    ],
    cta: 'Present a coffee lot',
  },
} satisfies Messages

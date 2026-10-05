import type { Messages } from './types.ts'

export const en = {
  meta: {
    title: 'Brothers Coffee · Marcala, Honduras',
    description: 'Brothers Coffee: specialty green and roasted coffee from Marcala, Honduras.',
  },
  lang: {
    label: 'Language',
  },
  nav: ['Origin', 'Coffees', 'Lots', 'Process', 'Impact'],
  header: {
    home: 'Brothers Coffee, home',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    cta: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    samples: 'Request samples',
  },
  hero: {
    imageAlt: 'Three people from the team among coffee trees with ripe cherry',
    title: 'High-grown coffee.',
    titleEm: 'Character of origin.',
    intro:
      'Specialty green and roasted coffee, connected to the people, the culture, and the sustainability that make Brothers Coffee an extraordinary coffee.',
    coffees: 'Discover our coffees',
    origin: 'Meet the origin',
    west: '87°58′ W',
  },
  origin: {
    label: 'Our origin',
    overline: 'Among the mountains, something exceptional begins',
    title: 'A coffee that carries',
    titleEm: 'Chinacla to the world.',
    paragraphs: [
      'Brothers Coffee connects demanding buyers with specialty coffees grown in Chinacla, a Honduran land where altitude, climate, and coffee tradition come together to create exceptional cup profiles.',
      'Chinacla has produced Cup of Excellence champions three times. Its lots stay among the top places year after year, and that consistency confirms it as a region capable of growing some of the best coffees in Honduras.',
      "We work close to origin and look after every stage to keep each lot's identity, connect producers with demanding buyers, and bring the world coffees that represent the best of Chinacla.",
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
    label: 'Our offer',
    overline: 'Quality that can be traced',
    title: 'From green bean',
    titleEm: 'to the cup.',
    intro:
      'A flexible offer for roasters, importers, distributors, and brands looking for Honduran coffee with identity.',
    inquire: 'Check availability',
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
    overline: 'Green coffee from Marcala',
    title: 'Every lot has',
    titleEm: 'a name and a farm.',
    intro:
      'Origin, process, and cup notes. Availability changes with the harvest and is confirmed when you request a sample.',
    inquire: 'Inquire about this lot',
    score: (score) => `Score ${score}`,
    status: {
      disponible: 'Available',
      consultar: 'Inquire',
      agotado: 'Sold out',
    },
  },
  process: {
    label: 'How we work',
    overline: 'From the farm to destination',
    title: 'Care in every',
    titleEm: 'decision.',
    steps: [
      {
        title: 'Selection at origin',
        body: 'We identify coffees with clear profiles and potential for each market.',
      },
      {
        title: 'Quality control',
        body: 'We evaluate each lot to protect its consistency and expression in the cup.',
      },
      {
        title: 'Preparation and export',
        body: "We coordinate preparation according to the destination and the buyer's needs.",
      },
    ],
  },
  manifesto: {
    quote:
      'The best coffee is recognized not only in the cup. It is also recognized in the relationships it leaves behind.',
    caption: 'A shared vision of quality from Marcala.',
  },
  values: {
    label: 'What guides us',
    items: [
      {
        title: 'Visible origin',
        body: 'Every coffee begins with a farm, a family, and a story that deserves to be known.',
      },
      {
        title: 'Responsible quality',
        body: 'We look for quality with a long view of the land and the communities.',
      },
      {
        title: 'Direct relationships',
        body: 'We prefer transparent conversations and partnerships built harvest after harvest.',
      },
    ],
  },
  contact: {
    overline: "Let's start a conversation",
    title: 'Your next coffee',
    titleRest: 'can begin ',
    titleEm: 'here.',
    intro:
      "Tell us the profile, volume, or presentation you're looking for. Write to us directly, or leave a request and it opens in your email.",
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
    submit: 'Send request',
    submitDone: 'Email ready',
    opened: (email) => `Your email opened with the request for ${email}.`,
    hint: (email) => `The request opens in your email, addressed to ${email}.`,
  },
  footer: {
    tagline: 'Specialty coffee from Marcala, Honduras.',
    explore: 'Explore',
    destination: 'Destination',
    places: ['Honduras', 'North America', 'Europe', 'Asia'],
  },
} satisfies Messages

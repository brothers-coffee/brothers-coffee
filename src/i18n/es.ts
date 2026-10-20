import type { Messages } from './types.ts'

export const es = {
  meta: {
    title: 'Brothers Coffee · Café de especialidad, construido a través de relaciones',
    description:
      'Conectamos productores de café de especialidad con compradores internacionales mediante lotes presentados con cuidado, aliados de origen confiables y comunicación transparente.',
  },
  lang: {
    label: 'Idioma',
  },
  nav: ['Origen', 'Nuestros cafés', 'Lotes', 'Nuestra forma de trabajar', 'Contacto'],
  header: {
    home: 'Brothers Coffee, inicio',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    cta: 'Consultar cafés disponibles',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    samples: 'Solicitar muestras',
  },
  hero: {
    imageAlt: 'Tres personas del equipo entre cafetos con cereza madura',
    title: 'Café de especialidad,',
    titleEm: 'construido a través de relaciones.',
    intro:
      'Conectamos productores de café de especialidad con compradores internacionales mediante lotes presentados con cuidado, aliados de origen confiables y comunicación transparente.',
    coffees: 'Consultar cafés disponibles',
    origin: 'Hablar con nuestro equipo',
    west: '87°58′ O',
  },
  origin: {
    label: 'Nuestro origen',
    overline: 'Detrás de cada lote, hay personas',
    title: 'Conectamos el origen',
    titleEm: 'con nuevas oportunidades.',
    paragraphs: [
      'Trabajamos con productores y aliados de origen para identificar y presentar lotes de café de especialidad a compradores que buscan calidad, información clara y comunicación confiable. Cada oportunidad se conversa según los datos y la disponibilidad confirmados para cada lote.',
      'Queremos que los compradores conozcan a las personas, el conocimiento y el trabajo que hay detrás de cada café. Compartimos historias de origen con autorización de quienes aparecen y respetando su privacidad.',
      'Cuéntenos qué necesita para su próximo programa de café y conversemos sobre lotes disponibles, muestras y próximos pasos.',
    ],
  },
  gallery: {
    dryingAlt: 'Productora entre cerezas y pergamino secándose al sol frente a la montaña',
    dryingCaption: 'El secado, frente a la montaña',
    place: 'La Paz · Honduras',
    teamAlt: 'Equipo de la finca entre plantas de café en Marcala',
    farmLabel: 'La finca',
    patiosAlt: 'Patios de secado con café cereza y pergamino bajo un cielo de nubes',
    patiosCaption: 'Patios de secado en la finca',
    dawnAlt: 'Amanecer con neblina sobre las montañas de la finca',
    conversationAlt: 'Productores conversando junto a cerezas de café en secado',
  },
  coffees: {
    label: 'Nuestros cafés',
    overline: 'Conozca los cafés disponibles',
    title: 'Cuéntenos qué variedades,',
    titleEm: 'perfiles, volúmenes y fechas de compra está buscando.',
    intro:
      'Compartiremos la información de los lotes disponible y ayudaremos a identificar opciones relevantes.',
    inquire: 'Ver lotes de café',
    cards: [
      {
        id: 'green',
        eyebrow: 'Para tostadores e importadores',
        title: 'Café verde',
        description:
          'Lotes y microlotes de especialidad preparados según las necesidades de cada comprador, con información clara desde el origen.',
        details: ['Trazabilidad por lote', 'Muestras disponibles', 'Preparación para exportación'],
        imageAlt: 'Productor acomodando sacos de café para su traslado',
      },
      {
        id: 'roasted',
        eyebrow: 'Para marcas y negocios',
        title: 'Café tostado',
        description:
          'El carácter de Marcala expresado en perfiles de tueste pensados para una taza dulce, limpia y memorable.',
        details: ['Tueste por perfil', 'Presentaciones a medida', 'Consistencia en cada entrega'],
        imageAlt: 'Cerezas de café madurando en la mata',
      },
    ],
  },
  lots: {
    label: 'Lotes',
    overline: 'Nuestros cafés',
    title: 'Conozca los lotes de café',
    titleEm: 'que podemos conversar actualmente con compradores.',
    intro:
      'Los datos varían según productor y lote; compartimos información confirmada y actualizamos la disponibilidad cuando cambia. ¿Le interesa este lote? Contáctenos para consultar disponibilidad actualizada, detalles técnicos y opciones de muestra.',
    inquire: 'Solicitar información del lote',
    score: (score) => `Puntaje ${score}`,
    status: {
      disponible: 'Disponible',
      consultar: 'Consultar',
      agotado: 'Agotado',
    },
  },
  process: {
    label: 'Nuestra forma de trabajar',
    overline: 'Un proceso claro, construido con confianza',
    title: 'Información precisa.',
    titleEm: 'Aliados confiables. Mejores relaciones.',
    steps: [
      {
        title: 'Calidad con información',
        body: 'Compartimos datos de calidad y características solo cuando están disponibles y respaldados.',
      },
      {
        title: 'Alianzas de origen',
        body: 'Coordinamos capacidades con productores y aliados; no afirmamos hacer todas las etapas directamente.',
      },
      {
        title: 'Transparencia',
        body: 'Separamos la información confirmada de los datos pendientes de validación.',
      },
    ],
  },
  manifesto: {
    quote:
      'En Brothers Coffee el café nos une.',
    caption: 'Nuestra visión compartida.',
  },
  values: {
    label: 'Nuestros principios',
    items: [
      {
        title: 'Calidad con información',
        body: 'Compartimos datos de calidad y características solo cuando están disponibles y respaldados.',
      },
      {
        title: 'Alianzas de origen',
        body: 'Coordinamos capacidades con productores y aliados; no afirmamos hacer todas las etapas directamente.',
      },
      {
        title: 'Relaciones de largo plazo',
        body: 'Buscamos comunicación clara, compromisos realistas y oportunidades comerciales viables.',
      },
    ],
  },
  contact: {
    overline: 'Conversemos sobre café',
    title: 'Cuéntenos brevemente sobre su empresa',
    titleRest: 'y ',
    titleEm: 'qué tipo de café está buscando.',
    intro:
      'Le responderemos con la información relevante disponible y los siguientes pasos.',
    email: 'Correo',
    origin: 'Origen',
    region: 'Honduras · Centroamérica',
  },
  form: {
    subject: '[ES] Solicitud para Brothers Coffee',
    bodyTitle: 'Solicitud para Brothers Coffee',
    name: 'Nombre',
    namePlaceholder: 'Su nombre',
    company: 'Empresa',
    companyPlaceholder: 'Nombre de su empresa',
    email: 'Correo electrónico',
    emailPlaceholder: 'nombre@empresa.com',
    interest: 'Me interesa',
    interestPlaceholder: 'Seleccione una opción',
    interestOptions: [
      { value: 'green', label: 'Café verde' },
      { value: 'roasted', label: 'Café tostado' },
      { value: 'samples', label: 'Muestras' },
      { value: 'partnership', label: 'Alianza comercial' },
    ],
    message: 'Cuéntenos qué busca',
    messagePlaceholder: 'Mercado, volumen estimado, perfil o proceso...',
    submit: 'Enviar consulta',
    submitDone: 'Correo listo',
    opened: (_email) => `Gracias por contactar a Brothers Coffee. Recibimos su consulta y responderemos con la información relevante disponible.`,
    hint: (email) => `La solicitud se abre en su correo, dirigida a ${email}.`,
  },
  footer: {
    tagline: 'Brothers Coffee conecta productores de café de especialidad con compradores internacionales mediante alianzas de origen y comunicación transparente. En Brothers Coffee el café nos une.',
    explore: 'Explorar',
    destination: 'Destino',
    places: ['Honduras', 'Norteamérica', 'Europa', 'Asia'],
  },
} satisfies Messages

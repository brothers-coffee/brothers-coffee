import type { Messages } from './types.ts'

export const es = {
  meta: {
    title: 'Brothers Coffee · Marcala, Honduras',
    description:
      'Brothers Coffee: café verde y tostado de especialidad desde Marcala, Honduras.',
  },
  lang: {
    label: 'Idioma',
  },
  nav: ['Origen', 'Cafés', 'Lotes', 'Proceso', 'Impacto'],
  header: {
    home: 'Brothers Coffee, inicio',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    cta: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    samples: 'Solicitar muestras',
  },
  hero: {
    imageAlt: 'Tres personas del equipo entre cafetos con cereza madura',
    title: 'Café de altura.',
    titleEm: 'Carácter de origen.',
    intro:
      'Café verde y tostado de especialidad, conectado con las personas, la cultura y la sostenibilidad que hacen de Brothers Coffee un café extraordinario.',
    coffees: 'Descubrir nuestros cafés',
    origin: 'Conocer el origen',
    west: '87°58′ O',
  },
  origin: {
    label: 'Nuestro origen',
    overline: 'Entre montañas, nace algo excepcional',
    title: 'Un café que lleva',
    titleEm: 'Chinacla al mundo.',
    paragraphs: [
      'Brothers Coffee conecta a compradores exigentes con cafés de especialidad cultivados en Chinacla, una tierra hondureña donde la altura, el clima y la tradición cafetalera se unen para crear perfiles excepcionales en taza.',
      'Chinacla ha sido origen de cafés campeones de la Taza de Excelencia en tres ocasiones. Sus lotes se mantienen entre los primeros lugares año tras año, y esa constancia la confirma como una zona capaz de producir algunos de los mejores cafés de Honduras.',
      'Trabajamos cerca del origen y cuidamos cada etapa para conservar la identidad de cada lote, conectar a los productores con compradores exigentes y llevar al mundo cafés que representan lo mejor de Chinacla.',
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
    label: 'Nuestra oferta',
    overline: 'Calidad que se puede rastrear',
    title: 'Del grano verde',
    titleEm: 'a la taza.',
    intro:
      'Una oferta flexible para tostadores, importadores, distribuidores y marcas que buscan café hondureño con identidad.',
    inquire: 'Consultar disponibilidad',
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
    overline: 'Café verde de Marcala',
    title: 'Cada lote tiene',
    titleEm: 'nombre y finca.',
    intro:
      'Origen, proceso y notas de taza. La disponibilidad cambia con la cosecha y se confirma al pedir una muestra.',
    inquire: 'Consultar este lote',
    score: (score) => `Puntaje ${score}`,
    status: {
      disponible: 'Disponible',
      consultar: 'Consultar',
      agotado: 'Agotado',
    },
  },
  process: {
    label: 'Cómo trabajamos',
    overline: 'De la finca al destino',
    title: 'Cuidado en cada',
    titleEm: 'decisión.',
    steps: [
      {
        title: 'Selección en origen',
        body: 'Identificamos cafés con perfiles claros y potencial para cada mercado.',
      },
      {
        title: 'Control de calidad',
        body: 'Evaluamos cada lote para proteger su consistencia y expresión en taza.',
      },
      {
        title: 'Preparación y exportación',
        body: 'Coordinamos la preparación del café según el destino y las necesidades del comprador.',
      },
    ],
  },
  manifesto: {
    quote:
      'El mejor café no solo se reconoce en la taza. También se reconoce en las relaciones que deja a su paso.',
    caption: 'Una visión de calidad compartida desde Marcala.',
  },
  values: {
    label: 'Lo que nos guía',
    items: [
      {
        title: 'Origen visible',
        body: 'Cada café comienza con una finca, una familia y una historia que merece ser conocida.',
      },
      {
        title: 'Calidad responsable',
        body: 'Buscamos calidad con una mirada de largo plazo sobre la tierra y las comunidades.',
      },
      {
        title: 'Relaciones directas',
        body: 'Preferimos conversaciones transparentes y alianzas construidas cosecha tras cosecha.',
      },
    ],
  },
  contact: {
    overline: 'Comencemos una conversación',
    title: 'Tu próximo café',
    titleRest: 'puede comenzar ',
    titleEm: 'aquí.',
    intro:
      'Cuéntanos qué perfil, volumen o presentación estás buscando. Escríbenos directo o deja tu solicitud y se abre en tu correo.',
    email: 'Correo',
    origin: 'Origen',
    region: 'Honduras · Centroamérica',
  },
  form: {
    subject: '[ES] Solicitud para Brothers Coffee',
    bodyTitle: 'Solicitud para Brothers Coffee',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    company: 'Empresa',
    companyPlaceholder: 'Nombre de tu empresa',
    email: 'Correo electrónico',
    emailPlaceholder: 'nombre@empresa.com',
    interest: 'Me interesa',
    interestPlaceholder: 'Selecciona una opción',
    interestOptions: [
      { value: 'green', label: 'Café verde' },
      { value: 'roasted', label: 'Café tostado' },
      { value: 'samples', label: 'Muestras' },
      { value: 'partnership', label: 'Alianza comercial' },
    ],
    message: 'Cuéntanos qué buscas',
    messagePlaceholder: 'Mercado, volumen estimado, perfil o proceso...',
    submit: 'Enviar solicitud',
    submitDone: 'Correo listo',
    opened: (email) => `Se abrió tu correo con la solicitud para ${email}.`,
    hint: (email) => `La solicitud se abre en tu correo, dirigida a ${email}.`,
  },
  footer: {
    tagline: 'Café de especialidad desde Marcala, Honduras.',
    explore: 'Explorar',
    destination: 'Destino',
    places: ['Honduras', 'Norteamérica', 'Europa', 'Asia'],
  },
} satisfies Messages

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
  nav: ['Nuestros cafés', 'Para productores', 'Forma de trabajar', 'Trazabilidad', 'Nosotros', 'Contacto'],
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
    label: 'Imágenes del inicio',
    slides: [
      {
        kicker: 'Marcala, Honduras',
        title: 'Café de especialidad,',
        titleEm: 'construido a través de relaciones.',
        intro: 'Conectamos productores de especialidad con compradores internacionales.',
        imageAlt: 'Productora de pie detrás de cerezas de café en secado, entre pinos',
        primary: 'Consultar cafés disponibles',
        secondary: 'Hablar con nuestro equipo',
      },
      {
        kicker: 'Forma de trabajar',
        title: 'Un proceso claro,',
        titleEm: 'construido con confianza.',
        intro:
          'Presentamos cada lote con cuidado, coordinamos con aliados de origen y hablamos directo con el comprador.',
        imageAlt: 'Productora con cerezas en las manos, frente a la montaña con neblina',
        primary: 'Ver cómo trabajamos',
      },
      {
        kicker: 'Para productores',
        title: '¿Produce café',
        titleEm: 'de especialidad?',
        intro: 'Cuéntenos de su lote: origen, variedad, proceso, cosecha y disponibilidad.',
        imageAlt: 'Familia de productores entre cafetos, con un niño en brazos',
        primary: 'Presentar un lote',
      },
      {
        kicker: 'Trazabilidad',
        title: 'Conozca qué información',
        titleEm: 'está documentada.',
        intro: 'Origen, variedad, proceso, cosecha y calidad, cuando están confirmados para ese lote.',
        imageAlt: 'Cerezas de café maduras en la rama, sostenidas por una mano',
        primary: 'Ver la trazabilidad',
      },
    ],
  },
  origin: {
    label: 'Nuestro origen',
    overline: 'Detrás de cada lote, hay personas',
    title: 'Conectamos el origen',
    titleEm: 'con nuevas oportunidades.',
    paragraph:
      'Trabajamos con productores y aliados de origen para identificar y presentar lotes de café de especialidad a compradores que buscan calidad, información clara y comunicación confiable. Queremos que conozcan a las personas, el conocimiento y el trabajo que hay detrás de cada café.',
    imageAlt: 'Dos personas se dan la mano frente a sacos de café de Honduras',
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
    title: 'Consultar',
    titleEm: 'cafés disponibles',
    intro:
      'Cuéntenos qué variedades, perfiles, volúmenes y fechas de compra está buscando. Compartiremos la información de los lotes disponible y ayudaremos a identificar opciones relevantes.',
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
    title: 'Conozca los lotes',
    titleEm: 'que podemos conversar.',
    intro:
      'Compartimos datos confirmados de cada lote y actualizamos la disponibilidad cuando cambia. Contáctenos para detalles técnicos y muestras.',
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
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.',
    error: (email) => `No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos a ${email}.`,
  },
  footer: {
    tagline: 'Brothers Coffee conecta productores de café de especialidad con compradores internacionales mediante alianzas de origen y comunicación transparente. En Brothers Coffee el café nos une.',
    explore: 'Explorar',
    destination: 'Destino',
    places: ['Honduras', 'Norteamérica', 'Europa', 'Asia'],
    developedBy: 'Desarrollado por',
  },
  approach: {
    label: 'Nuestra forma de trabajar',
    title: 'Un proceso claro, construido con confianza.',
    intro:
      'Nuestra forma de trabajar reúne la presentación cuidadosa de los lotes, la coordinación con aliados de origen y la comunicación directa con compradores. Buscamos que cada oportunidad sea fácil de entender, aclarando qué está confirmado, qué falta por verificar y cuál será el siguiente paso.',
    principles: [
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
      {
        title: 'Relaciones de largo plazo',
        body: 'Buscamos comunicación clara, compromisos realistas y oportunidades comerciales viables.',
      },
    ],
    cta: 'Hable con nuestro equipo',
  },
  traceability: {
    label: 'Trazabilidad',
    title: 'Conozca qué información',
    titleEm: 'está documentada.',
    intro:
      'Para cada lote, la información disponible puede incluir origen, variedad, proceso, cosecha, volumen y datos de calidad cuando estén confirmados. Los registros y documentos que pueden compartirse dependen del lote y de los aliados involucrados. La información de trazabilidad no debe confundirse con una certificación.',
    whatCanBeShown: 'Qué información puede mostrarse',
    items: [
      'Datos identificativos del lote y origen general',
      'Variedad, proceso y cosecha, si están confirmados',
      'Información de calidad documentada',
      'Documentos disponibles para compartir, sujeto a autorización',
      'Fecha de actualización y contacto para consultas',
    ],
    disclaimer:
      'No afirmamos que todos los cafés son orgánicos, regenerativos, certificados o libres de deforestación sin evidencia vigente. No prometemos impactos sociales o ambientales sin datos verificables.',
  },
  about: {
    label: 'Nosotros',
    title: 'Un proyecto de café',
    titleEm: 'guiado por las relaciones.',
    intro:
      'Brothers Coffee está construyendo una red que conecta productores de café de especialidad, aliados de origen y compradores internacionales. Nos enfocamos en presentar los lotes con claridad, coordinar conversaciones relevantes y construir relaciones comerciales basadas en transparencia y cumplimiento.',
    experience:
      'Nuestro CEO aporta diez años de experiencia en exportación de café de especialidad, desarrollada a través de otra empresa. Ese aprendizaje orienta nuestra manera de abordar la calidad, la coordinación y las relaciones con compradores en Brothers Coffee.',
    cta: 'Conózcanos',
  },
  producers: {
    label: 'Para productores',
    title: '¿Produce café',
    titleEm: 'de especialidad?',
    intro:
      'Nos interesa conocer productores y lotes con información clara sobre origen, variedad, proceso, cosecha y disponibilidad. Comparta sus datos para conocer su café y conversar sobre si puede encajar con los requisitos de compradores. Presentar un lote no garantiza una compra; procuramos comunicar con claridad los siguientes pasos.',
    howItWorks: 'Cómo funciona',
    steps: [
      'Comparta la información básica del productor y del lote.',
      'Revisamos los datos disponibles y solicitamos aclaraciones si hacen falta.',
      'Si existe una oportunidad relevante, conversamos sobre evaluación, muestras y requisitos.',
      'Antes de avanzar, aclaramos condiciones, responsabilidades y próximos pasos.',
    ],
    whatToSend: 'Qué información enviar',
    fields: [
      'Nombre y comunidad/región',
      'Teléfono o WhatsApp y correo (si dispone)',
      'Variedad y proceso',
      'Año de cosecha y volumen estimado',
      'Información de calidad disponible',
      'Fotos del lote o del proceso (opcional)',
    ],
    cta: 'Presentar un lote',
  },
} satisfies Messages

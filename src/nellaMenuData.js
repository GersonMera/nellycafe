/**
 * Fuente de verdad modular de Nella Café — COFFEE - BAR (Pucallpa)
 * Diseñado para actualizarse fácilmente en cuanto el negocio entregue la carta con precios oficiales.
 * REGLA ESTRICTA: Cero precios inventados. Cero mención a traducciones erróneas ("rape").
 */

export const PRICE_BADGE_PRIMARY = '[PRECIO Y DISPONIBILIDAD EN LOCAL / CARTA POR CONFIRMAR]';
export const PRICE_BADGE_CARD = '[PRECIO POR CONFIRMAR EN CARTA OFICIAL]';

export const NELLA_BRAND_INFO = {
  commercialName: 'Nella Café',
  descriptor: 'COFFEE - BAR',
  institutionalPhrase:
    'Somos el espacio perfecto para cualquier momento del día. Te esperamos en el corazón de la ciudad, frente a la plaza de Pucallpa',
  essence:
    'Un refugio céntrico, espacioso, con murales botánicos, madera cálida, detalles en ratán, aire acondicionado y Wi-Fi, ideal para desayunar, almorzar, trabajar en remoto o compartir entre amigos y familia.',
  corporate: {
    legalName: 'CAFETERÍA DE LA AMAZONÍA E.I.R.L.',
    ruc: '20610563679',
    validationTag: '[VALIDAR EN SUNAT/INDECOPI]',
    footerNotice: 'CAFETERÍA DE LA AMAZONÍA E.I.R.L. - RUC 20610563679 [DATO REGISTRAL POR VALIDAR CON TITULAR]',
  },
  location: {
    fullAddress:
      'Jr. Tarapacá N.º 679, Cercado de Pucallpa (Callería, Coronel Portillo, Ucayali, Perú - CP 25001)',
    displayAddress: 'Jr. Tarapacá N.º 679, Cercado de Pucallpa (Frente a la Plaza de Armas)',
    street: 'Jr. Tarapacá N.º 679',
    landmark: 'Frente a la Plaza de Armas de Pucallpa',
    cityRegion: 'Cercado de Pucallpa, Coronel Portillo, Ucayali - CP 25001',
    coordinates: {
      lat: -8.38283,
      lng: -74.53169,
      display: '-8.38283, -74.53169',
    },
    googleMapsUrl:
      'https://www.google.com/maps/place/NELLA+CAF%C3%89/@-8.3827566,-74.5313896,19.25z/data=!4m6!3m5!1s0x91a3bddf999bd391:0x3a18b689cc4648aa!8m2!3d-8.3828649!4d-74.5316801!16s%2Fg%2F11khf95q3w?entry=ttu',
    wazeUrl:
      'https://www.waze.com/live-map/directions/pe/ucayali/pucallpa/nella-cafe?to=place.ChIJkdObmd-905ERqkhGzIm2GDo',
  },
  schedule: {
    fullText: 'Lunes a Domingo: 08:00 a. m. a 10:00 p. m.',
    panelText: 'Lun - Dom: 08:00 a. m. a 10:00 p. m.',
    openingTime: '08:00 a. m.',
    closingTime: '10:00 p. m.',
    closingNote: 'Atención continua de 08:00 a. m. a 10:00 p. m.',
  },
  contact: {
    email: 'nellacafe23@gmail.com',
    conflictBadge: 'LÍNEA OFICIAL DE ATENCIÓN / WHATSAPP',
    panelWarning: 'LÍNEA VERIFICADA',
    phones: [
      {
        id: 'phone-official',
        display: '+51 993 311 759',
        raw: '+51993311759',
        sourceNote: 'Línea directa para atención y pedidos WhatsApp',
        validationBadge: 'LÍNEA OFICIAL',
      },
    ],
  },
  socials: {
    facebook: 'https://www.facebook.com/nellacafepucallpa/?locale=es_LA',
    instagram: 'https://www.instagram.com/nellacafepucallpa/?hl=es',
    instagramHandle: '@nellacafepucallpa',
  },
};

export const NELLA_HERO_ARCHES = [
  {
    id: 'hero-coldbrew',
    kicker: 'AUTOR AMAZÓNICO · REFRESCANTE',
    title: 'Cold Brew de Camu Camu',
    subtitle: 'Extracción en frío de café selecto fusionada con el cítrico vibrante del camu camu amazónico y hielo.',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'coldbrew',
    priceNotice: PRICE_BADGE_PRIMARY,
  },
  {
    id: 'hero-desayuno',
    kicker: 'DESDE LAS 08:00 A. M. · TRADICIÓN',
    title: 'Desayuno Amazónico',
    subtitle: 'El despertar emblema frente a la Plaza de Armas de Pucallpa acompañado de café recién pasado.',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'breakfast',
    priceNotice: PRICE_BADGE_PRIMARY,
  },
  {
    id: 'hero-cheesecake',
    kicker: 'VITRINA DULCE · FAVORITO LOCAL',
    title: 'Cheesecake de Saúco',
    subtitle: 'Textura cremosa coronada con reducción artesanal de frutos de saúco y notas silvestres.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'cheesecake',
    priceNotice: PRICE_BADGE_PRIMARY,
  },
];

export const NELLA_MOMENTS = [
  {
    id: 'manana',
    time: '08:00 AM',
    label: '08:00 AM · Mañana Amazónica',
    shortTitle: 'Mañana Amazónica',
    tagline: 'Luz matinal frente a la Plaza de Armas, aroma a grano recién molido y energía ucayalina.',
    description:
      'Empieza el día en nuestro salón climatizado viendo despertar el centro de Pucallpa. Desde un Desayuno Amazónico contundente o el brunch "Wake up!" hasta un café pasado tradicional o doble espresso antes de iniciar tu jornada.',
    atmosphereTag: 'Mañanas luminosas · Aire acondicionado · Café de especialidad',
    surfaceTone: 'day',
    heroImage:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      {
        name: 'Desayuno Amazónico',
        category: 'Desayunos & Brunch',
        note: 'Especialidad matutina con identidad regional ucayalina.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: '"Wake up!" Brunch',
        category: 'Desayunos & Brunch',
        note: 'Propuesta completa de mañana para empezar con energía.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Café Pasado & Espresso',
        category: 'Café & Calientes',
        note: 'Extracción limpia e intensa para acompañar la mañana.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Café Latte & Cortado',
        category: 'Café & Calientes',
        note: 'Leche texturizada al vapor con arte latte en taza.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
    ],
  },
  {
    id: 'almuerzo',
    time: '01:00 PM',
    label: '01:00 PM · Almuerzo en el Centro',
    shortTitle: 'Almuerzo en el Centro',
    tagline: 'Pausa gastronómica al mediodía en pleno Jr. Tarapacá, lejos del calor exterior.',
    description:
      'Cuando el sol de Pucallpa sube al máximo, nuestro oasis botánico te recibe con platos salteados al wok al instante, pastas cremadas y refrescos de frutas amazónicas en un ambiente fresco y relajado.',
    atmosphereTag: 'Fresco al mediodía · Cocina al wok · Ideal para reuniones',
    surfaceTone: 'day',
    heroImage:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      {
        name: 'Fettuccine de Lomo Saltado',
        category: 'Platos Fuertes & Pastas',
        note: 'Fusión de pasta al dente con lomo fino salteado al wok.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Lomo Saltado Clásico',
        category: 'Platos Fuertes & Pastas',
        note: 'Trozos jugosos al fuego alto con cebolla, tomate y papas.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Tallarín Saltado',
        category: 'Platos Fuertes & Pastas',
        note: 'Salteado criollo de sabor ahumado preparado al momento.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Soda / Refresco de Camu Camu',
        category: 'Bebidas Frías & Autor Amazónico',
        note: 'El contrapunto cítrico perfecto para el mediodía pucallpino.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
    ],
  },
  {
    id: 'tarde',
    time: '05:00 PM',
    label: '05:00 PM · Tarde de Cold Brew & Postres',
    shortTitle: 'Tarde de Cold Brew & Postres',
    tagline: 'Café frío macerado con frutas tropicales, repostería de vitrina y tardes de laptop o tertulia.',
    description:
      'La hora dorada frente a la Plaza: el momento predilecto para probar nuestros Cold Brew de autor (Camu Camu, Mango u Orange) acompañados de una porción de Cheesecake de Camu Camu, Saúco o un Tiramisú clásico.',
    atmosphereTag: 'Tardes de autor · Trabajo remoto · Repostería artesanal',
    surfaceTone: 'sunset',
    heroImage:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      {
        name: 'Cold Brew de Camu Camu',
        category: 'Bebidas Frías & Autor Amazónico',
        note: 'Insignia de la casa: café macerado en frío y camu camu.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Cold Brew de Mango & Orange Cold Brew',
        category: 'Bebidas Frías & Autor Amazónico',
        note: 'Variaciones frutales y cítricas servidas bien heladas.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Cheesecake de Camu Camu & Cheesecake de Saúco',
        category: 'Postres & Panadería',
        note: 'Dúo estrella de nuestra vitrina dulce con frutos selectos.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Tiramisú & Canelés',
        category: 'Postres & Panadería',
        note: 'Clásicos de pastelería para acompañar tu café de la tarde.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
    ],
  },
  {
    id: 'noche',
    time: '08:30 PM',
    label: '08:30 PM · Noche de Coffee-Bar',
    shortTitle: 'Noche de Coffee-Bar',
    tagline: 'La brisa nocturna de la Plaza iluminada, sándwiches calientes, piqueos y conversaciones largas.',
    description:
      'Por la noche, Nella Café se transforma en el punto de encuentro frente a la Plaza de Armas. Comparte un Sándwich de saltado de pollo, un Club Sándwich, Alitas BBQ o tequeños entre amigos y familia.',
    atmosphereTag: 'Atmósfera Coffee-Bar · Frente a la Plaza iluminada · Para compartir',
    surfaceTone: 'night',
    heroImage:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85',
    highlights: [
      {
        name: 'Sándwich de Saltado de Pollo',
        category: 'Sándwiches & Salados',
        note: 'Pan crujiente relleno de jugoso saltado de pollo al wok.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Club Sándwich',
        category: 'Sándwiches & Salados',
        note: 'Clásico de varios pisos ideal para cenas o compartir en mesa.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Alitas BBQ & Tequeños',
        category: 'Platos Fuertes & Pastas',
        note: 'Piqueos calientes para disfrutar la noche de Coffee-Bar.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
      {
        name: 'Frappés & Bebidas de Noche',
        category: 'Bebidas Frías & Autor Amazónico',
        note: 'Bebidas refrescantes y cremosas con vista al corazón de Pucallpa.',
        priceStatus: PRICE_BADGE_PRIMARY,
      },
    ],
  },
];

export const NELLA_CATEGORIES = [
  {
    id: 'all',
    name: 'Toda la Carta',
    shortName: 'Todas',
    description: 'Repertorio completo de especialidades mencionadas en fuentes públicas.',
  },
  {
    id: 'bebidas-frias',
    name: 'Bebidas Frías & Autor Amazónico',
    shortName: 'Bebidas Frías & Autor',
    description: 'Cold brews macerados con frutas amazónicas, sodas cítricas, frappés y jugos naturales.',
  },
  {
    id: 'cafe-calientes',
    name: 'Café & Calientes',
    shortName: 'Café & Calientes',
    description: 'Café pasado tradicional, espressos, lattes texturizados y chocolate caliente.',
  },
  {
    id: 'desayunos-brunch',
    name: 'Desayunos & Brunch',
    shortName: 'Desayunos & Brunch',
    description: 'Desayuno amazónico, "Wake up!" y opciones matutinas desde las 08:00 a. m.',
  },
  {
    id: 'sandwiches-salados',
    name: 'Sándwiches & Salados',
    shortName: 'Sándwiches & Salados',
    description: 'Sándwich de saltado de pollo, Club sándwich, empanadas y tequeños.',
  },
  {
    id: 'platos-pastas',
    name: 'Platos Fuertes & Pastas',
    shortName: 'Platos & Pastas',
    description: 'Lomo saltado, Fettuccine de lomo saltado, tallarines, alitas BBQ y hamburguesa.',
  },
  {
    id: 'postres-panaderia',
    name: 'Postres & Panadería',
    shortName: 'Postres & Panadería',
    description: 'Cheesecakes de saúco y camu camu, tiramisú, tres leches, rollo de canela y canelés.',
  },
];

export const NELLA_MENU_ITEMS = [
  // 1. Bebidas Frías & Autor Amazónico
  {
    id: 'cold-brew-camu-camu',
    name: 'Cold Brew de Camu Camu',
    categoryId: 'bebidas-frias',
    categoryName: 'Bebidas Frías & Autor Amazónico',
    momentId: 'tarde',
    featured: true,
    signatureTag: 'Insignia Amazónica',
    description:
      'Café extraído en frío durante horas combinado con el acento cítrico y antioxidante del camu camu de la selva.',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coldbrew',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'cold-brew-mango',
    name: 'Cold Brew de Mango',
    categoryId: 'bebidas-frias',
    categoryName: 'Bebidas Frías & Autor Amazónico',
    momentId: 'tarde',
    featured: true,
    signatureTag: 'Autor Tropical',
    description:
      'Equilibrio aromático entre notas dulces de mango maduro y la suavidad achocolatada de nuestro cold brew.',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coldbrew',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'orange-cold-brew',
    name: 'Orange Cold Brew',
    categoryId: 'bebidas-frias',
    categoryName: 'Bebidas Frías & Autor Amazónico',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Cítrico & Hielo',
    description:
      'Infusión fría de café sobre jugo fresco de naranja y rodaja cítrica para refrescar la tarde en Pucallpa.',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coldbrew',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'soda-refresco-camu-camu',
    name: 'Soda / Refresco de Camu Camu',
    categoryId: 'bebidas-frias',
    categoryName: 'Bebidas Frías & Autor Amazónico',
    momentId: 'almuerzo',
    featured: false,
    signatureTag: 'Fruta Ucayalina',
    description:
      'Bebida fría de pulpa natural de camu camu, vibrante y helada, ideal para acompañar el almuerzo o la tarde.',
    image:
      'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'frappe',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'limonada-casa',
    name: 'Limonada Refrescante',
    categoryId: 'bebidas-frias',
    categoryName: 'Bebidas Frías & Autor Amazónico',
    momentId: 'almuerzo',
    featured: false,
    signatureTag: 'Clásico Frío',
    description: 'Preparada al momento con limones frescos y abundante hielo.',
    image:
      'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coldbrew',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'frappes-y-jugos',
    name: 'Frappés y Jugos de Estación',
    categoryId: 'bebidas-frias',
    categoryName: 'Bebidas Frías & Autor Amazónico',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Cremosos & Frutales',
    description:
      'Variedad de frappés helados y jugos de frutas naturales para disfrutar en salón o junto a la ventana.',
    image:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'frappe',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },

  // 2. Café & Calientes
  {
    id: 'cafe-pasado',
    name: 'Café Pasado',
    categoryId: 'cafe-calientes',
    categoryName: 'Café & Calientes',
    momentId: 'manana',
    featured: true,
    signatureTag: 'Ritual de Mañana',
    description:
      'Esencia tradicional de café filtrado gota a gota, limpio, aromático y reconfortante.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coffee',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'espresso-doble',
    name: 'Espresso / Doble Espresso',
    categoryId: 'cafe-calientes',
    categoryName: 'Café & Calientes',
    momentId: 'manana',
    featured: false,
    signatureTag: 'Intenso & Puro',
    description:
      'Extracción concentrada con crema avellanada y cuerpo persistente en versión simple o doble.',
    image:
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coffee',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    categoryId: 'cafe-calientes',
    categoryName: 'Café & Calientes',
    momentId: 'manana',
    featured: false,
    signatureTag: 'Latte Art',
    description:
      'Base de espresso equilibrada con leche sedosa vaporizada al momento.',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coffee',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'cafe-cortado',
    name: 'Café Cortado',
    categoryId: 'cafe-calientes',
    categoryName: 'Café & Calientes',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Balance Exacto',
    description:
      'Proporción intensa de café espresso suavizada con un toque preciso de leche caliente.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coffee',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'chocolate-caliente',
    name: 'Chocolate Caliente',
    categoryId: 'cafe-calientes',
    categoryName: 'Café & Calientes',
    momentId: 'noche',
    featured: false,
    signatureTag: 'Cacao Cálido',
    description:
      'Taza humeante y cremosa de chocolate para acompañar la panadería y postres de la casa.',
    image:
      'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'coffee',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },

  // 3. Desayunos & Brunch
  {
    id: 'desayuno-amazonico',
    name: 'Desayuno Amazónico',
    categoryId: 'desayunos-brunch',
    categoryName: 'Desayunos & Brunch',
    momentId: 'manana',
    featured: true,
    signatureTag: 'Emblema de Pucallpa',
    description:
      'Propuesta matutina inspirada en los sabores tradicionales de la Amazonía peruana, ideal para empezar la mañana frente a la Plaza.',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'breakfast',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'wake-up-desayuno',
    name: '"Wake up!"',
    categoryId: 'desayunos-brunch',
    categoryName: 'Desayunos & Brunch',
    momentId: 'manana',
    featured: true,
    signatureTag: 'Favorito Matinal',
    description:
      'Combinación energética de desayuno mencionada por visitantes como una de las paradas obligadas desde las 08:00 a. m.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'breakfast',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'opciones-de-brunch',
    name: 'Opciones de Brunch en Salón',
    categoryId: 'desayunos-brunch',
    categoryName: 'Desayunos & Brunch',
    momentId: 'manana',
    featured: false,
    signatureTag: 'Mañana Tardía',
    description:
      'Alternativas versátiles de media mañana para combinar con café caliente, jugos o cold brew.',
    image:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'croissant',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },

  // 4. Sándwiches & Salados
  {
    id: 'sandwich-saltado-pollo',
    name: 'Sándwich de Saltado de Pollo',
    categoryId: 'sandwiches-salados',
    categoryName: 'Sándwiches & Salados',
    momentId: 'noche',
    featured: true,
    signatureTag: 'Sabor al Wok',
    description:
      'Sándwich caliente relleno de jugoso saltado de pollo con cebolla y tomate al punto, uno de los más comentados del local.',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'club-sandwich',
    name: 'Club Sándwich',
    categoryId: 'sandwiches-salados',
    categoryName: 'Sándwiches & Salados',
    momentId: 'noche',
    featured: true,
    signatureTag: 'Clásico Compartible',
    description:
      'Capas generosas en pan tostado acompañado de guarnición crujiente, perfecto para la tarde o noche de Coffee-Bar.',
    image:
      'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'empanada-de-pollo',
    name: 'Empanada de Pollo',
    categoryId: 'sandwiches-salados',
    categoryName: 'Sándwiches & Salados',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Horneado Salado',
    description:
      'Masa dorada con relleno tradicional de pollo sazonado, ideal para una pausa rápida con café.',
    image: '/assets/empanada-de-pollo.jpg',
    svgMotif: 'croissant',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'tequenos',
    name: 'Tequeños',
    categoryId: 'sandwiches-salados',
    categoryName: 'Sándwiches & Salados',
    momentId: 'noche',
    featured: false,
    signatureTag: 'Para Picar',
    description:
      'Porción de tequeños dorados y crujientes para compartir en mesa entre amigos.',
    image:
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },

  // 5. Platos Fuertes & Pastas
  {
    id: 'fettuccine-lomo-saltado',
    name: 'Fettuccine de Lomo Saltado',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'almuerzo',
    featured: true,
    signatureTag: 'Plato Estrella',
    description:
      'Encuentro entre pasta fettuccine y el tradicional lomo saltado flameado al wok.',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'pasta',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'lomo-saltado',
    name: 'Lomo Saltado',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'almuerzo',
    featured: true,
    signatureTag: 'Clásico Peruano',
    description:
      'Lomo salteado a fuego vivo con cebolla morada, tomate, toque de sillao y guarnición clásica.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'pasta',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'tallarin-saltado',
    name: 'Tallarín Saltado',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'almuerzo',
    featured: false,
    signatureTag: 'Al Wok',
    description:
      'Tallarines salteados al momento con vegetales crujientes y salsa oriental criolla.',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'pasta',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'pollo-crocante',
    name: 'Pollo Crocante',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'almuerzo',
    featured: false,
    signatureTag: 'Crujiente',
    description:
      'Piezas de pollo empanizadas al punto con textura dorada por fuera y jugosa por dentro.',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'alitas-bbq',
    name: 'Alitas BBQ',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'noche',
    featured: false,
    signatureTag: 'Noche de Bar',
    description:
      'Alitas bañadas en salsa barbacoa caramelizada, ideales para compartir en las noches frente a la Plaza.',
    image:
      'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'salchipapa',
    name: 'Salchipapa',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'noche',
    featured: false,
    signatureTag: 'Clásico Urbano',
    description:
      'Papas doradas acompañadas de salchichas seleccionadas y salsas de la casa.',
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'hamburguesa-casa',
    name: 'Hamburguesa',
    categoryId: 'platos-pastas',
    categoryName: 'Platos Fuertes & Pastas',
    momentId: 'noche',
    featured: false,
    signatureTag: 'Coffee-Bar',
    description:
      'Hamburguesa servida en pan suave con ingredientes frescos para una cena contundente.',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'sandwich',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },

  // 6. Postres & Panadería
  {
    id: 'cheesecake-sauco',
    name: 'Cheesecake de Saúco',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'tarde',
    featured: true,
    signatureTag: 'Joya de Vitrina',
    description:
      'Base crocante de galleta, relleno suave de queso crema y cobertura brillante de frutos de saúco.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'cheesecake',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'cheesecake-camu-camu',
    name: 'Cheesecake de Camu Camu',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'tarde',
    featured: true,
    signatureTag: 'Postre Amazónico',
    description:
      'El contraste perfecto entre la cremosidad del cheesecake y el perfil cítrico inconfundible del camu camu.',
    image:
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'cheesecake',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'tiramisu',
    name: 'Tiramisú',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Con Café',
    description:
      'Capas suaves embebidas en café espresso y cacao espolvoreado al momento.',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'cheesecake',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'tres-leches',
    name: 'Tres Leches',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Clásico Húmedo',
    description:
      'Bizcocho esponjoso bañado en mezcla tradicional de tres leches y coronado con crema suave.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'cheesecake',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'rollo-de-canela',
    name: 'Rollo de Canela',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'manana',
    featured: false,
    signatureTag: 'Panadería',
    description:
      'Masa tierna en espiral perfumada con canela y glaseado dulce, ideal junto a un café latte.',
    image:
      'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'croissant',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'pastel-de-chocolate',
    name: 'Pastel de Chocolate',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'noche',
    featured: false,
    signatureTag: 'Intenso Cacao',
    description:
      'Porción húmeda de pastel con cobertura intensa de chocolate para los amantes del cacao.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'cheesecake',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
  {
    id: 'caneles',
    name: 'Canelés',
    categoryId: 'postres-panaderia',
    categoryName: 'Postres & Panadería',
    momentId: 'tarde',
    featured: false,
    signatureTag: 'Bocado Francés',
    description:
      'Pequeños bocados de repostería con corteza caramelizada y centro tierno avainillado.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80',
    svgMotif: 'croissant',
    priceStatus: PRICE_BADGE_PRIMARY,
    cardBadge: PRICE_BADGE_CARD,
  },
];

export const NELLA_EXPERIENCE_ATTRIBUTES = [
  {
    id: 'mural-botanico',
    title: 'Mural Botánico, Madera & Ratán',
    status: 'CONFIRMADO EN LOCAL',
    confirmed: true,
    description:
      'Arquitectura interior cálida con murales de vegetación amazónica, mobiliario en madera natural y sillas tejidas en ratán frente al corazón de Pucallpa.',
  },
  {
    id: 'aire-acondicionado',
    title: 'Salón Climatizado (Aire Acondicionado)',
    status: 'CONFIRMADO EN LOCAL',
    confirmed: true,
    description:
      'Refugio fresco y confortable para escapar del calor tropical de Ucayali en cualquier momento del día.',
  },
  {
    id: 'trabajo-social',
    title: 'Trabajo Remoto, Amigos & Familia',
    status: 'ESPACIO MULTIUSO',
    confirmed: true,
    description:
      'Mesas amplias y atmósfera acogedora tanto para sesiones de laptop con un cold brew como para almuerzos y noches de tertulia.',
  },
  {
    id: 'servicios-validar',
    title: 'Wi-Fi, Pet Friendly, Música en Vivo & Reservas',
    status: '[SERVICIOS Y CONDICIONES POR CONFIRMAR EN LOCAL]',
    confirmed: false,
    description:
      'Ícono de Wi-Fi presente en la identidad visual; políticas de Pet Friendly, agenda de música en vivo y reservas de mesa sujetas a confirmación directa.',
  },
];

export const NELLA_POSTCARDS = [
  {
    id: 'postcard-1',
    title: 'El Salón Botánico',
    caption: 'Murales tropicales, ratán cálido y luz natural frente a la Plaza de Armas.',
    tag: 'INTERIORISMO · JR. TARAPACÁ 679',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'coffee',
  },
  {
    id: 'postcard-2',
    title: 'Alquimia de Cold Brew',
    caption: 'Camu camu, mango y naranja macerados con café frío para el clima de Pucallpa.',
    tag: 'BARRA DE AUTOR · ESPECIALIDADES',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'coldbrew',
  },
  {
    id: 'postcard-3',
    title: 'Vitrina de Saúco & Camu Camu',
    caption: 'Cheesecakes artesanales, tiramisú y canelés recién servidos cada tarde.',
    tag: 'REPOSTERÍA · DULCE AMAZÓNICO',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'cheesecake',
  },
  {
    id: 'postcard-4',
    title: 'Noches de Coffee-Bar',
    caption: 'Sándwich de saltado de pollo, club sándwich y alitas bajo la brisa nocturna del centro.',
    tag: 'DESDE LAS 08:00 A. M. HASTA LA NOCHE',
    image:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85',
    svgMotif: 'sandwich',
  },
];

/**
 * Pure function to normalize accents for instant mobile search
 */
export function normalizeSearchText(text) {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Pure filter function for the Menu Explorer
 */
export function filterMenuItems(items, options = {}) {
  const { categoryId = 'all', searchQuery = '', momentId = 'all' } = options;
  const normalizedQuery = normalizeSearchText(searchQuery);

  return items.filter((item) => {
    const matchesCategory = categoryId === 'all' || item.categoryId === categoryId;
    const matchesMoment = momentId === 'all' || item.momentId === momentId;

    if (!matchesCategory || !matchesMoment) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = normalizeSearchText(
      `${item.name} ${item.categoryName} ${item.description} ${item.signatureTag}`
    );
    return haystack.includes(normalizedQuery);
  });
}

/**
 * Pure helper to retrieve a moment of the day by id (falls back to 'manana')
 */
export function getMomentById(momentId) {
  return NELLA_MOMENTS.find((m) => m.id === momentId) || NELLA_MOMENTS[0];
}

export const siteConfig = {
  name: 'Finca Torre Bosch',
  planner: 'Enrique y María',
  domain: 'www.torrebosch.es',
  email: 'reservas@torrebosch.es',
  whatsapp: '34665796928',
  instagram: '@fincatorrebosch',
  locations: ['Playa de San Juan', 'Alicante', 'Costa Blanca'],
  tagline: 'Donde el siglo XVI dice sí',
  bio: 'Finca Torre Bosch es una finca señorial de 22.000 m² en la Playa de San Juan, junto al Campo de Golf de Alicante. En su centro se alza una torre vigía del siglo XVI, catalogada como Bien Protegido en la categoría de Monumento, rodeada de jardines, fuentes y pinadas centenarias. Enrique y María llevan más de quince años organizando bodas y celebraciones aquí, con una idea muy clara: la finca es exclusivamente vuestra ese día, y cada detalle se diseña para vosotros.',
  bioShort:
    'Una torre vigía del siglo XVI, 22.000 m² de jardines y pinos centenarios a cinco minutos del mar. Un solo evento por día, para que la finca sea solo vuestra.',
  phones: [
    { name: 'Enrique', number: '665 796 928', tel: '+34665796928' },
    { name: 'María', number: '665 796 931', tel: '+34665796931' },
  ],
  address: {
    street: 'Avda. Conrado Albadalejo, 3',
    postalCode: '03540',
    city: 'Playa de San Juan, Alicante',
    region: 'Comunidad Valenciana',
    country: 'ES',
    lat: 38.3727,
    lng: -0.4337,
  },
  quote: 'Una boda no se organiza, se cuida. Como cuidamos cada pino de esta finca.',
}

export const stats = [
  { value: 'XVI', label: 'siglo de la torre vigía' },
  { value: '22.000', label: 'm² de jardines y pinada' },
  { value: '400', label: 'm² de carpa climatizada' },
  { value: '15+', label: 'años celebrando bodas' },
]

export const services: Array<{
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  includes: string[]
}> = [
  {
    title: 'Bodas',
    slug: 'bodas',
    description:
      'Ceremonia, cóctel, banquete y barra libre sin mover a nadie de la finca. Todo en exclusiva, todo a vuestra medida.',
    longDescription:
      'Vuestra boda ocupa la finca entera. Os recibimos para la ceremonia entre pinos, pasamos al cóctel junto a la torre y servimos el banquete bajo la carpa, en el salón acristalado o al aire libre, según la estación y el número de invitados. La barra libre termina en la zona chill out, con camas balinesas y luz cálida. Menús personalizados con degustación previa, decoración floral, iluminación especial y coordinación de proveedores. Os asesoramos de principio a fin para que el único trabajo del día sea disfrutarlo.',
    image: '/photos/novios-beso-guirnaldas.webp',
    includes: [
      'Exclusividad de la finca para un único evento',
      'Menú personalizado con degustación',
      'Decoración floral e iluminación especial',
      'Parking privado vigilado y personal de seguridad',
    ],
  },
  {
    title: 'Ceremonias civiles',
    slug: 'ceremonias-civiles',
    description:
      'Un pasillo entre pinos centenarios, un arco de flores y la torre como testigo. Os casáis donde lo celebráis.',
    longDescription:
      'En los jardines de Torre Bosch hay rincones pensados para decir sí: el pasillo de faroles bajo la pinada, la pérgola vestida de flores o la explanada frente a la torre. Diseñamos la ceremonia con vosotros, desde la música de entrada hasta la disposición de las sillas, y coordinamos al oficiante. Vuestros invitados no tienen que desplazarse: al terminar, el cóctel empieza a pocos pasos.',
    image: '/photos/pergola-flores-ceremonia.webp',
    includes: [
      'Espacios de ceremonia en jardín o frente a la torre',
      'Montaje de sillas, arco floral y megafonía',
      'Coordinación del oficiante y del protocolo',
      'Transición directa al cóctel sin desplazamientos',
    ],
  },
  {
    title: 'Comuniones y familia',
    slug: 'comuniones',
    description:
      'Comuniones, bautizos y aniversarios con jardín seguro para los peques y menús pensados para toda la familia.',
    longDescription:
      'Los pequeños son lo más importante, y lo organizamos todo para que ese día solo tengáis que disfrutar y compartir la alegría con ellos. Mesas a la sombra de sombrillas y pinos, menú infantil, zona de juegos vigilada y la opción de mesa dulce. También celebramos bautizos, aniversarios de boda y reuniones familiares con el mismo cuidado que ponemos en una boda.',
    image: '/photos/comunion-mesa-sombrillas.webp',
    includes: [
      'Menú adulto e infantil a elegir',
      'Mesas a la sombra en jardín',
      'Espacio seguro para los niños',
      'Mesa dulce y decoración temática opcional',
    ],
  },
  {
    title: 'Eventos de empresa',
    slug: 'eventos-empresa',
    description:
      'Congresos, cenas de gala, presentaciones y cumpleaños con el estilo de una finca protegida del XVI.',
    longDescription:
      'Ponemos a vuestra disposición todos los espacios de la finca para reuniones de empresa, cenas de incentivo, presentaciones de producto o celebraciones privadas. El salón acristalado de 450 m² funciona todo el año y la carpa admite grandes aforos con climatización y audio fijo. A diez minutos del centro de Alicante y a veinticinco del aeropuerto, con parking privado para todos los asistentes.',
    image: '/photos/salon-acristalado-montaje.webp',
    includes: [
      'Salón acristalado de 450 m² y carpa de 400 m²',
      'Audio, climatización y montaje a medida',
      'Catering de cóctel, cena de gala o coffee break',
      'Parking privado y fácil acceso desde el aeropuerto',
    ],
  },
]

export const spaces: Array<{
  name: string
  slug: string
  size: string
  capacity: string
  description: string
  image: string
  gallery: string[]
}> = [
  {
    name: 'La Torre',
    slug: 'la-torre',
    size: 'Siglo XVI',
    capacity: 'Sesiones de fotos y cóctel',
    description:
      'Torre vigía levantada para avistar piratas berberiscos en la costa. Hoy guarda dos salones, una biblioteca y una capilla, decorados con sutileza y en completa armonía.',
    image: '/photos/torre-noche-guirnaldas.webp',
    gallery: ['/photos/biblioteca-novia.webp', '/photos/capilla-interior.webp', '/photos/arcos-mesa-novios.webp'],
  },
  {
    name: 'Jardines y pinada',
    slug: 'jardines',
    size: '22.000 m²',
    capacity: 'Ceremonia, cóctel y banquete',
    description:
      'Pinadas centenarias, fuentes y estatuas repartidas por la finca. Espacios diferenciados para ceremonia civil, cóctel, banquete y barra libre.',
    image: '/photos/pinar-mesas-banquete.webp',
    gallery: ['/photos/pasillo-ceremonia-faroles.webp', '/photos/piscina-pinar-atardecer.webp', '/photos/jardin-banquete-torre.webp'],
  },
  {
    name: 'La Carpa',
    slug: 'carpa',
    size: '400 m²',
    capacity: 'Ampliable con una segunda carpa',
    description:
      'Totalmente equipada y decorada, integrada en los jardines. Aseos propios, climatización y sistema de audio fijo repartido por todo el espacio.',
    image: '/photos/carpa-lamparas-colgantes.webp',
    gallery: ['/photos/carpa-flores-rosas.webp', '/photos/carpa-entrada-floral.webp', '/photos/carpa-blanca-centros.webp'],
  },
  {
    name: 'Salón acristalado',
    slug: 'salon',
    size: '450 m²',
    capacity: 'Ideal para bodas de invierno',
    description:
      'Un salón interior acristalado, totalmente equipado y abierto a los jardines. Luz natural de día, calidez de lámparas de noche.',
    image: '/photos/salon-acristalado-mesas.webp',
    gallery: ['/photos/mesa-copas-detalle.webp', '/photos/salon-acristalado-montaje.webp', '/photos/salon-copas-velas.webp'],
  },
  {
    name: 'Zona chill out',
    slug: 'chill-out',
    size: 'Al aire libre',
    capacity: 'Cóctel y barra libre',
    description:
      'Sofás, bolas de led y camas balinesas para relajarse durante el cóctel o alargar la barra libre bajo las estrellas.',
    image: '/photos/camas-balinesas.webp',
    gallery: ['/photos/chillout-noche-patio.webp', '/photos/chillout-sofas-blancos.webp', '/photos/camas-balinesas-jardin.webp'],
  },
]

export const processSteps: Array<{
  number: number
  title: string
  description: string
}> = [
  {
    number: 1,
    title: 'Visita a la finca',
    description:
      'Paseamos juntos por la torre, los jardines, la carpa y el salón. Nos contáis cómo imagináis el día y os enseñamos dónde puede ocurrir cada momento.',
  },
  {
    number: 2,
    title: 'Propuesta a medida',
    description:
      'Os enviamos un presupuesto cerrado según fecha, invitados y espacios. Sin sorpresas: exclusividad, parking, seguridad y personal incluidos.',
  },
  {
    number: 3,
    title: 'Degustación y diseño',
    description:
      'Probáis el menú, elegís vinos y definimos juntos decoración, flores, iluminación y la distribución de mesas.',
  },
  {
    number: 4,
    title: 'Coordinación final',
    description:
      'Un mes antes cerramos horarios, protocolo y proveedores. Una única persona de contacto para cualquier cambio de última hora.',
  },
  {
    number: 5,
    title: 'El gran día',
    description:
      'La finca abre solo para vosotros. Nuestro equipo se ocupa de todo, desde la llegada de los invitados hasta el último baile.',
  },
]

export const testimonials: Array<{
  name: string
  date: string
  location: string
  text: string
}> = [
  {
    name: 'Lucía y Álvaro',
    date: 'Junio 2025',
    location: 'Ceremonia en la pinada · banquete en la carpa',
    text: 'Éramos 150 invitados y nadie tuvo que coger el coche en todo el día. Ceremonia bajo los pinos, cóctel junto a la torre y cena en la carpa. María estuvo pendiente hasta de las banderitas que Álvaro preparó por sorpresa para recibirnos.',
  },
  {
    name: 'Carmen y Rafa',
    date: 'Septiembre 2025',
    location: 'Boda al atardecer en los jardines',
    text: 'Visitamos seis fincas en Alicante y ninguna tenía la torre ni esa sensación de estar solos. La degustación fue larguísima porque Enrique nos dejó cambiar platos hasta que el menú fue exactamente el nuestro.',
  },
  {
    name: 'Nerea y Fabián',
    date: 'Octubre 2024',
    location: 'Fotos en la biblioteca de la torre',
    text: 'Las fotos en la biblioteca y en la capilla son nuestras favoritas del álbum. El equipo conoce cada rincón y a qué hora entra la mejor luz. La barra libre en las camas balinesas fue lo que más comentaron los invitados.',
  },
  {
    name: 'Familia Ortiz',
    date: 'Mayo 2025',
    location: 'Comunión de Daniel',
    text: 'Celebramos la comunión de Daniel con 80 personas y 25 niños. Mesas a la sombra, menú infantil que se comieron entero y los peques jugando en el jardín mientras nosotros comíamos tranquilos. Repetiremos.',
  },
  {
    name: 'Inés y Marc',
    date: 'Febrero 2026',
    location: 'Boda de invierno en el salón acristalado',
    text: 'Nos casamos en febrero y temíamos el frío. El salón acristalado estaba precioso, con luz natural durante la comida y velas por la noche. Parecía una boda de primavera mirando a los pinos.',
  },
  {
    name: 'Laura Sempere',
    date: 'Noviembre 2025',
    location: 'Cena de empresa · 220 asistentes',
    text: 'Organizamos la cena anual de la empresa en la carpa. Montaje, audio y catering impecables, y todos los asistentes aparcaron dentro de la finca. Varios clientes nos preguntaron dónde estaba este sitio.',
  },
]

export const photos: Array<{
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
}> = [
  { src: '/photos/banquete-pinar.webp', alt: 'Banquete con mantelería azul y sillas crossback bajo la pinada centenaria de la finca', featured: true, orientation: 'landscape' },
  { src: '/photos/tunel-luces-novios.webp', alt: 'Novios sentados bajo un túnel de luces cálidas entre los árboles del jardín de noche', featured: true, orientation: 'landscape' },
  { src: '/photos/torre-noche-guirnaldas.webp', alt: 'Torre vigía del siglo XVI iluminada de noche con guirnaldas de luces sobre las mesas', featured: true, orientation: 'landscape' },
  { src: '/photos/fachada-pinos-atardecer.webp', alt: 'Fachada de piedra de la finca entre pinos al atardecer con las mesas montadas', featured: true, orientation: 'landscape' },
  { src: '/photos/jardin-torre-banquete.webp', alt: 'Mesas de banquete en el jardín con la torre de piedra al fondo entre palmeras', featured: true, orientation: 'portrait' },
  { src: '/photos/novios-beso-guirnaldas.webp', alt: 'Pareja de novios abrazados bajo guirnaldas de bombillas durante la fiesta', featured: false, orientation: 'portrait' },
  { src: '/photos/ceremonia-arco-flores.webp', alt: 'Ceremonia civil ante un arco de flores y hiedra en los jardines', featured: false, orientation: 'landscape' },
  { src: '/photos/novios-sofa-biblioteca.webp', alt: 'Novios besándose en un sofá antiguo frente a la puerta de madera de la torre', featured: false, orientation: 'landscape' },
  { src: '/photos/espalda-vestido-encaje.webp', alt: 'Detalle de la espalda de encaje del vestido de novia mientras le abrochan los botones', featured: false, orientation: 'portrait' },
  { src: '/photos/carpa-lamparas-colgantes.webp', alt: 'Interior de la carpa con lámparas colgantes de ramas verdes sobre las mesas redondas', featured: false, orientation: 'landscape' },
  { src: '/photos/novio-llegada-ceremonia.webp', alt: 'El novio camina por el pasillo de flores hacia la ceremonia entre los invitados', featured: false, orientation: 'portrait' },
  { src: '/photos/mesa-copas-detalle.webp', alt: 'Detalle de mesa con copas de cristal, bajoplato de mimbre y vaso rosa', featured: false, orientation: 'landscape' },
  { src: '/photos/novios-abrazo-ramo.webp', alt: 'Novios abrazados con el ramo de rosas bajo una lluvia de pétalos', featured: false, orientation: 'portrait' },
  { src: '/photos/biblioteca-novia.webp', alt: 'Novia sentada en la biblioteca de la torre junto a un retrato antiguo y estanterías', featured: false, orientation: 'landscape' },
  { src: '/photos/pasillo-ceremonia-faroles.webp', alt: 'Pasillo de ceremonia con faroles y sillas blancas bajo los pinos', featured: false, orientation: 'portrait' },
  { src: '/photos/novia-preparativos.webp', alt: 'Novia riendo con una amiga durante los preparativos en la finca', featured: false, orientation: 'landscape' },
  { src: '/photos/torre-love-noche.webp', alt: 'Letras LOVE iluminadas frente a la torre de piedra al anochecer', featured: false, orientation: 'portrait' },
  { src: '/photos/seating-vintage.webp', alt: 'Seating plan vintage con marcos, maletas antiguas y flores bajo los árboles', featured: false, orientation: 'landscape' },
  { src: '/photos/novia-coche-clasico.webp', alt: 'La novia sonríe a su padre desde el coche clásico al llegar a la finca', featured: false, orientation: 'landscape' },
  { src: '/photos/mesa-imperial-torre.webp', alt: 'Mesa imperial con flores silvestres junto a la pared iluminada de la torre', featured: false, orientation: 'landscape' },
  { src: '/photos/invitados-jardin.webp', alt: 'Invitados celebrando con los novios entre los árboles florecidos del jardín', featured: false, orientation: 'landscape' },
  { src: '/photos/capilla-interior.webp', alt: 'Capilla interior de la torre con velas, crucifijo y cuadro religioso antiguo', featured: false, orientation: 'landscape' },
  { src: '/photos/novios-pinar-atardecer.webp', alt: 'Novios brindando en la pinada al atardecer con luz dorada', featured: false, orientation: 'portrait' },
  { src: '/photos/carpa-flores-rosas.webp', alt: 'Carpa decorada con centros de rosas y lámparas florales para el banquete', featured: false, orientation: 'landscape' },
  { src: '/photos/novia-amigas.webp', alt: 'La novia posa con sus amigas y el novio en la zona chill out', featured: false, orientation: 'landscape' },
  { src: '/photos/arcos-mesa-novios.webp', alt: 'Mesa de los novios bajo los arcos encalados del patio interior', featured: false, orientation: 'landscape' },
  { src: '/photos/pergola-flores-ceremonia.webp', alt: 'Pérgola cubierta de flores y hiedra preparada para una ceremonia civil', featured: false, orientation: 'landscape' },
  { src: '/photos/camas-balinesas.webp', alt: 'Camas balinesas con cortinas blancas entre plataneras en la zona chill out', featured: false, orientation: 'landscape' },
  { src: '/photos/piscina-pinar-atardecer.webp', alt: 'Pinada y piscina de la finca al atardecer con la luz filtrándose entre los troncos', featured: false, orientation: 'landscape' },
  { src: '/photos/salon-acristalado-mesas.webp', alt: 'Salón acristalado con lámparas de araña y mesas vestidas con flores blancas', featured: false, orientation: 'landscape' },
  { src: '/photos/ceremonia-civil-pinos.webp', alt: 'Ceremonia civil montada entre pinos con faroles y sillas plegables de madera', featured: false, orientation: 'landscape' },
  { src: '/photos/mesa-romero-bajoplato.webp', alt: 'Servilleta de lino con ramita de romero sobre bajoplato dorado', featured: false, orientation: 'landscape' },
  { src: '/photos/chillout-noche-patio.webp', alt: 'Patio de la torre de noche con puffs blancos y luz rosa para la barra libre', featured: false, orientation: 'landscape' },
  { src: '/photos/mesa-imperial-rosa.webp', alt: 'Mesa imperial con jaula decorativa rosa y cristalería para una celebración familiar', featured: false, orientation: 'portrait' },
  { src: '/photos/patio-torre-chillout.webp', alt: 'Patio frente a la torre con sombrillas blancas y mesas altas para el cóctel', featured: false, orientation: 'landscape' },
  { src: '/photos/comunion-mesa-sombrillas.webp', alt: 'Mesa larga de comunión bajo sombrillas blancas en el jardín', featured: false, orientation: 'landscape' },
]

export const faqs = [
  {
    q: '¿La finca es exclusiva para nuestra boda?',
    a: 'Sí. Celebramos un único evento por día, así que la finca, el parking y todos los espacios son solo para vosotros y vuestros invitados.',
  },
  {
    q: '¿Qué pasa si llueve?',
    a: 'La carpa de 400 m² y el salón acristalado de 450 m² están preparados para trasladar cualquier momento bajo techo sin perder el ambiente.',
  },
  {
    q: '¿Podemos traer nuestros propios proveedores?',
    a: 'Fotografía, música, flores o maquillaje, podéis traer a quien queráis. El catering es propio de la finca para garantizar el servicio.',
  },
  {
    q: '¿Cuántos invitados admite la finca?',
    a: 'Desde celebraciones íntimas hasta grandes bodas. La carpa se puede ampliar con una segunda de tamaño similar para aforos mayores.',
  },
]

export const coverage = [
  { place: 'Playa de San Juan', time: 'En la misma playa' },
  { place: 'Alicante centro', time: '10 minutos' },
  { place: 'Aeropuerto Alicante-Elche', time: '25 minutos' },
  { place: 'El Campello y Mutxamel', time: '10 minutos' },
  { place: 'Benidorm', time: '35 minutos' },
  { place: 'Elche y Murcia', time: '30 y 60 minutos' },
]

export const photoBySrc = (src: string) => photos.find((p) => p.src === src)

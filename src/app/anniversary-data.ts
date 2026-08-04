import { GalleryItem } from './components/gallery/gallery';
import { TimelineMilestone } from './components/timeline/timeline';

export const PARTNER_NAMES = 'Viri & Israel';

export const SINCE_DATE = new Date(2026, 5, 13);
export const SINCE_DATE_LABEL = '13 de junio de 2026';

export const LETTER_PARAGRAPHS: readonly string[] = [
  'Hoy se cumplen dos meses desde que decidimos ser novios, y quería escribirte estas palabras con el corazón en la mano.',
  'Antes que nada, gracias. Gracias por todo lo que has hecho por mí, por los momentos bonitos que hemos compartido y también por la paciencia que has tenido conmigo.',
  'Sé que estos meses no han sido fáciles. Reconozco que mis actitudes, mis errores y algunas decisiones te lastimaron. Me duele haberme dado cuenta tarde de muchas cosas y del daño que te causé. Lo lamento de verdad.',
  'No quiero escribir esto para convencerte de nada ni para decirte que todo ya está bien, porque sé que la confianza se reconstruye con tiempo y con hechos, no con palabras. Solo quiero que sepas que estoy trabajando en mí, no solo por nuestra relación, sino también para ser una mejor persona.',
  'Gracias por seguir aquí y por darme la oportunidad de demostrar con acciones que puedo hacerlo mejor. No doy por hecho tu paciencia ni el cariño que me has seguido dando, y lo valoro muchísimo.',
  'Quiero seguir construyendo esto contigo, paso a paso, respetando tu tiempo y demostrando cada día, con hechos, el hombre que quiero ser.',
  'Te amo mucho. Feliz aniversario de 2 meses. ❤️',
];

export const LETTER_SIGNATURE_LINE = 'Con todo mi cariño,';
export const LETTER_SIGNATURE_NAME = 'Israel';

export const TIMELINE_MILESTONES: readonly TimelineMilestone[] = [
  {
    date: '20 de noviembre de 2025',
    title: 'Nos conocimos',
    description: 'Un día cualquiera que terminó cambiándolo todo.',
  },
  {
    date: '26 de diciembre de 2025',
    title: 'Nuestra primera llamada',
    description: 'La primera vez que escuché tu voz al otro lado del teléfono.',
  },
  {
    date: '16 de enero de 2026',
    title: 'El primer "te quiero"',
    description: 'Dos palabras que cambiaron todo entre nosotros.',
    photos: [
      {
        src: '/images/primer-te-quiero.png',
        alt: 'Ramo de flores de colores, el regalo del primer "te quiero"',
      },
    ],
  },
  {
    date: '20 de enero de 2026',
    title: 'Nuestra primera videollamada',
    description: 'La primera vez que pudimos vernos, aunque fuera a través de una pantalla.',
  },
  {
    date: '1 de febrero de 2026',
    title: 'El cumpleaños de mi amorcito',
    description: 'Celebrando el día en que llegaste al mundo.',
  },
  {
    date: '14 de febrero de 2026',
    title: 'El día del amor y la amistad',
    description: 'Perezosa y desayuno juntos, como debe ser.',
    photos: [
      {
        src: '/images/dia-del-amor.jpg',
        alt: 'Regalo de San Valentín: globo rosa, oso de peluche y chocolates',
      },
      {
        src: '/images/desayuno-san-valentin.jpg',
        alt: 'Caja de desayuno de San Valentín con globos de corazón rojos, jugos, fruta y chocolates',
      },
    ],
  },
  {
    date: '16 de marzo de 2026',
    title: 'Regresamos a hablar',
    description: 'Decidimos darnos otra oportunidad de estar en la vida del otro.',
  },
  {
    date: '21 de marzo de 2026',
    title: 'Tus flores amarillas',
    description: 'Te di tus flores amarillas.',
    photos: [
      {
        src: '/images/flores-amarillas.png',
        alt: 'Ramo de rosas amarillas envuelto en papel blanco',
      },
    ],
  },
  {
    date: '29 de marzo de 2026',
    title: 'Aquí estaré esperándote',
    description: 'Me hiciste ese video: "Aquí estaré esperándote, con todo el corazón".',
    photos: [
      {
        src: '/images/aqui-estare-esperandote.png',
        alt: 'Captura del video con el espejo de un auto y el texto "Tu siempre serás el \'Aquí estaré esperándote con todo el corazón\' I.F.Q"',
      },
    ],
  },
  {
    date: '30 de abril de 2026',
    title: 'Tu regalito de Deleítate',
    description: 'Me diste un regalito de Deleítate.',
    photos: [
      {
        src: '/images/regalito-deleitate.png',
        alt: 'Caja de fresas cubiertas de chocolate y chocolates Ferrero Rocher de Deléitate, con una tarjeta escrita a mano',
      },
    ],
  },
  {
    date: '13 de junio de 2026',
    title: 'Nos pusimos de acuerdo para vernos',
    description: 'El día que decidimos darnos la oportunidad de vernos en persona.',
    photos: [
      {
        src: '/images/nos-pusimos-de-acuerdo.png',
        alt: 'Captura de chat de WhatsApp con "Amorcito" hablando de que ya casi llega',
      },
    ],
  },
  {
    date: '13 de junio de 2026',
    title: 'Empezamos esta historia juntos',
    description: 'El día que decidimos que esto valía la pena intentarlo, en serio.',
    photos: [
      {
        src: '/images/dia-inolvidable.png',
        alt: 'Viri sonriendo con un ramo de rosas blancas y gerberas rosas',
      },
    ],
  },
  {
    date: '13-14 de junio de 2026',
    title: 'Salimos de fiesta',
    description: 'Nuestra primera salida de fiesta juntos.',
  },
  {
    date: '14 de junio de 2026',
    title: 'Fuimos al cine',
    description: 'Fuimos al cine y terminamos sin ver la película, jaja.',
    photos: [
      {
        src: '/images/fuimos-al-cine.jpeg',
        alt: 'Viri e Israel sentados juntos frente a un corazón gigante de luces rosas',
      },
    ],
  },
  {
    date: '15 de junio de 2026',
    title: 'Fuimos a Pueblita',
    description: 'Un buen día para conocernos más y andar de la mano por la ciudad. Te amo.',
    photos: [
      {
        src: '/images/fuimos-a-puebla.png',
        alt: 'Viri e Israel abrazados frente a una fuente en el centro histórico de Puebla',
      },
    ],
  },
  {
    date: '16 de junio de 2026',
    title: 'Desayuno y día con Janet',
    description: 'Desayunamos juntos y fuimos con Janet, pasando todo el día juntos. Eres la más hermosa.',
    photos: [
      {
        src: '/images/dia-con-janet.png',
        alt: 'Viri e Israel abrazados sentados en la cama',
      },
    ],
  },
  {
    date: '17 de junio de 2026',
    title: 'Cholula y la Estrella de Puebla',
    description: 'Un día muy divertido en Cholula y la Estrella de Puebla. Me dijiste que ese fue tu favorito.',
    photos: [
      {
        src: '/images/cholula-estrella-puebla.png',
        alt: 'Selfie de Viri e Israel junto a los juegos mecánicos iluminados de la Estrella de Puebla',
      },
    ],
  },
  {
    date: '18 de junio de 2026',
    title: 'Día del ceviche y México vs Corea',
    description: 'Comimos ceviche y vimos juntos el partido de México vs Corea.',
    photos: [
      {
        src: '/images/dia-del-ceviche.png',
        alt: 'Selfie de Israel de cerca frente a una cortina floreada',
      },
    ],
  },
  {
    date: '19 de junio de 2026',
    title: 'Día en la CDMX',
    description: 'Chapultepec, el zoológico y el Ángel de la Independencia. Un día mágico, con 24 horas de besos, jaja.',
    photos: [
      {
        src: '/images/dia-en-cdmx.jpeg',
        alt: 'Viri e Israel besándose bajo un pérgola de plantas en Chapultepec',
      },
    ],
  },
  {
    date: '20 de junio de 2026',
    title: 'Fanfest',
    description: 'Fuimos al Fanfest y anduvimos por el centro de la ciudad.',
  },
  {
    date: '20 de junio de 2026',
    title: 'Regresamos a la CDMX',
    description: 'Volvimos a la Ciudad de México juntos.',
    photos: [
      {
        src: '/images/regresamos-a-cdmx.png',
        alt: 'Viri e Israel dándose un beso acostados en la cama',
      },
    ],
  },
  {
    date: '21 de junio de 2026',
    title: 'De regreso a Playa',
    description: 'Me fuiste a dejar al aeropuerto para que regresara a Playa. Desde entonces te extraño muchísimo.',
    photos: [
      {
        src: '/images/de-regreso-a-playa.png',
        alt: 'Foto enmarcada de Israel y Viri abrazados con el texto "EQYTQAT, Isra y Viri, Te quiero..."',
      },
    ],
  },
  {
    date: '13 de julio de 2026',
    title: '1 mes de novios',
    description: 'Cumplimos nuestro primer mes de novios. Te amo.',
    photos: [
      {
        src: '/images/1-mes-de-novios.png',
        alt: 'Ramo de tulipanes rojos, rosas rosadas y flores blancas por el primer mes de novios',
      },
    ],
  },
  {
    date: 'Hoy',
    title: 'Seguimos eligiéndonos',
    description: 'Y pienso seguir haciéndolo cada día que venga.',
    photos: [
      {
        src: '/images/seguimos-eligiendonos.png',
        alt: 'Viri haciendo un corazón con las manos durante una videollamada con Israel',
      },
    ],
  },
];

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    caption: 'Nuestra primera foto',
    src: '/images/primera-foto.png',
    alt: 'Israel y Viri abrazados frente a una cortina blanca, su primera foto juntos',
    width: 490,
    height: 1024,
  },
  {
    caption: 'El primer viaje',
    src: '/images/primer-viaje.png',
    alt: 'Viri e Israel besándose sentados dentro de un corazón de luces rosas durante su primer viaje juntos',
    width: 1200,
    height: 1600,
  },
  {
    caption: 'Un momento mágico',
    src: '/images/momento-magico.png',
    alt: 'Viri e Israel besándose de cerca',
    width: 1200,
    height: 1600,
  },
  {
    caption: 'Día inolvidable',
    src: '/images/dia-inolvidable.png',
    alt: 'Viri sonriendo con un ramo de rosas blancas y gerberas rosas',
    width: 1200,
    height: 1600,
  },
  {
    caption: 'Tú y yo',
    src: '/images/tu-y-yo.png',
    alt: 'Viri e Israel en una selfie de noche en un parque de diversiones',
    width: 1599,
    height: 899,
  },
];

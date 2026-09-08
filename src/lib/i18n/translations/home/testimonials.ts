/* ── Testimonials Translations (EN / ES) ── */

const en = {
  ratingBadge: (rating: number | string, reviewCount: number | string) =>
    `${rating} Stars · ${reviewCount} Google Reviews`,
  heading: {
    part1: 'What Our',
    part2: 'Customers',
    part3: 'Say',
  },
  subheading:
    "Real reviews from Trenton drivers who trust Zambrano's for their vehicle's safety.",
  items: {
    michael: {
      name: 'Michael T.',
      text: 'Zambranos is the only place I trust with my work truck. They got my suspension fixed and new tires on the same day. Fast, honest, and reasonably priced.',
      date: '2 weeks ago',
    },
    sarah: {
      name: 'Sarah J.',
      text: 'I had a terrible shaking in my steering wheel. They diagnosed it as a bad tie rod and alignment issue. Fixed it quickly and the car drives like new!',
      date: '1 month ago',
    },
    david: {
      name: 'David R.',
      text: "Great experience getting new brakes and rotors. They explained exactly what was wrong, showed me the worn parts, and didn't try to upsell me.",
      date: '3 months ago',
    },
  },
  readAllReviews: 'Read All Reviews on Google',
};

const es: typeof en = {
  ratingBadge: (rating: number | string, reviewCount: number | string) =>
    `${rating} Estrellas · ${reviewCount} Reseñas de Google`,
  heading: {
    part1: 'Lo Que Dicen Nuestros',
    part2: 'Clientes',
    part3: '',
  },
  subheading:
    'Reseñas reales de conductores de Trenton que confían en Zambrano\'s para la seguridad de su vehículo.',
  items: {
    michael: {
      name: 'Michael T.',
      text: 'Zambranos es el único lugar en el que confío con mi camión de trabajo. Me arreglaron la suspensión y pusieron llantas nuevas el mismo día. Rápidos, honestos y a un precio justo.',
      date: 'Hace 2 semanas',
    },
    sarah: {
      name: 'Sarah J.',
      text: 'Tenía una vibración terrible en el volante. Diagnosticaron que era una rótula de dirección dañada y un problema de alineación. Lo arreglaron rápido y el carro maneja como nuevo.',
      date: 'Hace 1 mes',
    },
    david: {
      name: 'David R.',
      text: 'Excelente experiencia al cambiar frenos y discos nuevos. Me explicaron exactamente cuál era el problema, me mostraron las piezas desgastadas y no trataron de venderme más de lo necesario.',
      date: 'Hace 3 meses',
    },
  },
  readAllReviews: 'Ver Todas las Reseñas en Google',
};

export const testimonialsTranslations = { en, es };

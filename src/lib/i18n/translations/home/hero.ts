/* ── Hero Translations (EN / ES) ── */

const en = {
  badgeVeteranOwned: 'Veteran-Owned & Family Operated',
  googleRatingBadge: (rating: number, reviewCount: number) =>
    `${rating} Stars · ${reviewCount} Google Reviews`,
  headingPart1: 'Veteran-Owned',
  headingHighlight: 'Excellence',
  headingPart3: ' in Trenton',
  subheading: (established: number) =>
    `Since ${established}, delivering expert suspension, brakes, tires & commercial fleet services with military-grade precision. Same-day service available.`,
  scheduleServiceButton: 'Schedule Service',
  searchTiresButton: 'Search Tires',
  heroImageAlt: 'Ford Super Duty truck in the desert',
  statsYearsExperience: 'Years Experience',
  statsGoogleReviews: 'Google Reviews',
  statsAverageRating: 'Average Rating',
};

const es: typeof en = {
  badgeVeteranOwned: 'De Veteranos y Operación Familiar',
  googleRatingBadge: (rating: number, reviewCount: number) =>
    `${rating} Estrellas · ${reviewCount} Reseñas de Google`,
  headingPart1: 'Veteranos con',
  headingHighlight: 'Excelencia',
  headingPart3: ' en Trenton',
  subheading: (established: number) =>
    `Desde ${established}, ofrecemos servicios expertos de suspensión, frenos, llantas y flotas comerciales con precisión de grado militar. Servicio el mismo día disponible.`,
  scheduleServiceButton: 'Agendar Servicio',
  searchTiresButton: 'Buscar Llantas',
  heroImageAlt: 'Camioneta Ford Super Duty en el desierto',
  statsYearsExperience: 'Años de Experiencia',
  statsGoogleReviews: 'Reseñas de Google',
  statsAverageRating: 'Calificación Promedio',
};

export const heroTranslations = { en, es };

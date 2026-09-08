/* ── About Page Translations (EN / ES) ── */

const en = {
  hero: {
    badge: 'Veteran-Owned & Family Operated',
    titlePrefix: 'About',
    subtitle: (established: number) =>
      `Since ${established}, delivering expert auto care with military-grade precision and family-first values in Trenton, NJ.`,
    imageAlt: 'Auto repair team at work',
  },
  story: {
    badge: 'Our Story',
    titleBefore: '29+ Years of ',
    titleHighlight: 'Trusted',
    titleAfter: ' Service',
    paragraph1: (established: number) =>
      `Zambranos Complete Auto Center was founded in ${established} with a simple mission: provide honest, high-quality auto repair at fair prices. As a veteran-owned and family-operated business, we bring the discipline and integrity of military service to every job.`,
    paragraph2: (address: string) =>
      `While our roots go back to 1997, we moved to our current Trenton location at ${address} in 2018. Since then, we've grown into the area's trusted destination for suspension repair, brake services, wheel alignments, tire installation, and commercial fleet maintenance.`,
    paragraph3: (rating: number, reviewCount: number) =>
      `As authorized dealers for Bridgestone, Firestone, and Fuzion tires, we offer premium products backed by manufacturer warranties. Our commitment to quality has earned us a ${rating}-star rating from ${reviewCount}+ Google reviews.`,
    imageAlt: "Founder of Zambrano's Auto Center",
  },
  values: {
    titleBefore: 'What ',
    titleHighlight: 'Drives',
    titleAfter: ' Us',
    subheading:
      'Our values define everything we do — from the way we diagnose problems to the way we treat our customers.',
    items: {
      militaryPrecision: {
        title: 'Military Precision',
        description:
          'Our veteran founder brings the discipline, attention to detail, and commitment to excellence learned through military service to every repair.',
      },
      familyValues: {
        title: 'Family Values',
        description:
          'As a family-operated business, we treat every customer like family. Your safety and satisfaction are our top priorities.',
      },
      certifiedExpertise: {
        title: 'Certified Expertise',
        description:
          'Our technicians are trained and certified in the latest diagnostic and repair techniques for all vehicle makes and models.',
      },
      communityFirst: {
        title: 'Community First',
        description:
          'We are proud to serve Trenton and surrounding communities. We believe in honest work, fair pricing, and building lasting relationships.',
      },
    },
  },
  timeline: {
    titleBefore: 'Our ',
    titleHighlight: 'Journey',
    titleAfter: '',
    milestones: {
      founded1997: 'Founded by the Zambranos family',
      dealer2005: 'Became an authorized Bridgestone / Firestone dealer',
      fleet2015: 'Expanded commercial fleet services division',
      relocated2018: 'Relocated to our current Trenton, NJ facility',
      current: (years: number, reviewCount: number) =>
        `Serving ${years}+ years with ${reviewCount}+ five-star reviews`,
    },
  },
  stats: {
    yearsInBusiness: 'Years in Business',
    googleReviews: 'Google Reviews',
    averageRating: 'Average Rating',
    vehiclesServiced: 'Vehicles Serviced',
    vehiclesServicedValue: '1000s',
  },
  hoursLocation: {
    businessHoursTitle: 'Business Hours',
    visitUsTitle: 'Visit Us',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    scheduleService: 'Schedule Service',
  },
};

const es: typeof en = {
  hero: {
    badge: 'Propiedad de Veteranos y Operado en Familia',
    titlePrefix: 'Acerca de',
    subtitle: (established: number) =>
      `Desde ${established}, brindando cuidado automotriz experto con precisión de grado militar y valores familiares en Trenton, NJ.`,
    imageAlt: 'Equipo de reparación de autos trabajando',
  },
  story: {
    badge: 'Nuestra Historia',
    titleBefore: '29+ Años de Servicio ',
    titleHighlight: 'Confiable',
    titleAfter: '',
    paragraph1: (established: number) =>
      `Zambranos Complete Auto Center fue fundado en ${established} con una misión simple: brindar reparación automotriz honesta y de alta calidad a precios justos. Como negocio familiar y de propiedad de veteranos, aportamos la disciplina y la integridad del servicio militar a cada trabajo.`,
    paragraph2: (address: string) =>
      `Aunque nuestras raíces se remontan a 1997, nos mudamos a nuestra ubicación actual en Trenton, en ${address}, en 2018. Desde entonces, nos hemos convertido en el destino de confianza de la zona para reparación de suspensión, servicios de frenos, alineación de ruedas, instalación de llantas y mantenimiento de flotas comerciales.`,
    paragraph3: (rating: number, reviewCount: number) =>
      `Como distribuidores autorizados de llantas Bridgestone, Firestone y Fuzion, ofrecemos productos premium respaldados por garantías del fabricante. Nuestro compromiso con la calidad nos ha ganado una calificación de ${rating} estrellas de más de ${reviewCount} reseñas en Google.`,
    imageAlt: "Fundador de Zambrano's Auto Center",
  },
  values: {
    titleBefore: 'Lo Que Nos ',
    titleHighlight: 'Impulsa',
    titleAfter: '',
    subheading:
      'Nuestros valores definen todo lo que hacemos, desde la forma en que diagnosticamos los problemas hasta la forma en que tratamos a nuestros clientes.',
    items: {
      militaryPrecision: {
        title: 'Precisión Militar',
        description:
          'Nuestro fundador veterano aporta la disciplina, la atención al detalle y el compromiso con la excelencia aprendidos en el servicio militar a cada reparación.',
      },
      familyValues: {
        title: 'Valores Familiares',
        description:
          'Como negocio familiar, tratamos a cada cliente como parte de la familia. Tu seguridad y satisfacción son nuestras principales prioridades.',
      },
      certifiedExpertise: {
        title: 'Experiencia Certificada',
        description:
          'Nuestros técnicos están capacitados y certificados en las técnicas más recientes de diagnóstico y reparación para todas las marcas y modelos de vehículos.',
      },
      communityFirst: {
        title: 'La Comunidad Primero',
        description:
          'Nos enorgullece servir a Trenton y las comunidades cercanas. Creemos en el trabajo honesto, los precios justos y en construir relaciones duraderas.',
      },
    },
  },
  timeline: {
    titleBefore: 'Nuestro ',
    titleHighlight: 'Recorrido',
    titleAfter: '',
    milestones: {
      founded1997: 'Fundada por la familia Zambrano',
      dealer2005: 'Se convirtió en distribuidor autorizado de Bridgestone / Firestone',
      fleet2015: 'Ampliamos la división de servicios de flotas comerciales',
      relocated2018: 'Nos mudamos a nuestras instalaciones actuales en Trenton, NJ',
      current: (years: number, reviewCount: number) =>
        `Sirviendo ${years}+ años con más de ${reviewCount} reseñas de cinco estrellas`,
    },
  },
  stats: {
    yearsInBusiness: 'Años en el Negocio',
    googleReviews: 'Reseñas de Google',
    averageRating: 'Calificación Promedio',
    vehiclesServiced: 'Vehículos Atendidos',
    vehiclesServicedValue: 'Miles',
  },
  hoursLocation: {
    businessHoursTitle: 'Horario de Atención',
    visitUsTitle: 'Visítanos',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    scheduleService: 'Agendar Servicio',
  },
};

export const aboutTranslations = { en, es };

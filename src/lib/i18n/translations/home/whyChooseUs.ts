/* ── WhyChooseUs Translations (EN / ES) ── */

const en = {
  headingPrefix: 'Why Choose',
  subheading:
    "When it comes to your vehicle's safety and performance, you need specialists you can trust.",
  reasons: {
    certifiedExpertise: {
      title: 'Certified Expertise',
      description:
        'Highly trained specialists in suspension, brakes, and alignment — not just general mechanics.',
    },
    veteranOwnedTrust: {
      title: 'Veteran-Owned Trust',
      description:
        'Military-grade discipline and integrity. We stand behind every job with comprehensive warranties.',
    },
    localSinceYear: {
      title: 'Local Since 1997',
      description: (yearsOfService: number) =>
        `Proudly serving Trenton for ${yearsOfService}+ years with honest, transparent pricing and reliable service.`,
    },
    modernEquipment: {
      title: 'Modern Equipment',
      description:
        'We invest in the latest diagnostic and alignment technology to ensure precision repairs every time.',
    },
  },
};

const es: typeof en = {
  headingPrefix: 'Por Qué Elegir',
  subheading:
    'Cuando se trata de la seguridad y el rendimiento de tu vehículo, necesitas especialistas en los que puedas confiar.',
  reasons: {
    certifiedExpertise: {
      title: 'Experiencia Certificada',
      description:
        'Especialistas altamente capacitados en suspensión, frenos y alineación — no solo mecánicos generales.',
    },
    veteranOwnedTrust: {
      title: 'Confianza de Dueños Veteranos',
      description:
        'Disciplina e integridad de nivel militar. Respaldamos cada trabajo con garantías integrales.',
    },
    localSinceYear: {
      title: 'Locales Desde 1997',
      description: (yearsOfService: number) =>
        `Sirviendo con orgullo a Trenton por más de ${yearsOfService} años con precios honestos, transparentes y un servicio confiable.`,
    },
    modernEquipment: {
      title: 'Equipo Moderno',
      description:
        'Invertimos en la más reciente tecnología de diagnóstico y alineación para garantizar reparaciones precisas cada vez.',
    },
  },
};

export const whyChooseUsTranslations = { en, es };

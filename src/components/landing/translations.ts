/* ── Landing Page Translations (EN / ES) ── */

export type Lang = 'en' | 'es';

const en = {
  nav: {
    callNow: 'Call Now',
    googleRating: 'Google Rating',
  },
  hero: {
    badgeVeteran: 'Veteran-Owned Excellence',
    badgeRating: 'Google Rating',
    badgeReviews: '250+ Customer Reviews',
    headlinePre: 'Feeling ',
    headlineHighlight: 'Vibrations',
    headlinePost: ' In Your Steering?',
    subheadline: (established: number, years: number) =>
      `Don't compromise your safety. Since ${established}, we've provided military-grade precision in alignments, suspension, and brakes. Trusted by Trenton drivers for ${years}+ years.`,
    bookAppointment: 'Book Appointment',
    callButton: 'Call (609) 396-8417',
    emergencyNote: 'Emergency? Need help now? Click call above.',
  },
  emergency: {
    label: 'Emergency Service',
    title: 'Need immediate assistance?',
    description: 'Call our veteran-owned shop directly for same-day service.',
    bookOnline: 'Book Online',
  },
  booking: {
    badge: 'Online Booking',
    titlePre: 'Book Your ',
    titleHighlight: 'Service',
    titlePost: ' Online',
    description:
      'Choose your service, pick a date and time, and confirm your appointment — all in under 2 minutes.',
    cta: 'Book My Appointment',
    hours: 'Mon – Fri: 8:30 AM – 6:00 PM · Sat: 8:30 AM – 2:00 PM',
  },
  why: {
    titlePre: 'Why Choose ',
    titleHighlight: 'Zambranos',
    titlePost: '?',
    subtitle: (established: number) =>
      `When it comes to your vehicle's safety and performance, you need specialists you can trust in Trenton since ${established}.`,
    reasons: {
      expertise: {
        title: 'Certified Expertise',
        description:
          'Highly trained specialists in suspension, brakes, and alignment — not just general mechanics.',
      },
      veteran: {
        title: 'Veteran-Owned Trust',
        description:
          'Military-grade discipline and integrity. We stand behind every job with comprehensive warranties.',
      },
      local: {
        title: 'Local Since 1997',
        description: (years: number) =>
          `Proudly serving Trenton for ${years}+ years with honest, transparent pricing and reliable service.`,
      },
      equipment: {
        title: 'Modern Equipment',
        description:
          'We invest in the latest diagnostic and alignment technology to ensure precision repairs every time.',
      },
    },
  },
  footer: {
    veteranOwned: 'Veteran Owned Precision',
    serving: (established: number) =>
      `Serving Trenton since ${established}. Dedicated to excellence in automotive service.`,
    rights: 'All Rights Reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
};

const es: typeof en = {
  nav: {
    callNow: 'Llamar Ahora',
    googleRating: 'Calificación Google',
  },
  hero: {
    badgeVeteran: 'Excelencia de Dueños Veteranos',
    badgeRating: 'Calificación Google',
    badgeReviews: 'Más de 250 Reseñas',
    headlinePre: '¿Sientes ',
    headlineHighlight: 'Vibraciones',
    headlinePost: ' En El Volante?',
    subheadline: (established: number, years: number) =>
      `No comprometas tu seguridad. Desde ${established}, ofrecemos precisión de grado militar en alineaciones, suspensión y frenos. La confianza de los conductores de Trenton por más de ${years} años.`,
    bookAppointment: 'Reservar Cita',
    callButton: 'Llamar (609) 396-8417',
    emergencyNote: '¿Emergencia? ¿Necesitas ayuda ahora? Presiona llamar arriba.',
  },
  emergency: {
    label: 'Servicio de Emergencia',
    title: '¿Necesitas asistencia inmediata?',
    description:
      'Llama directamente a nuestro taller de dueños veteranos para servicio el mismo día.',
    bookOnline: 'Reservar en Línea',
  },
  booking: {
    badge: 'Reservas en Línea',
    titlePre: 'Reserva Tu ',
    titleHighlight: 'Servicio',
    titlePost: ' en Línea',
    description:
      'Elige tu servicio, selecciona fecha y hora, y confirma tu cita — todo en menos de 2 minutos.',
    cta: 'Reservar Mi Cita',
    hours: 'Lun – Vie: 8:30 AM – 6:00 PM · Sáb: 8:30 AM – 2:00 PM',
  },
  why: {
    titlePre: '¿Por Qué Elegir ',
    titleHighlight: 'Zambranos',
    titlePost: '?',
    subtitle: (established: number) =>
      `Cuando se trata de la seguridad y el rendimiento de tu vehículo, necesitas especialistas de confianza en Trenton desde ${established}.`,
    reasons: {
      expertise: {
        title: 'Experiencia Certificada',
        description:
          'Especialistas altamente capacitados en suspensión, frenos y alineación — no solo mecánicos generales.',
      },
      veteran: {
        title: 'Confianza de Veteranos',
        description:
          'Disciplina e integridad de grado militar. Respaldamos cada trabajo con garantías completas.',
      },
      local: {
        title: 'Locales Desde 1997',
        description: (years: number) =>
          `Sirviendo con orgullo a Trenton por más de ${years} años con precios honestos, transparentes y servicio confiable.`,
      },
      equipment: {
        title: 'Equipo Moderno',
        description:
          'Invertimos en la última tecnología de diagnóstico y alineación para garantizar reparaciones de precisión siempre.',
      },
    },
  },
  footer: {
    veteranOwned: 'Precisión de Dueños Veteranos',
    serving: (established: number) =>
      `Sirviendo a Trenton desde ${established}. Dedicados a la excelencia en el servicio automotriz.`,
    rights: 'Todos los Derechos Reservados.',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
  },
};

export const translations: Record<Lang, typeof en> = { en, es };

/* ── Shared Navbar / Footer Translations (EN / ES) ── */

const en = {
  nav: {
    links: {
      tires: 'Tires',
      services: 'Services',
      about: 'About',
      commercial: 'Commercial',
      financing: 'Financing',
    },
    schedule: 'Schedule',
    callNow: 'Call Now',
    googleRating: 'Google Rating',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hours: {
    weekdays: 'Monday – Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
  },
  footer: {
    brandBlurb: (established: number) =>
      `Veteran-owned & family operated auto repair serving Trenton since ${established}. Specialists in suspension, brakes, tires & commercial fleet services.`,
    quickLinksTitle: 'Quick Links',
    quickLinks: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      commercial: 'Commercial Fleet',
      financing: 'Financing',
    },
    specialtiesTitle: 'Our Specialties',
    specialties: {
      suspension: 'Suspension Repair',
      brakes: 'Brake Services',
      alignment: 'Wheel Alignment',
      tires: 'Tire Installation',
      fleet: 'Fleet Maintenance',
      ac: 'AC Service',
    },
    contactTitle: 'Contact Us',
    rightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    websiteBy: 'Website by',
  },
};

const es: typeof en = {
  nav: {
    links: {
      tires: 'Llantas',
      services: 'Servicios',
      about: 'Nosotros',
      commercial: 'Comercial',
      financing: 'Financiamiento',
    },
    schedule: 'Agendar',
    callNow: 'Llamar Ahora',
    googleRating: 'Calificación Google',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hours: {
    weekdays: 'Lunes – Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
  },
  footer: {
    brandBlurb: (established: number) =>
      `Taller de dueños veteranos y familiar sirviendo a Trenton desde ${established}. Especialistas en suspensión, frenos, llantas y servicios de flotas comerciales.`,
    quickLinksTitle: 'Enlaces Rápidos',
    quickLinks: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      commercial: 'Flota Comercial',
      financing: 'Financiamiento',
    },
    specialtiesTitle: 'Nuestras Especialidades',
    specialties: {
      suspension: 'Reparación de Suspensión',
      brakes: 'Servicio de Frenos',
      alignment: 'Alineación de Ruedas',
      tires: 'Instalación de Llantas',
      fleet: 'Mantenimiento de Flotas',
      ac: 'Servicio de Aire Acondicionado',
    },
    contactTitle: 'Contáctanos',
    rightsReserved: 'Todos los derechos reservados.',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    websiteBy: 'Sitio web por',
  },
};

export const commonTranslations = { en, es };

/* ── Main Site Translations (EN / ES) — merged index ── */

import { commonTranslations } from './common';
import { promoPopupTranslations } from './promoPopup';
import { aboutTranslations } from './about';
import { servicesTranslations } from './services';
import { tiresTranslations } from './tires';
import { financingTranslations } from './financing';
import { commercialPageTranslations } from './commercial';

import { heroTranslations } from './home/hero';
import { financingBrandsTranslations } from './home/financingBrands';
import { coreServicesTranslations } from './home/coreServices';
import { commercialSectionTranslations } from './home/commercialSection';
import { tireBrandsTranslations } from './home/tireBrands';
import { whyChooseUsTranslations } from './home/whyChooseUs';
import { maintenanceServicesTranslations } from './home/maintenanceServices';
import { testimonialsTranslations } from './home/testimonials';
import { serviceAreaTranslations } from './home/serviceArea';
import { finalCTATranslations } from './home/finalCTA';

export type Lang = 'en' | 'es';

export const translations = {
  en: {
    common: commonTranslations.en,
    promoPopup: promoPopupTranslations.en,
    about: aboutTranslations.en,
    services: servicesTranslations.en,
    tires: tiresTranslations.en,
    financing: financingTranslations.en,
    commercial: commercialPageTranslations.en,
    home: {
      hero: heroTranslations.en,
      financingBrands: financingBrandsTranslations.en,
      coreServices: coreServicesTranslations.en,
      commercialSection: commercialSectionTranslations.en,
      tireBrands: tireBrandsTranslations.en,
      whyChooseUs: whyChooseUsTranslations.en,
      maintenanceServices: maintenanceServicesTranslations.en,
      testimonials: testimonialsTranslations.en,
      serviceArea: serviceAreaTranslations.en,
      finalCTA: finalCTATranslations.en,
    },
  },
  es: {
    common: commonTranslations.es,
    promoPopup: promoPopupTranslations.es,
    about: aboutTranslations.es,
    services: servicesTranslations.es,
    tires: tiresTranslations.es,
    financing: financingTranslations.es,
    commercial: commercialPageTranslations.es,
    home: {
      hero: heroTranslations.es,
      financingBrands: financingBrandsTranslations.es,
      coreServices: coreServicesTranslations.es,
      commercialSection: commercialSectionTranslations.es,
      tireBrands: tireBrandsTranslations.es,
      whyChooseUs: whyChooseUsTranslations.es,
      maintenanceServices: maintenanceServicesTranslations.es,
      testimonials: testimonialsTranslations.es,
      serviceArea: serviceAreaTranslations.es,
      finalCTA: finalCTATranslations.es,
    },
  },
} satisfies Record<Lang, unknown>;

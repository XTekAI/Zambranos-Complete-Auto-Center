'use client';

import { motion } from 'motion/react';
import { Shield, Award, MapPin, Wrench } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - 1997;

  const reasons = [
    {
      icon: Award,
      title: t.home.whyChooseUs.reasons.certifiedExpertise.title,
      description: t.home.whyChooseUs.reasons.certifiedExpertise.description,
    },
    {
      icon: Shield,
      title: t.home.whyChooseUs.reasons.veteranOwnedTrust.title,
      description: t.home.whyChooseUs.reasons.veteranOwnedTrust.description,
    },
    {
      icon: MapPin,
      title: t.home.whyChooseUs.reasons.localSinceYear.title,
      description: t.home.whyChooseUs.reasons.localSinceYear.description(yearsOfService),
    },
    {
      icon: Wrench,
      title: t.home.whyChooseUs.reasons.modernEquipment.title,
      description: t.home.whyChooseUs.reasons.modernEquipment.description,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            {t.home.whyChooseUs.headingPrefix} <span className="text-primary">Zambranos</span>?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t.home.whyChooseUs.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card group p-8"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

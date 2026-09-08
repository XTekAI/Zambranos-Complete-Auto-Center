'use client';

import { motion } from 'motion/react';
import { Truck, Clock, ShieldCheck, Phone, Zap, Gauge } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS, LINKS } from '../lib/constants';
import AnimatedButton from './AnimatedButton';
import { useLanguage } from '../lib/i18n/LanguageContext';

export default function CommercialSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t.home.commercialSection.features.priorityScheduling.title,
      desc: t.home.commercialSection.features.priorityScheduling.desc,
    },
    {
      icon: ShieldCheck,
      title: t.home.commercialSection.features.heavyDutyExpertise.title,
      desc: t.home.commercialSection.features.heavyDutyExpertise.desc,
    },
    {
      icon: Zap,
      title: t.home.commercialSection.features.sameDayTurnaround.title,
      desc: t.home.commercialSection.features.sameDayTurnaround.desc,
    },
    {
      icon: Gauge,
      title: t.home.commercialSection.features.fleetDiagnostics.title,
      desc: t.home.commercialSection.features.fleetDiagnostics.desc,
    },
  ];

  return (
    <section id="commercial" className="relative overflow-hidden bg-dark py-24 text-white">
      <Image
        src="/images/zambrano-van-real.jpg"
        alt={t.home.commercialSection.fleetImageAlt}
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Truck className="h-4 w-4" />
            {t.home.commercialSection.badge}
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl leading-tight">
            <span className="text-white drop-shadow-md">{t.home.commercialSection.headingLine1}</span> <span className="text-red-600 drop-shadow-md">{t.home.commercialSection.headingLine2}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white font-bold drop-shadow-md">
            {t.home.commercialSection.intro}
          </p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col md:flex-row items-center gap-8 rounded-3xl bg-white/5 p-6 border border-white/10 backdrop-blur-md"
          >
            <div className="relative w-full md:w-2/5 h-64 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/zambrano-van-real.jpg"
                alt={t.home.commercialSection.vanImageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{t.home.commercialSection.fleetExpertiseTitle}</h4>
              <p className="text-white font-bold text-xl md:text-2xl mb-4 leading-tight">
                {t.home.commercialSection.fleetExpertiseHeadline}
              </p>
              <p className="text-white/60 mb-6 text-sm">
                {t.home.commercialSection.fleetExpertiseDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <AnimatedButton
                  href="/commercial"
                  text={t.home.commercialSection.learnMore}
                  className="px-8 py-3 text-sm font-bold border-2 border-white/20 hover:border-white/40"
                />
                <AnimatedButton
                  href={BUSINESS.phoneTel}
                  text={t.home.commercialSection.callNow}
                  className="px-8 py-3 text-sm font-bold bg-primary hover:bg-red-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/20 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-primary">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

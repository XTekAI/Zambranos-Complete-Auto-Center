'use client';

import LandingNavbar from '../../src/components/landing/LandingNavbar';
import LandingHero from '../../src/components/landing/LandingHero';
import { LanguageProvider, useLanguage } from '../../src/components/landing/LanguageContext';
import { Shield, Award, MapPin, Wrench, PhoneCall, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS, LINKS } from '../../src/lib/constants';

function LandingContent() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - BUSINESS.established;

  const reasons = [
    {
      icon: Award,
      title: t.why.reasons.expertise.title,
      description: t.why.reasons.expertise.description,
    },
    {
      icon: Shield,
      title: t.why.reasons.veteran.title,
      description: t.why.reasons.veteran.description,
    },
    {
      icon: MapPin,
      title: t.why.reasons.local.title,
      description: t.why.reasons.local.description(yearsOfService),
    },
    {
      icon: Wrench,
      title: t.why.reasons.equipment.title,
      description: t.why.reasons.equipment.description,
    },
  ];

  return (
    <>
      <LandingNavbar />
      <main className="bg-dark">
        {/* Full Screen Hero Section */}
        <LandingHero />

        {/* Dedicated Support / Emergency Section */}
        <section className="bg-dark/80 py-12 border-y border-white/5 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-red-500 font-black uppercase text-xs tracking-[0.2em] mb-2">{t.emergency.label}</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">{t.emergency.title}</h2>
              <p className="text-gray-400 font-medium">{t.emergency.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://appointments.zambranoscomplete.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button group !rounded-2xl !py-5 !px-8 flex"
              >
                <span className="anim-text flex items-center justify-center gap-3 text-base font-black uppercase tracking-widest">
                  <Calendar className="h-5 w-5" /> {t.emergency.bookOnline}
                </span>
                <span className="anim-bg" />
              </a>
              <a
                href={BUSINESS.phoneTel}
                className="animated-button group !rounded-2xl !py-5 !px-8 flex !bg-white/10 !border !border-white/20"
              >
                <span className="anim-text flex items-center justify-center gap-3 text-base font-black uppercase tracking-widest">
                  <PhoneCall className="h-5 w-5" /> {BUSINESS.phone}
                </span>
                <span className="anim-bg" />
              </a>
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section id="booking" className="bg-white py-24 border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
                <Calendar className="h-4 w-4" />
                {t.booking.badge}
              </span>
              <h2 className="font-display text-4xl font-black tracking-tight text-dark md:text-5xl mt-4">
                {t.booking.titlePre}<span className="text-primary">{t.booking.titleHighlight}</span>{t.booking.titlePost}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {t.booking.description}
              </p>

              <a
                href="https://appointments.zambranoscomplete.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-14 py-6 text-xl font-black uppercase tracking-widest text-white shadow-2xl shadow-red-600/40 transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-red-600/60"
              >
                <Calendar className="h-6 w-6" />
                {t.booking.cta}
              </a>

              <p className="mt-6 text-sm text-muted">
                {t.booking.hours}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us - Exactly like main page but adapted */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-dark">
                {t.why.titlePre}<span className="text-primary">{t.why.titleHighlight}</span>{t.why.titlePost}
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-muted font-medium">
                {t.why.subtitle(BUSINESS.established)}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="premium-card group p-10 flex flex-col items-center text-center shadow-xl border border-gray-100 hover:border-primary transition-all rounded-[2rem] bg-surface/50"
                  >
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform group-hover:scale-125 group-hover:rotate-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-4 font-display text-xl font-bold tracking-tight text-dark uppercase">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted font-medium">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Minimal Landing Footer with Functional Links */}
        <footer className="bg-dark border-t border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center md:items-start">
                   <span className="text-xl font-black text-red-600 uppercase tracking-widest mb-6 border-b-2 border-red-600/30 pb-2">Zambranos Auto Center</span>
                   <a
                     href={LINKS.google}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-white transition-colors"
                   >
                     <MapPin className="h-5 w-5 text-red-600" />
                     {BUSINESS.address}
                   </a>
                   <a
                     href={BUSINESS.phoneTel}
                     className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-white transition-colors mt-4"
                   >
                     <PhoneCall className="h-5 w-5 text-red-600" />
                     {BUSINESS.phone}
                   </a>
                </div>

                <div className="flex flex-col items-center">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">{t.footer.veteranOwned}</span>
                   <p className="text-center text-xs font-medium text-gray-500 max-w-xs uppercase leading-relaxed tracking-wider">
                     {t.footer.serving(BUSINESS.established)}
                   </p>
                </div>

                <div className="flex justify-center md:justify-end">
                   <div className="text-right text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                     © {currentYear} Zambranos Complete Auto Center.<br/>{t.footer.rights}
                   </div>
                </div>
             </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default function LandingPage() {
  return (
    <LanguageProvider>
      <LandingContent />
    </LanguageProvider>
  );
}

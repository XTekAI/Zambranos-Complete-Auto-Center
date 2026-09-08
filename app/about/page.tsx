'use client';

import { motion } from 'motion/react';
import {
  Shield,
  Star,
  Clock,
  Users,
  Wrench,
  MapPin,
  Phone,
  Calendar,
  Award,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { BUSINESS, LINKS, HOURS } from '../../src/lib/constants';
import { useLanguage } from '../../src/lib/i18n/LanguageContext';

const currentYear = new Date().getFullYear();
const yearsOfService = currentYear - BUSINESS.established;

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t.about.values.items.militaryPrecision.title,
      description: t.about.values.items.militaryPrecision.description,
    },
    {
      icon: Heart,
      title: t.about.values.items.familyValues.title,
      description: t.about.values.items.familyValues.description,
    },
    {
      icon: Award,
      title: t.about.values.items.certifiedExpertise.title,
      description: t.about.values.items.certifiedExpertise.description,
    },
    {
      icon: Users,
      title: t.about.values.items.communityFirst.title,
      description: t.about.values.items.communityFirst.description,
    },
  ];

  const milestones = [
    { year: '1997', event: t.about.timeline.milestones.founded1997 },
    { year: '2005', event: t.about.timeline.milestones.dealer2005 },
    { year: '2015', event: t.about.timeline.milestones.fleet2015 },
    { year: '2018', event: t.about.timeline.milestones.relocated2018 },
    {
      year: currentYear.toString(),
      event: t.about.timeline.milestones.current(yearsOfService, BUSINESS.reviewCount),
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[40vh] md:min-h-[50vh] items-center overflow-hidden bg-dark pt-24 md:pt-32 lg:pt-40">
          <Image
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80"
            alt={t.about.hero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/30 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5" />
                {t.about.hero.badge}
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-none">
                <span className="text-white drop-shadow-lg">{t.about.hero.titlePrefix}</span> <span className="text-red-600 drop-shadow-lg">Zambranos</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
                {t.about.hero.subtitle(BUSINESS.established)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <Clock className="h-4 w-4" />
                  {t.about.story.badge}
                </span>
                <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  {t.about.story.titleBefore}<span className="text-primary">{t.about.story.titleHighlight}</span>{t.about.story.titleAfter}
                </h2>
                <p className="mt-6 leading-relaxed text-muted">
                  {t.about.story.paragraph1(BUSINESS.established)}
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  {t.about.story.paragraph2(BUSINESS.address)}
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  {t.about.story.paragraph3(BUSINESS.rating, BUSINESS.reviewCount)}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-72 md:h-[500px] overflow-hidden rounded-2xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]"
              >
                <Image
                  src="/images/owner.jpg"
                  alt={t.about.story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                {t.about.values.titleBefore}<span className="text-primary">{t.about.values.titleHighlight}</span>{t.about.values.titleAfter}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                {t.about.values.subheading}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="premium-card p-8"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold text-dark">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                {t.about.timeline.titleBefore}<span className="text-primary">{t.about.timeline.titleHighlight}</span>{t.about.timeline.titleAfter}
              </h2>
            </div>

            <div className="mx-auto max-w-2xl space-y-0">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 pb-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                      {milestone.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-primary/20" />
                    )}
                  </div>
                  <div className="pt-2.5">
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <p className="mt-1 text-muted">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-dark py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {[
                { value: '29+', label: t.about.stats.yearsInBusiness, icon: Clock },
                { value: `${BUSINESS.reviewCount}+`, label: t.about.stats.googleReviews, icon: Star },
                { value: `${BUSINESS.rating}★`, label: t.about.stats.averageRating, icon: Star },
                { value: t.about.stats.vehiclesServicedValue, label: t.about.stats.vehiclesServiced, icon: Wrench },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <div className="font-display text-3xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hours & Location */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="premium-card p-8"
              >
                <h3 className="mb-6 font-display text-2xl font-bold">
                  {t.about.hoursLocation.businessHoursTitle}
                </h3>
                <ul className="space-y-4">
                  {HOURS.map((h) => (
                    <li
                      key={h.dayKey}
                      className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
                    >
                      <span className="font-semibold text-dark">{t.common.hours[h.dayKey]}</span>
                      <span className={`font-bold ${h.time === 'Closed' ? 'text-primary' : 'text-muted'}`}>
                        {h.time === 'Closed' ? t.common.hours.closed : h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="premium-card p-8"
              >
                <h3 className="mb-6 font-display text-2xl font-bold">
                  {t.about.hoursLocation.visitUsTitle}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{t.about.hoursLocation.addressLabel}</p>
                      <a
                        href={LINKS.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-primary cursor-pointer"
                      >
                        {BUSINESS.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{t.about.hoursLocation.phoneLabel}</p>
                      <a
                        href={BUSINESS.phoneTel}
                        className="text-lg font-bold text-primary transition-colors hover:text-dark cursor-pointer"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={LINKS.appointment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
                  >
                    <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
                    {t.about.hoursLocation.scheduleService}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

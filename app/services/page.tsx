'use client';

import { motion } from 'motion/react';
import {
  Wrench,
  CircleDot,
  Move,
  Disc,
  Snowflake,
  Droplet,
  Battery,
  Settings2,
  Lightbulb,
  Wind,
  Thermometer,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Cog,
} from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FinalCTA from '../../src/components/FinalCTA';
import { useLanguage } from '../../src/lib/i18n/LanguageContext';

/* ── Repair image / icon mapping (text content comes from translations) ── */

const repairMeta = [
  { id: 'brakes', icon: Disc, image: '/images/brakes.jpg' },
  { id: 'suspension', icon: Wrench, image: '/images/suspension repair.jpg' },
  { id: 'engine', icon: Cog, image: '/images/engine services.jpg' },
  { id: 'ac', icon: Snowflake, image: '/images/ac services.jpg' },
  { id: 'radiator', icon: Thermometer, image: '/images/radiator.jpg' },
  { id: 'belts', icon: Settings2, image: '/images/belt and hoses.jpeg' },
  { id: 'shocks', icon: Gauge, image: '/images/suspension repair.jpg' },
] as const;

/* ── Tires icon mapping ── */

const tireServiceMeta = [
  { key: 'installation', icon: CircleDot },
  { key: 'rotation', icon: CircleDot },
  { key: 'balance', icon: Move },
  { key: 'tpms', icon: Gauge },
  { key: 'alignment', icon: Move },
  { key: 'flatRepair', icon: Wrench },
] as const;

/* ── Maintenance icon mapping ── */

const maintenanceServiceMeta = [
  { key: 'oilChanges', icon: Droplet },
  { key: 'filters', icon: Settings2 },
  { key: 'lighting', icon: Lightbulb },
  { key: 'wiperBlades', icon: Wind },
  { key: 'fluidServices', icon: Thermometer },
  { key: 'battery', icon: Battery },
] as const;

export default function ServicesPage() {
  const { t } = useLanguage();

  const repairs = repairMeta.map((meta) => ({
    ...meta,
    ...t.services.repairs.list[meta.id],
  }));

  const tireServices = tireServiceMeta.map((meta) => ({
    ...meta,
    name: t.services.tires.services[meta.key],
  }));

  const maintenanceServices = maintenanceServiceMeta.map((meta) => ({
    ...meta,
    name: t.services.maintenance.services[meta.key],
  }));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-dark py-20 pt-32 lg:pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Wrench className="h-4 w-4" />
                {t.services.hero.badge}
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-none">
                <span className="text-white drop-shadow-lg">{t.services.hero.headingPart1}</span>{' '}
                <span className="text-red-600 drop-shadow-lg">{t.services.hero.headingPart2}</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/60">
                {t.services.hero.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ REPAIRS SECTION ═══ */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Wrench className="h-4 w-4" />
                {t.services.repairs.badge}
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                {t.services.repairs.headingPart1} <span className="text-primary">{t.services.repairs.headingHighlight}</span> {t.services.repairs.headingPart2}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                {t.services.repairs.description}
              </p>
            </div>

            <div className="space-y-16">
              {repairs.map((service, index) => {
                const Icon = service.icon;
                const isReversed = index % 2 !== 0;
                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? 'direction-rtl' : ''}`}
                  >
                    {/* Text */}
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {service.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl font-extrabold">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-text">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/schedule"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
                      >
                        <Calendar className="h-4 w-4" />
                        {t.services.repairs.scheduleButton}
                      </a>
                    </div>

                    {/* Image */}
                    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${isReversed ? 'lg:order-1' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-56 md:h-[350px] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ TIRES SECTION ═══ */}
        <section id="tires" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <CircleDot className="h-4 w-4" />
                {t.services.tires.badge}
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                {t.services.tires.headingPart1} <span className="text-primary">{t.services.tires.headingHighlight}</span> {t.services.tires.headingPart2}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                {t.services.tires.description}
              </p>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="grid gap-4 sm:grid-cols-2">
                {tireServices.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={svc.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="pill-badge"
                    >
                      <div className="pill-icon">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="pill-text">{svc.name}</span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-[400px] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src="/images/tire installation.jpg"
                  alt={t.services.tires.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-xl font-bold text-white">
                    {t.services.tires.expertCareTitle}
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    {t.services.tires.expertCareDescription}
                  </p>
                  <a
                    href="/tires"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
                  >
                    {t.services.tires.viewBrandsLink}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ MAINTENANCE SECTION ═══ */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Droplet className="h-4 w-4" />
                {t.services.maintenance.badge}
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                {t.services.maintenance.headingPart1} <span className="text-primary">{t.services.maintenance.headingHighlight}</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                {t.services.maintenance.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {maintenanceServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="pill-badge"
                  >
                    <div className="pill-icon">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="pill-text">{svc.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

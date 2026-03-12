'use client';

import { motion } from 'motion/react';
import { Truck, Clock, ShieldCheck, Phone, Zap, Gauge } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS, LINKS } from '../lib/constants';

const features = [
  {
    icon: Clock,
    title: 'Priority Scheduling',
    desc: 'Jump to the front of the line. We prioritize commercial vehicles to minimize your downtime.',
  },
  {
    icon: ShieldCheck,
    title: 'Heavy-Duty Expertise',
    desc: 'Specialized equipment for heavy-duty suspension, brakes, and commercial tires.',
  },
  {
    icon: Zap,
    title: 'Same-Day Turnaround',
    desc: 'Most fleet services completed same-day so your trucks stay on the road.',
  },
  {
    icon: Gauge,
    title: 'Fleet Diagnostics',
    desc: 'Comprehensive multi-point inspections to prevent breakdowns before they happen.',
  },
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="relative overflow-hidden bg-dark py-24 text-white">
      <Image
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
        alt="Commercial fleet vehicles"
        fill
        className="object-cover opacity-15"
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
            Fleet Pro
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Keep Your Business{' '}
            <span className="text-primary">Moving Forward</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            We understand downtime costs you money. Our commercial vehicle services are designed for fast turnaround and priority scheduling.
          </p>
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
                <h3 className="mb-2 font-display text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={BUSINESS.phoneTel}
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110 cursor-pointer"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Call for Fleet Services
          </a>
          <span className="text-sm text-white/40">
            Priority scheduling for commercial accounts
          </span>
        </motion.div>
      </div>
    </section>
  );
}

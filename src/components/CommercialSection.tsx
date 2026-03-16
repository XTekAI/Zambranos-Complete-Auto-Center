'use client';

import { motion } from 'motion/react';
import { Truck, Clock, ShieldCheck, Phone, Zap, Gauge } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS, LINKS } from '../lib/constants';
import AnimatedButton from './AnimatedButton';

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
        src="/images/zambrano-van-real.jpg"
        alt="Zambranos Commercial fleet"
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
            Fleet Pro
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl leading-tight">
            <span className="text-white drop-shadow-md">Keep Your Business</span> <span className="text-red-600 drop-shadow-md">Moving Forward</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white font-bold drop-shadow-md">
            We understand downtime costs you money. Our commercial vehicle services are designed for fast turnaround and priority scheduling.
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
                alt="Zambranos Commercial Van"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Fleet Expertise</h4>
              <p className="text-white font-bold text-xl md:text-2xl mb-4 leading-tight">
                Full service repair for F150 & F250 trucks, and E250 & E350 fleet vehicles!
              </p>
              <p className="text-white/60 mb-6 text-sm">
                We specialize in keeping your business on the road with military-grade precision and fast turnaround times.
              </p>
              <div className="flex flex-wrap gap-4">
                <AnimatedButton
                  href="/commercial"
                  text="Learn More"
                  className="px-8 py-3 text-sm font-bold border-2 border-white/20 hover:border-white/40"
                />
                <AnimatedButton
                  href={BUSINESS.phoneTel}
                  text="Call Now"
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

'use client';

import { motion } from 'motion/react';
import { Star, Shield, Calendar, CircleDot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, LINKS } from '../lib/constants';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-dark">
      <Image
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80"
        alt="Auto repair shop interior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/30 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5" />
              Veteran-Owned &amp; Family Operated
            </span>
            <a
              href={LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-4 py-1.5 text-xs font-semibold text-yellow-300 backdrop-blur-sm transition-colors hover:bg-yellow-500/30 cursor-pointer"
            >
              <Star className="h-3.5 w-3.5 fill-yellow-400" />
              {BUSINESS.rating} Stars · {BUSINESS.reviewCount} Google Reviews
            </a>
          </div>

          <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Veteran-Owned{' '}
            <span className="text-primary">Excellence</span> in Trenton
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
            Since {BUSINESS.established}, delivering expert suspension, brakes, tires &amp;
            commercial fleet services with military-grade precision. Same-day service available.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={LINKS.appointment}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
              Schedule Service
            </a>
            <Link
              href="/services#tires"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 cursor-pointer"
            >
              <CircleDot className="h-5 w-5" />
              Search Tires
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: '27+', label: 'Years Experience' },
              { value: `${BUSINESS.reviewCount}+`, label: 'Google Reviews' },
              { value: `${BUSINESS.rating}★`, label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

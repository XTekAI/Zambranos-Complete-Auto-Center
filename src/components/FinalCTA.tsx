'use client';

import { Phone, MapPin, Calendar } from 'lucide-react';
import { BUSINESS, LINKS } from '../lib/constants';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Decorative */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Ready to Get Back on the Road?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Trust {BUSINESS.name} for expert suspension, brake, and tire services.
          Fast turnaround, honest pricing, guaranteed results.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center gap-2 rounded-xl bg-dark px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-dark cursor-pointer"
          >
            <Phone className="h-5 w-5" />
            {BUSINESS.phone}
          </a>
          <a
            href={LINKS.appointment}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-dark hover:text-white cursor-pointer"
          >
            <Calendar className="h-5 w-5" />
            Schedule Service
          </a>
          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-dark cursor-pointer"
          >
            <MapPin className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

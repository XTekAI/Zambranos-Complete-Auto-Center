'use client';

import { Phone, MapPin, Calendar } from 'lucide-react';
import { BUSINESS, LINKS } from '../lib/constants';
import AnimatedButton from './AnimatedButton';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Decorative */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
          Ready to Get Back on the Road?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Trust {BUSINESS.name} for expert suspension, brake, and tire services.
          Fast turnaround, honest pricing, guaranteed results.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AnimatedButton
            href={BUSINESS.phoneTel}
            text={BUSINESS.phone}
            icon={<Phone className="h-5 w-5" />}
            className="px-8 py-4 text-white hover-black"
          />
          <AnimatedButton
            href={LINKS.appointment}
            text="Schedule Service"
            icon={<Calendar className="h-5 w-5" />}
            className="px-8 py-4 text-white hover-black"
          />
          <AnimatedButton
            href={LINKS.google}
            text="Get Directions"
            icon={<MapPin className="h-5 w-5" />}
            className="px-8 py-4 text-white border-2 border-white/30 hover-black"
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { BUSINESS, LINKS } from '../lib/constants';

const reviews = [
  {
    name: 'Michael T.',
    text: "Zambranos is the only place I trust with my work truck. They got my suspension fixed and new tires on the same day. Fast, honest, and reasonably priced.",
    rating: 5,
    date: '2 weeks ago',
  },
  {
    name: 'Sarah J.',
    text: "I had a terrible shaking in my steering wheel. They diagnosed it as a bad tie rod and alignment issue. Fixed it quickly and the car drives like new!",
    rating: 5,
    date: '1 month ago',
  },
  {
    name: 'David R.',
    text: "Great experience getting new brakes and rotors. They explained exactly what was wrong, showed me the worn parts, and didn't try to upsell me.",
    rating: 5,
    date: '3 months ago',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-dark py-24">
      <div className="pointer-events-none absolute -left-48 -top-48 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400 transition-colors hover:bg-white/10 cursor-pointer"
          >
            <Star className="h-4 w-4 fill-yellow-400" />
            {BUSINESS.rating} Stars · {BUSINESS.reviewCount} Google Reviews
          </a>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/50">
            Real reviews from Trenton drivers who trust Zambrano&apos;s for their vehicle&apos;s safety.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-white/5 transition-colors group-hover:text-primary/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-sm italic leading-relaxed text-white/70">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">{review.name}</span>
                <span className="text-xs text-white/30">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-white cursor-pointer"
          >
            Read All Reviews on Google
            <Star className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

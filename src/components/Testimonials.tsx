'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { BUSINESS, LINKS } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    { key: 'michael', ...t.home.testimonials.items.michael, rating: 5 },
    { key: 'sarah', ...t.home.testimonials.items.sarah, rating: 5 },
    { key: 'david', ...t.home.testimonials.items.david, rating: 5 },
  ];

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
            {t.home.testimonials.ratingBadge(BUSINESS.rating, BUSINESS.reviewCount)}
          </a>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-white drop-shadow-md">{t.home.testimonials.heading.part1}</span> <span className="text-red-600 drop-shadow-md">{t.home.testimonials.heading.part2}</span> <span className="text-white drop-shadow-md">{t.home.testimonials.heading.part3}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/50">
            {t.home.testimonials.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.key}
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
            {t.home.testimonials.readAllReviews}
            <Star className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

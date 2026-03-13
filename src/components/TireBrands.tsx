'use client';

import { motion } from 'motion/react';
import { CircleDot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const brands = [
  {
    name: 'BRIDGESTONE',
    logo: '/images/Bridgestone.png',
    tagline: 'Premium Performance',
    description: 'Industry-leading tires for passenger vehicles, SUVs, and light trucks. Engineered for safety and longevity.',
  },
  {
    name: 'FIRESTONE',
    logo: '/images/firestone.png',
    tagline: 'Trusted Reliability',
    description: 'Dependable all-season and all-terrain tires at competitive prices. A trusted name since 1900.',
  },
  {
    name: 'FUZION',
    logo: '/images/fuzion-logo.png',
    tagline: 'Value Performance',
    description: 'High-quality tires engineered by Bridgestone at budget-friendly prices without sacrificing safety.',
  },
];

export default function TireBrands() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <CircleDot className="h-4 w-4" />
            Authorized Tire Dealer
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            Premium <span className="text-primary">Tire</span> Brands
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="premium-card group p-8"
            >
              {/* Brand Logo */}
              <div className="mb-6 flex h-16 items-start">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-full object-contain grayscale transition-all group-hover:grayscale-0" 
                />
              </div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
                {brand.tagline}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {brand.description}
              </p>
              <Link
                href="/tires"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-dark cursor-pointer"
              >
                View Tires
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

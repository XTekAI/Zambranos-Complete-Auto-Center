'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';
import Script from 'next/script';
import { CircleDot, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../lib/i18n/LanguageContext';

const brandData = [
  { slug: 'bridgestone', name: 'BRIDGESTONE', logo: '/images/Bridgestone.png' },
  { slug: 'firestone', name: 'FIRESTONE', logo: '/images/firestone.png' },
  { slug: 'fuzion', name: 'FUZION', logo: '/images/fuzion-logo.png' },
] as const;

export default function TireBrands() {
  const { t } = useLanguage();

  const brands = brandData.map((b) => ({
    ...b,
    tagline: t.home.tireBrands.brands[b.slug].tagline,
    description: t.home.tireBrands.brands[b.slug].description,
  }));

  useEffect(() => {
    // @ts-ignore
    if (window.TCWidget) {
      // @ts-ignore
      window.TCWidget.init({
        apikey: "8f51859db3abe21e51e13fd2dae1857a",
        container: "tireconnect"
      });
    }
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <CircleDot className="h-4 w-4" />
            {t.home.tireBrands.badge}
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
            {t.home.tireBrands.headingPart1} <span className="text-primary">{t.home.tireBrands.headingPart2}</span> {t.home.tireBrands.headingPart3}
          </h2>
        </div>

        {/* TireConnect Widget */}
        <div className="mb-20">
          <div id="tireconnect" className="min-h-[400px] w-full bg-surface/30 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-100">
            <div className="text-center p-8">
              <CircleDot className="w-10 h-10 text-primary/20 mx-auto mb-3 animate-pulse" />
              <p className="text-muted text-sm font-medium">{t.home.tireBrands.loadingCatalog}</p>
            </div>
          </div>
          <Script 
            src="https://app.tireconnect.ca/js/widget.js" 
            strategy="afterInteractive"
            onLoad={() => {
              // @ts-ignore
              if (window.TCWidget) {
                // @ts-ignore
                window.TCWidget.init({
                  apikey: "8f51859db3abe21e51e13fd2dae1857a",
                  container: "tireconnect"
                });
              }
            }}
          />
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
                {t.home.tireBrands.viewTires}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

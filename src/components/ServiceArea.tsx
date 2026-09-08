'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import BusinessStatus from './BusinessStatus';
import { BUSINESS, LINKS, HOURS } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';

export default function ServiceArea() {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <MapPin className="h-4 w-4" />
              {t.home.serviceArea.badge}
            </span>

            <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl lg:text-5xl">
              {t.home.serviceArea.heading.prefix}{' '}
              <span className="text-primary">{t.home.serviceArea.heading.places}</span>{' '}
              {t.home.serviceArea.heading.suffix}
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted">
              {t.home.serviceArea.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="pill-badge-info">
                <div className="pill-icon">
                  <Navigation className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">{t.home.serviceArea.location.title}</h3>
                  <p className="text-sm text-white/60">{BUSINESS.address}</p>
                  <a
                    href={LINKS.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-bold text-primary transition-colors hover:text-white cursor-pointer"
                  >
                    {t.home.serviceArea.location.getDirections}
                  </a>
                </div>
              </div>

              <div className="pill-badge-info">
                <div className="pill-icon">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">{t.home.serviceArea.phone.title}</h3>
                  <a
                    href={BUSINESS.phoneTel}
                    className="text-lg font-bold text-white transition-colors hover:text-primary cursor-pointer"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="pill-badge-info">
                <div className="pill-icon">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-white">{t.home.serviceArea.hours.title}</h3>
                    <BusinessStatus lang={lang} />
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-white/60">
                    {HOURS.map((h) => (
                      <li key={h.dayKey} className={`flex justify-between ${h.time === 'Closed' ? 'text-primary' : ''}`}>
                        <span className={h.time === 'Closed' ? 'font-medium' : ''}>{t.common.hours[h.dayKey]}</span>
                        <span className={h.time === 'Closed' ? 'font-bold' : 'font-medium text-white'}>
                          {h.time === 'Closed' ? t.common.hours.closed : h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-72 md:h-[550px] overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.815340628355!2d-74.7356426!3d40.2186444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c159aa244419cb%3A0xeda66e2d8ae67a21!2sZambranos%20Complete%20Auto%20Center!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.home.serviceArea.mapTitle}
              className="grayscale transition-all duration-500 hover:grayscale-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

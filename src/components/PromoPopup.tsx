'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wrench, Calendar } from 'lucide-react';
import { LINKS, isPromoActive } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';
import AnimatedButton from './AnimatedButton';

const DISMISSED_KEY = 'zambranos_sept_2026_promo_dismissed';

export default function PromoPopup() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isPromoActive()) return;
    if (localStorage.getItem(DISMISSED_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISSED_KEY, 'true');
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-popup-title"
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-dark p-8 text-center shadow-2xl"
          >
            <button
              onClick={dismiss}
              aria-label={t.promoPopup.close}
              className="absolute right-4 top-4 rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
              <Wrench className="h-7 w-7 text-primary" />
            </div>

            <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">
              {t.promoPopup.badge}
            </span>

            <h2
              id="promo-popup-title"
              className="mt-4 font-display text-2xl font-black leading-tight text-white sm:text-3xl"
            >
              {t.promoPopup.titlePre}
              <span className="text-primary">{t.promoPopup.titleHighlight}</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              {t.promoPopup.description}
            </p>

            <div className="mt-6">
              <AnimatedButton
                text={t.promoPopup.cta}
                href={LINKS.appointment}
                icon={<Calendar className="h-5 w-5" />}
                className="w-full justify-center px-6 py-4 text-base text-white"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { Phone, MapPin, Star } from 'lucide-react';
import BusinessStatus from '../BusinessStatus';
import AnimatedButton from '../AnimatedButton';
import Logo from '../Logo';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageContext';
import { BUSINESS, LINKS } from '../../lib/constants';

export default function LandingNavbar() {
  const { lang, t } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="h-8 bg-dark text-white/80 hidden md:block border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[10px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-6">
            <a href={BUSINESS.phoneTel} className="flex items-center gap-1.5 transition-colors hover:text-white cursor-pointer">
              <Phone className="h-3 w-3 text-red-500" />
              {BUSINESS.phone}
            </a>
            <a href={LINKS.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-white cursor-pointer">
              <MapPin className="h-3 w-3 text-red-500" />
              {BUSINESS.address}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <BusinessStatus lang={lang} />
            <a href={LINKS.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-yellow-500 transition-colors hover:text-yellow-400 cursor-pointer">
              <Star className="h-3 w-3 fill-yellow-500" />
              {BUSINESS.rating} {t.nav.googleRating}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Simplified for Landing Page (No Links) */}
      <nav className="mx-auto max-w-7xl bg-dark/95 border-b border-white/10">
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageToggle />
            <AnimatedButton
              text={t.nav.callNow}
              href={BUSINESS.phoneTel}
              className="px-5 py-2.5 text-sm h-11"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

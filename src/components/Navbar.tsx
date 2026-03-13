'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Menu, X, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import BusinessStatus from './BusinessStatus';
import AnimatedButton from './AnimatedButton';
import { BUSINESS, LINKS } from '../lib/constants';

const NAV_LINKS = [
  { label: 'Tires', href: '/tires' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Financing', href: '/financing' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      {/* Top Info Bar - Hides on scroll */}
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'} hidden bg-dark text-white/80 md:block`}>
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
            <BusinessStatus />
            <a href={LINKS.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-yellow-500 transition-colors hover:text-yellow-400 cursor-pointer">
              <Star className="h-3 w-3 fill-yellow-500" />
              {BUSINESS.rating} Google Rating
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`mx-auto transition-all duration-300 ease-in-out ${
        isScrolled 
        ? 'mt-4 max-w-4xl rounded-2xl border border-white/10 bg-dark/60 backdrop-blur-xl shadow-2xl' 
        : 'max-w-7xl bg-dark/95'
      }`}>
        <div className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
          <Link href="/" className="group flex items-center gap-1 cursor-pointer">
            <span className="font-display text-xl font-black tracking-tighter text-white">
              ZAMBRANO&apos;S
            </span>
            <span className="font-display text-xl font-black tracking-tighter text-red-600">
              AUTO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-bold text-white/70 transition-colors hover:text-white cursor-pointer"
              >
                {link.label}
                <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
            <AnimatedButton 
              text="Schedule"
              href={LINKS.appointment}
              className={`transition-all duration-300 ${isScrolled ? 'px-4 py-2 text-xs h-9' : 'px-5 py-2.5 text-sm h-11'}`}
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/10 bg-dark/95 backdrop-blur-xl md:hidden rounded-b-2xl"
            >
              <div className="flex flex-col gap-2 px-6 py-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-bold text-white/80 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center px-4">
                    <BusinessStatus />
                  </div>
                  <AnimatedButton 
                    text={`Call Now`}
                    href={BUSINESS.phoneTel}
                    className="w-full px-5 py-4 text-base h-14"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

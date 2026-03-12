'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Menu, X, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import BusinessStatus from './BusinessStatus';
import { BUSINESS, LINKS } from '../lib/constants';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Commercial Fleet', href: '/#commercial' },
  { label: 'Financing', href: '/financing' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden bg-dark text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.phoneTel}
              className="flex items-center gap-1.5 transition-colors hover:text-white cursor-pointer"
            >
              <Phone className="h-3 w-3" />
              {BUSINESS.phone}
            </a>
            <a
              href={LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white cursor-pointer"
            >
              <MapPin className="h-3 w-3" />
              {BUSINESS.address}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <BusinessStatus />
            <a
              href={LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-yellow-400 transition-colors hover:text-yellow-300 cursor-pointer"
            >
              <Star className="h-3 w-3 fill-yellow-400" />
              {BUSINESS.rating} Stars · {BUSINESS.reviewCount} Reviews
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-dark/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-1 cursor-pointer">
            <span className="font-display text-xl font-black tracking-tight text-white">
              ZAMBRANO&apos;S
            </span>
            <span className="font-display text-xl font-black tracking-tight text-primary">
              AUTO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white cursor-pointer"
              >
                {link.label}
                <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
            <a
              href={LINKS.appointment}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
            >
              Schedule Service
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 bg-dark md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
                  <BusinessStatus />
                </div>
                <a
                  href={BUSINESS.phoneTel}
                  className="mt-2 rounded-xl bg-primary px-5 py-3 text-center text-sm font-bold text-white cursor-pointer"
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

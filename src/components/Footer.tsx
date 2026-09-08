'use client';

import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS, LINKS } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';
import Logo from './Logo';

const socials = [
  { icon: Facebook, href: LINKS.facebook, label: 'Facebook' },
  { icon: Instagram, href: LINKS.instagram, label: 'Instagram' },
  { icon: Twitter, href: LINKS.twitter, label: 'Twitter / X' },
];

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.common.footer.quickLinks.home, href: '/' },
    { label: t.common.footer.quickLinks.services, href: '/services' },
    { label: t.common.footer.quickLinks.about, href: '/about' },
    { label: t.common.footer.quickLinks.commercial, href: '/#commercial' },
    { label: t.common.footer.quickLinks.financing, href: '/financing' },
  ];

  const serviceLinks = [
    t.common.footer.specialties.suspension,
    t.common.footer.specialties.brakes,
    t.common.footer.specialties.alignment,
    t.common.footer.specialties.tires,
    t.common.footer.specialties.fleet,
    t.common.footer.specialties.ac,
  ];

  return (
    <footer className="bg-dark text-white/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="mb-6" />
            <p className="mb-6 text-sm leading-relaxed">
              {t.common.footer.brandBlurb(BUSINESS.established)}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-lg bg-white/5 p-3 text-white/40 transition-colors hover:bg-primary/20 hover:text-primary cursor-pointer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t.common.footer.quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-primary cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t.common.footer.specialtiesTitle}</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link href="/services" className="transition-colors hover:text-primary cursor-pointer">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t.common.footer.contactTitle}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={LINKS.google} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white cursor-pointer">
                  1017 Hamilton Ave<br />Trenton, NJ 08629
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={BUSINESS.phoneTel} className="text-lg font-bold text-white transition-colors hover:text-primary cursor-pointer">
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. {t.common.footer.rightsReserved}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/40 transition-colors hover:text-primary">
              {t.common.footer.privacyPolicy}
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="text-white/40 transition-colors hover:text-primary">
              {t.common.footer.termsOfService}
            </Link>
            <span className="text-white/20">·</span>
            <p className="text-white/30">
              {t.common.footer.websiteBy}{' '}
              <a
                href="https://www.xtekai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 font-semibold transition-colors hover:text-primary"
              >
                XtekAI
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS, LINKS } from '../lib/constants';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Commercial Fleet', href: '/#commercial' },
  { label: 'Financing', href: '/financing' },
];

const serviceLinks = [
  'Suspension Repair',
  'Brake Services',
  'Wheel Alignment',
  'Tire Installation',
  'Fleet Maintenance',
  'AC Service',
];

const socials = [
  { icon: Facebook, href: LINKS.facebook, label: 'Facebook' },
  { icon: Instagram, href: LINKS.instagram, label: 'Instagram' },
  { icon: Twitter, href: LINKS.twitter, label: 'Twitter / X' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-1 cursor-pointer">
              <span className="font-display text-xl font-black text-white">ZAMBRANO&apos;S</span>
              <span className="font-display text-xl font-black text-primary">AUTO</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              Veteran-owned &amp; family operated auto repair serving Trenton since{' '}
              {BUSINESS.established}. Specialists in suspension, brakes, tires &amp; commercial fleet services.
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
                    className="rounded-lg bg-white/5 p-2 text-white/40 transition-colors hover:bg-primary/20 hover:text-primary cursor-pointer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
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
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Specialties</h4>
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
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
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
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="text-white/30">Veteran-Owned &amp; Family Operated Since {BUSINESS.established}</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import LandingNavbar from '../../src/components/landing/LandingNavbar';
import LandingHero from '../../src/components/landing/LandingHero';
import { Shield, Award, MapPin, Wrench, PhoneCall, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS, LINKS } from '../../src/lib/constants';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - BUSINESS.established;

  const reasons = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description:
        'Highly trained specialists in suspension, brakes, and alignment — not just general mechanics.',
    },
    {
      icon: Shield,
      title: 'Veteran-Owned Trust',
      description:
        'Military-grade discipline and integrity. We stand behind every job with comprehensive warranties.',
    },
    {
      icon: MapPin,
      title: 'Local Since 1997',
      description:
        `Proudly serving Trenton for ${yearsOfService}+ years with honest, transparent pricing and reliable service.`,
    },
    {
      icon: Wrench,
      title: 'Modern Equipment',
      description:
        'We invest in the latest diagnostic and alignment technology to ensure precision repairs every time.',
    },
  ];

  return (
    <>
      <LandingNavbar />
      <main className="bg-dark">
        {/* Full Screen Hero Section */}
        <LandingHero />
        
        {/* Dedicated Support / Emergency Section */}
        <section className="bg-dark/80 py-12 border-y border-white/5 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col text-center md:text-left">
              <span className="text-red-500 font-black uppercase text-xs tracking-[0.2em] mb-2">Emergency Service</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Need immediate assistance?</h2>
              <p className="text-gray-400 font-medium">Call our veteran-owned shop directly for same-day service.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://appointments.zambranoscomplete.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button group !rounded-2xl !py-5 !px-8 flex"
              >
                <span className="anim-text flex items-center justify-center gap-3 text-base font-black uppercase tracking-widest">
                  <Calendar className="h-5 w-5" /> Book Online
                </span>
                <span className="anim-bg" />
              </a>
              <a
                href={BUSINESS.phoneTel}
                className="animated-button group !rounded-2xl !py-5 !px-8 flex !bg-white/10 !border !border-white/20"
              >
                <span className="anim-text flex items-center justify-center gap-3 text-base font-black uppercase tracking-widest">
                  <PhoneCall className="h-5 w-5" /> {BUSINESS.phone}
                </span>
                <span className="anim-bg" />
              </a>
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section id="booking" className="bg-white py-24 border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
                <Calendar className="h-4 w-4" />
                Online Booking
              </span>
              <h2 className="font-display text-4xl font-black tracking-tight text-dark md:text-5xl mt-4">
                Book Your <span className="text-primary">Service</span> Online
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Choose your service, pick a date and time, and confirm your appointment — all in under 2 minutes.
              </p>

              <a
                href="https://appointments.zambranoscomplete.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-14 py-6 text-xl font-black uppercase tracking-widest text-white shadow-2xl shadow-red-600/40 transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-red-600/60"
              >
                <Calendar className="h-6 w-6" />
                Book My Appointment
              </a>

              <p className="mt-6 text-sm text-muted">
                Mon – Fri: 8:30 AM – 6:00 PM &nbsp;·&nbsp; Sat: 8:30 AM – 2:00 PM
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose Us - Exactly like main page but adapted */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-dark">
                Why Choose <span className="text-primary">Zambranos</span>?
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-muted font-medium">
                When it comes to your vehicle&apos;s safety and performance, you need
                specialists you can trust in Trenton since {BUSINESS.established}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="premium-card group p-10 flex flex-col items-center text-center shadow-xl border border-gray-100 hover:border-primary transition-all rounded-[2rem] bg-surface/50"
                  >
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform group-hover:scale-125 group-hover:rotate-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-4 font-display text-xl font-bold tracking-tight text-dark uppercase">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted font-medium">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Minimal Landing Footer with Functional Links */}
        <footer className="bg-dark border-t border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center md:items-start">
                   <span className="text-xl font-black text-red-600 uppercase tracking-widest mb-6 border-b-2 border-red-600/30 pb-2">Zambranos Auto Center</span>
                   <a 
                     href={LINKS.google}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-white transition-colors"
                   >
                     <MapPin className="h-5 w-5 text-red-600" />
                     {BUSINESS.address}
                   </a>
                   <a 
                     href={BUSINESS.phoneTel}
                     className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-white transition-colors mt-4"
                   >
                     <PhoneCall className="h-5 w-5 text-red-600" />
                     {BUSINESS.phone}
                   </a>
                </div>
                
                <div className="flex flex-col items-center">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Veteran Owned Precision</span>
                   <p className="text-center text-xs font-medium text-gray-500 max-w-xs uppercase leading-relaxed tracking-wider">
                     Serving Trenton since {BUSINESS.established}. Dedicated to excellence in automotive service.
                   </p>
                </div>

                <div className="flex justify-center md:justify-end">
                   <div className="text-right text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                     © {new Date().getFullYear()} Zambranos Complete Auto Center.<br/>All Rights Reserved.
                   </div>
                </div>
             </div>
          </div>
        </footer>
      </main>
    </>
  );
}

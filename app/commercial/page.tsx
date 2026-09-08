'use client';

import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FinalCTA from '../../src/components/FinalCTA';
import AnimatedButton from '../../src/components/AnimatedButton';
import { BUSINESS } from '../../src/lib/constants';
import { Truck, ShieldCheck, Clock, Zap, Settings, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../../src/lib/i18n/LanguageContext';

export default function CommercialPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/zambrano-van-real.jpg"
            alt={t.commercial.hero.imageAlt}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <Truck className="h-4 w-4" />
            {t.commercial.hero.badge}
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="bg-red-600 text-white px-4 py-1 inline-block transform -rotate-1">{t.commercial.hero.titleLine1}</span> <br />
            <span className="text-red-600 block mt-2">{t.commercial.hero.titleLine2}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white text-lg font-medium leading-relaxed mb-10 drop-shadow-md">
            {t.commercial.hero.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton
              href={BUSINESS.phoneTel}
              text={t.commercial.hero.ctaCall}
              className="px-8 py-4 bg-primary text-white font-bold"
            />
            <AnimatedButton
              href="/#contact"
              text={t.commercial.hero.ctaLocation}
              className="px-8 py-4 border-2 border-white/20 text-white font-bold hover:bg-white/10"
            />
          </div>
        </div>
      </section>

      {/* Why Zambrano's Section */}
      <section className="py-24 bg-white rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-black text-dark mb-6 tracking-tight">
                {t.commercial.why.headingPart1} <br />
                <span className="text-primary">{t.commercial.why.headingHighlight}</span>
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                {t.commercial.why.description}
              </p>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: t.commercial.why.features.priorityLane.title, desc: t.commercial.why.features.priorityLane.desc },
                  { icon: ShieldCheck, title: t.commercial.why.features.warranty.title, desc: t.commercial.why.features.warranty.desc },
                  { icon: Zap, title: t.commercial.why.features.speed.title, desc: t.commercial.why.features.speed.desc }
                ].map((item, idx) => (
                  <div key={idx} className="pill-badge-info">
                    <div className="pill-icon">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-72 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/zambrano-van-real.jpg"
                alt={t.commercial.why.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-white font-bold text-lg mb-1">{t.commercial.why.servingTitle}</p>
                <p className="text-white/80 text-sm">Trenton • Hamilton • Ewing • Lawrenceville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-dark mb-4">{t.commercial.services.heading}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.commercial.services.items.suspension.title, icon: Settings, desc: t.commercial.services.items.suspension.desc },
              { title: t.commercial.services.items.braking.title, icon: ShieldCheck, desc: t.commercial.services.items.braking.desc },
              { title: t.commercial.services.items.dot.title, icon: TrendingUp, desc: t.commercial.services.items.dot.desc },
              { title: t.commercial.services.items.eSeries.title, icon: Truck, desc: t.commercial.services.items.eSeries.desc },
              { title: t.commercial.services.items.fSeries.title, icon: Zap, desc: t.commercial.services.items.fSeries.desc },
              { title: t.commercial.services.items.tireFleet.title, icon: TrendingUp, desc: t.commercial.services.items.tireFleet.desc }
            ].map((s, i) => (
              <div key={i} className="pill-badge-info flex-col items-start !rounded-2xl !p-8">
                <div className="pill-icon">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-white">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12">
        <FinalCTA />
      </section>
      
      <Footer />
    </main>
  );
}

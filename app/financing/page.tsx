'use client';

import { motion } from 'motion/react';
import {
  CreditCard,
  Shield,
  CheckCircle2,
  Phone,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Image from 'next/image';
import { BUSINESS, LINKS } from '../../src/lib/constants';

const cfnaFeatures = [
  'No annual fee',
  '6 months promotional financing on qualifying purchases',
  'Accepted at thousands of locations nationwide',
  'Easy online account management',
  'Use at Bridgestone, Firestone, and affiliated retailers',
  'Special promotional offers throughout the year',
];

const affFeatures = [
  'All credit types welcome',
  'Approvals up to $5,000',
  'Quick and easy application',
  'Flexible repayment terms',
  'No hard credit pull for pre-approval',
  'Use for any auto service or tires',
];

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-dark py-20 pt-32 lg:pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <CreditCard className="h-4 w-4" />
                Flexible Payment Options
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-none">
                <span className="text-white drop-shadow-lg">Affordable</span> <span className="text-red-600 drop-shadow-lg">Financing</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/60">
                Don&apos;t let budget stop you from getting the service you need.
                We offer flexible financing through two trusted partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CFNA Priority Section */}
        <section className="bg-white py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col items-center gap-12 lg:flex-row"
            >
              {/* Image Side */}
              <div className="relative w-full max-w-[600px] flex-shrink-0">
                <div className="absolute -inset-10 bg-red-600/5 rounded-full blur-3xl" />
                <Image 
                  src="/images/financing-card.png"
                  alt="Bridgestone Firestone Credit Card"
                  width={700}
                  height={450}
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Text Side */}
              <div className="flex-1">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <CreditCard className="h-4 w-4" />
                  Primary Recommendation
                </span>
                <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl mb-6">
                  BRIDGESTONE <span className="text-primary">FIRESTONE</span> CREDIT CARD
                </h2>
                
                <div className="mb-8 flex items-center gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10 max-w-md">
                  <div className="h-16 w-16 bg-primary flex items-center justify-center rounded-2xl shrink-0">
                    <span className="font-display text-2xl font-black text-white">6</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-xl leading-none">MONTHS</h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">No Interest Financing</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-muted mb-8">
                  Get the repairs or tires you need today without the immediate financial burden. The Bridgestone / Firestone credit card, which we proudly accept as an authorized dealer, offers interest-free financing for emergency repairs and premium tire sets.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {cfnaFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text font-medium">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={LINKS.financingCFNA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 shadow-xl shadow-red-600/20"
                >
                  <CreditCard className="h-5 w-5" />
                  Apply in Minutes
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AFF Secondary Section */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="premium-card relative overflow-hidden p-8 md:p-16 border-l-8 border-l-green-500"
            >
              <div className="grid lg:grid-cols-2 items-center gap-12">
                <div>
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-600">
                    <DollarSign className="h-4 w-4" />
                    Alternative Financing
                  </span>
                  <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl mb-6">
                    AMERICAN FIRST <span className="text-green-600">FINANCE</span>
                  </h2>
                  <p className="text-lg text-muted mb-8">
                    Don't let credit history stand in your way. American First Finance offers lease-to-own and installment options with high approval rates up to $5,000.
                  </p>
                  
                  <div className="flex gap-4 mb-8">
                    {['No Hard Credit Pull', 'Instant Approval', 'Flexible Terms'].map(badge => (
                      <span key={badge} className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-dark shadow-sm border border-black/5">
                        {badge}
                      </span>
                    ))}
                  </div>

                  <a
                    href={LINKS.financingAFF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-dark px-10 py-5 text-lg font-bold text-white transition-all hover:bg-green-600 shadow-xl"
                  >
                    <ArrowRight className="h-5 w-5" />
                    Apply with AFF
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {affFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-white">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="font-medium text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                HOW <span className="text-primary">FINANCING</span> WORKS
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Getting approved is quick and easy. Here&apos;s what to expect.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  icon: CreditCard,
                  title: 'Apply Online',
                  desc: 'Complete the quick application through our partner links. Most applications take less than 5 minutes.',
                },
                {
                  step: '02',
                  icon: Clock,
                  title: 'Instant Decision',
                  desc: 'Get an immediate response on your approval amount and terms so you know exactly what your budget is.',
                },
                {
                  step: '03',
                  icon: Shield,
                  title: 'Flexible Payments',
                  desc: 'Once approved, simple schedule your service and use your new financing to pay for your repairs or tires.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="premium-card relative p-8"
                  >
                    <span className="font-display text-5xl font-black text-primary/10">
                      {item.step}
                    </span>
                    <div className="mt-4 mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <a
                href={BUSINESS.phoneTel}
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110 cursor-pointer"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Call to Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-sm text-muted">
                Our team will help you find the best option for your budget.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

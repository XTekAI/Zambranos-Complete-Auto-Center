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

        {/* Financing Options */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* CFNA / Firestone Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="premium-card overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-dark p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-primary/20 p-3">
                      <CreditCard className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Primary Option
                      </span>
                      <h2 className="font-display text-2xl font-bold text-white">
                        CFNA / Firestone Credit Card
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary px-4 py-2">
                      <span className="font-display text-lg font-black text-white">
                        6 Months
                      </span>
                    </div>
                    <span className="text-lg font-bold text-white/80">
                      No Interest Financing
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="mb-6 leading-relaxed text-muted">
                    The Firestone Complete Auto Care credit card, issued by CFNA
                    (Credit First National Association), offers 6 months
                    promotional financing on qualifying purchases of $199 or
                    more.
                  </p>
                  <ul className="space-y-3">
                    {cfnaFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-text"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={LINKS.financingCFNA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer sm:w-auto"
                  >
                    <CreditCard className="h-4 w-4" />
                    Apply Now
                  </a>
                </div>
              </motion.div>

              {/* American First Finance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="premium-card overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-dark p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-green-500/20 p-3">
                      <DollarSign className="h-7 w-7 text-green-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                        All Credit Welcome
                      </span>
                      <h2 className="font-display text-2xl font-bold text-white">
                        American First Finance
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-500 px-4 py-2">
                      <span className="font-display text-lg font-black text-white">
                        Up to $5,000
                      </span>
                    </div>
                    <span className="text-lg font-bold text-white/80">
                      Approval Amount
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="mb-6 leading-relaxed text-muted">
                    American First Finance provides lease-to-own and installment
                    loan options for customers of all credit backgrounds. Get
                    approved quickly and pay over time.
                  </p>
                  <ul className="space-y-3">
                    {affFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-text"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={LINKS.financingAFF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dark px-6 py-4 text-sm font-bold text-white transition-all hover:bg-primary cursor-pointer sm:w-auto"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                How <span className="text-primary">Financing</span> Works
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Getting approved is quick and easy. Here&apos;s what to expect.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  icon: Users,
                  title: 'Visit or Call',
                  desc: `Come to our shop at ${BUSINESS.address} or call ${BUSINESS.phone} to discuss your service needs.`,
                },
                {
                  step: '02',
                  icon: Clock,
                  title: 'Quick Application',
                  desc: 'Apply in-store in minutes. We\'ll help you choose the best financing option for your situation.',
                },
                {
                  step: '03',
                  icon: Shield,
                  title: 'Get Service Today',
                  desc: 'Once approved, we\'ll get started on your repairs immediately. Drive away with confidence.',
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
                    <h3 className="font-display text-xl font-bold text-dark">
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

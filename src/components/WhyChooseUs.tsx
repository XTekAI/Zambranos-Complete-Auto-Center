'use client';

import { motion } from 'motion/react';
import { Shield, Award, MapPin, Wrench } from 'lucide-react';

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
      'Proudly serving Trenton for 27+ years with honest, transparent pricing and reliable service.',
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description:
      'We invest in the latest diagnostic and alignment technology to ensure precision repairs every time.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
            Why Choose <span className="text-primary">Zambrano&apos;s</span>?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            When it comes to your vehicle&apos;s safety and performance, you need
            specialists you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-surface p-8 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_16px_#c8c8c8,-8px_-8px_16px_#ffffff]"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-dark">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

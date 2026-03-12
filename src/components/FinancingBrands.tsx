'use client';

import { motion } from 'motion/react';
import { CreditCard, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FinancingBrands() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-dark p-8 md:flex-row md:p-10"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-primary/20 p-3">
              <CreditCard className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-white">
                Financing Available
              </p>
              <p className="text-sm text-white/60">
                Up to 6 months no interest through CFNA &middot; All credit
                welcome with American First Finance
              </p>
            </div>
          </div>
          <Link
            href="/financing"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

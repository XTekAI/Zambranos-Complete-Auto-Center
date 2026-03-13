'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';
import { LINKS } from '../lib/constants';

export default function FinancingBrands() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="premium-card relative flex flex-col items-center justify-center gap-10 p-8 md:flex-row md:p-16"
        >
          {/* Card Image Side */}
          <div className="relative w-full max-w-full md:max-w-[550px] flex-shrink-0 group">
             <div className="absolute -inset-10 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <Image 
                src="/images/financing-card.png"
                alt="Bridgestone Firestone Credit Card"
                width={700}
                height={400}
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform transition-transform duration-500 hover:-rotate-1 hover:scale-105"
             />
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            <span className="text-gray-600 text-xl md:text-2xl font-medium tracking-tight mb-1">
              check out our available
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-dark leading-none tracking-tighter mb-8">
              FINANCING
            </h2>
            
            <div className="w-full flex justify-center md:justify-start">
               <AnimatedButton
                href={LINKS.financingCFNA}
                text="learn more"
                className="btn-dark px-12 py-4 text-lg font-bold"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

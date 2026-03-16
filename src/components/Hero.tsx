'use client';

import { motion } from 'motion/react';
import { Star, Shield, Calendar, CircleDot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, LINKS } from '../lib/constants';
import AnimatedButton from './AnimatedButton';

const transitionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - BUSINESS.established;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark">
      {/* Decorative Light Leaks */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.1)_0,hsla(0,0%,55%,.05)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.08)_0,hsla(0,0%,45%,.04)_80%,transparent_100%)] [translate:5%_-50%]" />
      </div>

      <Image
        src="/images/hero-truck.jpg"
        alt="Ford Super Duty truck in the desert"
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/70 to-dark" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 md:pt-40 pb-16 md:pb-24 text-center">
        <motion.div
          variants={transitionVariants.container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={transitionVariants.item} className="mb-12 flex flex-wrap justify-center items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/30 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm border border-blue-400/20">
              <Shield className="h-3.5 w-3.5" />
              Veteran-Owned &amp; Family Operated
            </span>
            <a
              href={LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-4 py-1.5 text-xs font-semibold text-yellow-300 backdrop-blur-sm border border-yellow-400/20 transition-colors hover:bg-yellow-500/30 cursor-pointer"
            >
              <Star className="h-3.5 w-3.5 fill-yellow-400" />
              {BUSINESS.rating} Stars · {BUSINESS.reviewCount} Google Reviews
            </a>
          </motion.div>

          <motion.h1 
            variants={transitionVariants.item}
            className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl max-w-5xl text-center"
          >
            <span className="text-red-500">Veteran-Owned{' '}</span>
            <span className="text-red-600 border-b-4 border-red-600/30">Excellence</span> 
            <span className="text-red-500"> in Trenton</span>
            <span className="text-red-600">.</span>
          </motion.h1>

          <motion.p 
            variants={transitionVariants.item}
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-red-400/90 font-medium text-center"
          >
            Since {BUSINESS.established}, delivering expert suspension, brakes, tires &amp;
            commercial fleet services with military-grade precision. Same-day service available.
          </motion.p>

          <motion.div 
            variants={transitionVariants.item}
            className="mt-12 flex flex-col gap-4 sm:flex-row justify-center w-full"
          >
            <AnimatedButton 
              text="Schedule Service"
              href={LINKS.appointment}
              icon={<Calendar className="h-5 w-5" />}
              className="px-6 py-4 md:px-10 md:py-5 text-base md:text-lg text-white"
            />
            <AnimatedButton 
              text="Search Tires"
              href="/tires"
              icon={<CircleDot className="h-5 w-5" />}
              className="border-2 border-white/20 text-white backdrop-blur-sm shadow-none hover:shadow-none px-6 py-4 md:px-10 md:py-5 text-base md:text-lg"
            />
          </motion.div>

          <motion.div
            variants={transitionVariants.item}
            className="mt-12 md:mt-16 flex justify-center gap-6 md:gap-12 border-t border-white/10 pt-8 md:pt-10 w-full max-w-2xl"
          >
            {[
              { value: `${yearsOfService}+`, label: 'Years Experience' },
              { value: `${BUSINESS.reviewCount}+`, label: 'Google Reviews' },
              { value: `${BUSINESS.rating}★`, label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-display text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

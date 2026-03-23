'use client';

import { motion } from 'motion/react';
import { Shield, Star, Award, ThumbsUp, Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import { BUSINESS, LINKS } from '../../lib/constants';
import AnimatedButton from '../AnimatedButton';

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

export default function LandingHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-dark">
      {/* Reusing existing Hero Image */}
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 md:pb-24">
        <motion.div
           variants={transitionVariants.container}
           initial="hidden"
           animate="visible"
           className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Badge Section */}
          <motion.div variants={transitionVariants.item} className="mb-12 flex flex-wrap justify-center items-center gap-3">
            <span className="pill-badge-info !py-2 !px-4 !gap-2 !text-xs !bg-blue-900/30 !border-blue-400/20 hover:shadow-blue-500/20">
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="font-black uppercase tracking-widest text-blue-300">Veteran-Owned Excellence</span>
            </span>
            <a
              href={LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-badge-info !py-2 !px-4 !gap-2 !text-xs !bg-yellow-500/10 !border-yellow-400/20 hover:shadow-yellow-500/20"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-black uppercase tracking-widest text-yellow-400">{BUSINESS.rating} Google Rating</span>
            </a>
            <a
              href={LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-badge-info !py-2 !px-4 !gap-2 !text-xs !bg-red-500/10 !border-red-400/20 hover:shadow-red-500/20"
            >
              <Award className="h-4 w-4 text-red-500" />
              <span className="font-black uppercase tracking-widest text-red-500">250+ Customer Reviews</span>
            </a>
          </motion.div>

          {/* Hook Headline */}
          <motion.h1 
            variants={transitionVariants.item}
            className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"
          >
            <span className="text-red-500">Feeling{' '}</span>
            <span className="text-red-600 border-b-6 border-red-600/30">Vibrations</span> 
            <span className="text-red-500"> In Your Steering?</span>
          </motion.h1>

          <motion.p 
            variants={transitionVariants.item}
            className="mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-red-400/90 font-medium"
          >
            Don't compromise your safety. Since {BUSINESS.established}, we've provided military-grade precision in alignments, suspension, and brakes. 
            Trusted by Trenton drivers for {new Date().getFullYear() - BUSINESS.established}+ years.
          </motion.p>

          {/* Emergency / Action Section */}
          <motion.div 
            variants={transitionVariants.item}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <div className="flex flex-wrap justify-center gap-4">
               <AnimatedButton 
                 text="Book Appointment"
                 href="#appointment-form"
                 icon={<Calendar className="h-5 w-5" />}
                 className="px-8 py-5 text-lg"
               />
               <AnimatedButton 
                 text="Call (609) 396-8417"
                 href={BUSINESS.phoneTel}
                 icon={<Phone className="h-5 w-5" />}
                 className="btn-dark px-8 py-5 text-lg !bg-white/10 backdrop-blur-sm border-2 border-white/20 !text-white"
               />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50 animate-pulse">
              Emergency? Need help now? Click call above.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

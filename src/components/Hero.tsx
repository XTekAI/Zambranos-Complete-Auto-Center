import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

export default function Hero() {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070&auto=format&fit=crop"
          alt="Auto Repair Shop"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-500 text-sm font-semibold mb-6 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              Trenton's Suspension & Brake Specialists
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Expert <span className="text-red-600">Suspension</span>, <span className="text-red-600">Brakes</span> & <span className="text-red-600">Tires</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 font-medium max-w-2xl leading-relaxed">
              Same-day service you can trust. Serving Trenton since 1997, we specialize in keeping passenger and commercial vehicles safe on the road.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <AnimatedButton text="Call Now" href="tel:609-396-8417" variant="red" className="w-full sm:w-auto" />
              <AnimatedButton text="Schedule Appointment" href="#contact" variant="white" className="w-full sm:w-auto" />
            </div>

            {/* Financing Badge */}
            <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-4 rounded-xl max-w-md">
              <div className="bg-zinc-800 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">Up to 12 Months No Interest</p>
                <p className="text-sm text-zinc-400">Financing available on tires & qualifying services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

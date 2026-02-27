import { motion } from 'motion/react';
import AnimatedButton from './AnimatedButton';

export default function FinancingBrands() {
  return (
    <section id="financing" className="bg-white py-24 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Credit Card Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-[420px] aspect-[1.6/1] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-300 border border-zinc-200 group hover:rotate-0 transition-transform duration-500"
          >
            {/* Top Half - Logos */}
            <div className="absolute top-0 inset-x-0 h-[55%] bg-gradient-to-b from-white to-zinc-100 flex flex-col items-center justify-center pt-2">
              <span className="font-black text-3xl tracking-tighter text-zinc-900 leading-none">BRIDGESTONE</span>
              <span className="font-black text-3xl tracking-tighter text-red-600 italic leading-none mt-1">Firestone</span>
            </div>
            
            {/* Divider Lines */}
            <div className="absolute top-[55%] inset-x-0 h-2 bg-zinc-400 shadow-inner"></div>
            <div className="absolute top-[55%] mt-2 inset-x-0 h-1 bg-zinc-800"></div>

            {/* Bottom Half - Tread & Info */}
            <div className="absolute bottom-0 inset-x-0 h-[42%] bg-zinc-900 overflow-hidden flex flex-col justify-end p-6">
              {/* Fake Tread Pattern */}
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div className="text-zinc-200 font-mono drop-shadow-md">
                  <div className="text-xl tracking-[0.2em] mb-1">123 456 789</div>
                  <div className="text-xs tracking-widest opacity-80">JOHN Q PUBLIC</div>
                </div>
                <div className="text-white font-bold italic tracking-wider flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-white transform rotate-45"></div>
                  CFNA
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-normal text-zinc-800 mb-1">
              check out our available
            </h2>
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tight mb-8">
              FINANCING
            </h3>
            
            <AnimatedButton text="learn more" href="tel:609-396-8417" variant="outline-red" className="w-full sm:w-auto" />

            <p className="mt-8 text-sm text-zinc-500 max-w-md">
              As an official retailer for Bridgestone and Firestone, we offer exclusive financing options through CFNA. Get the tires and repairs you need today!
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

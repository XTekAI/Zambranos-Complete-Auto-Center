import { motion } from 'motion/react';
import { Truck, Clock, ShieldCheck } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

export default function CommercialSection() {
  return (
    <section id="commercial" className="relative bg-zinc-950 text-white overflow-hidden py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
          alt="Commercial Fleet"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-500 text-sm font-bold mb-6 uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              Fleet & Work Trucks
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Keep Your Business <span className="text-red-600">Moving Forward</span>
            </h2>
            
            <p className="text-xl text-zinc-300 mb-8 font-medium leading-relaxed">
              We understand that downtime costs you money. Our commercial vehicle services are designed for fast turnaround and priority scheduling.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-red-600/20 p-3 rounded-xl h-fit">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Priority Service</h3>
                  <p className="text-zinc-400">Jump to the front of the line. We prioritize commercial vehicles to get you back to work faster.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-red-600/20 p-3 rounded-xl h-fit">
                  <ShieldCheck className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Heavy-Duty Expertise</h3>
                  <p className="text-zinc-400">Specialized equipment and technicians trained for heavy-duty suspension, brakes, and commercial tires.</p>
                </div>
              </div>
            </div>

            <AnimatedButton text="Call for Fleet Services" href="tel:609-396-8417" variant="red" className="w-full sm:w-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
              alt="Mechanic working on truck"
              className="relative z-10 rounded-2xl shadow-2xl border border-zinc-800 object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

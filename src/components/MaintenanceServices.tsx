import { motion } from 'motion/react';
import { CheckCircle2, Droplet, Battery, Lightbulb, Settings2 } from 'lucide-react';

const maintenanceServices = [
  { name: 'Oil Changes', icon: <Droplet className="w-5 h-5" /> },
  { name: 'Filter Replacements', icon: <Settings2 className="w-5 h-5" /> },
  { name: 'Fluid Services', icon: <Droplet className="w-5 h-5" /> },
  { name: 'Battery Replacement', icon: <Battery className="w-5 h-5" /> },
  { name: 'Wiper Blades', icon: <Settings2 className="w-5 h-5" /> },
  { name: 'Lighting Replacement', icon: <Lightbulb className="w-5 h-5" /> },
];

export default function MaintenanceServices() {
  return (
    <section className="bg-zinc-100 py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 mb-6 tracking-tight">
                Routine <span className="text-red-600">Maintenance</span>
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                While we specialize in complex suspension and brake systems, we also provide essential maintenance services to keep your vehicle running smoothly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-red-200 transition-colors">
                    <div className="text-red-600 bg-red-100 p-2 rounded-md">
                      {service.icon}
                    </div>
                    <span className="font-semibold text-zinc-800">{service.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1635438837136-128c77aa71e4?q=80&w=2070&auto=format&fit=crop"
                alt="Mechanic changing oil"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl mb-2">Keep Your Engine Healthy</p>
                <p className="text-zinc-200 text-sm">Regular oil changes and fluid checks prevent costly repairs down the road.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

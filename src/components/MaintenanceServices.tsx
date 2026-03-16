'use client';

import { motion } from 'motion/react';
import {
  Droplet,
  Battery,
  Lightbulb,
  Settings2,
  Wind,
  Thermometer,
} from 'lucide-react';
import Image from 'next/image';

const maintenanceItems = [
  { name: 'Oil Changes', icon: Droplet },
  { name: 'Filter Replacements', icon: Settings2 },
  { name: 'Fluid Services', icon: Thermometer },
  { name: 'Battery Replacement', icon: Battery },
  { name: 'Wiper Blades', icon: Wind },
  { name: 'Lighting', icon: Lightbulb },
];

export default function MaintenanceServices() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="premium-card relative overflow-hidden p-8 md:p-12">
          {/* Decorative */}
          <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Routine <span className="text-primary">Maintenance</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Beyond our specialty services, we keep your vehicle running
                smoothly with essential maintenance at competitive prices.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {maintenanceItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="pill-badge"
                    >
                      <div className="pill-icon">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="pill-text">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 md:h-[400px] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="/images/inspection.jpg"
                alt="Mechanic performing maintenance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl font-bold text-white">
                  Keep Your Engine Healthy
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Regular maintenance prevents costly repairs down the road.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

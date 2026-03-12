'use client';

import { motion } from 'motion/react';
import {
  Wrench,
  ArrowRight,
  CircleDot,
  Move,
  Disc,
  Truck,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Suspension Repair',
    description:
      'Shocks, struts, control arms & steering components. Expert diagnostics for a smooth, safe ride.',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1596464619711-6415e6b189a8?w=800&q=80',
    href: '/services#suspension',
  },
  {
    title: 'Brake Services',
    description:
      'Complete brake system repair — pads, rotors, calipers & fluid flush for optimal stopping power.',
    icon: Disc,
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    href: '/services#brakes',
  },
  {
    title: 'Wheel Alignment',
    description:
      'Precision computerized alignment extends tire life and improves handling and fuel economy.',
    icon: Move,
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    href: '/services#alignment',
  },
  {
    title: 'Tire Services',
    description:
      'Bridgestone, Firestone & Fuzion. Installation, rotation, balancing, TPMS & flat repair.',
    icon: CircleDot,
    image:
      'https://images.unsplash.com/photo-1590240455581-28564a594367?w=800&q=80',
    href: '/services#tires',
  },
  {
    title: 'Commercial Vehicles',
    description:
      'Priority fleet service for trucks & vans. Heavy-duty suspension, brakes & commercial tires.',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    href: '/#commercial',
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Wrench className="h-4 w-4" />
            Our Specialties
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
            High-Performance <span className="text-primary">Auto Care</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            We focus on the critical systems that keep you safe. From complex suspension
            to precision alignments, our certified technicians deliver expert results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_16px_#c8c8c8,-8px_-8px_16px_#ffffff]"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white p-2 shadow-md">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-2 font-display text-xl font-bold text-dark">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-dark cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

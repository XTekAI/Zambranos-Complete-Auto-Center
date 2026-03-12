'use client';

import { motion } from 'motion/react';
import {
  Wrench,
  CircleDot,
  Move,
  Disc,
  Snowflake,
  Droplet,
  Battery,
  Settings2,
  Phone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FinalCTA from '../../src/components/FinalCTA';

/* ── Service Data ── */

const priorityRepairs = [
  {
    id: 'suspension',
    icon: Wrench,
    title: 'Suspension Repair',
    tagline: 'Our #1 Specialty',
    description:
      'Complete suspension diagnostics and repair including shocks, struts, control arms, ball joints, tie rods, and sway bar links. We restore ride quality and handling precision.',
    features: [
      'Shocks & Struts Replacement',
      'Control Arm Repair',
      'Ball Joint Service',
      'Tie Rod Replacement',
      'Sway Bar Links',
      'Steering Component Repair',
    ],
    image:
      'https://images.unsplash.com/photo-1596464619711-6415e6b189a8?w=800&q=80',
  },
  {
    id: 'alignment',
    icon: Move,
    title: 'Wheel Alignment',
    tagline: 'Precision Computerized',
    description:
      'State-of-the-art computerized wheel alignment extends tire life, improves fuel economy, and ensures your vehicle tracks straight and true.',
    features: [
      '4-Wheel Alignment',
      'Thrust Angle Correction',
      'Camber & Caster Adjustment',
      'Toe Alignment',
      'Steering Centering',
      'Post-Repair Verification',
    ],
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
  },
  {
    id: 'ac',
    icon: Snowflake,
    title: 'AC Service',
    tagline: 'Stay Cool in NJ Summers',
    description:
      'Full AC diagnostics, refrigerant recharge, compressor repair, and climate control service to keep you comfortable year-round.',
    features: [
      'AC Diagnostics',
      'Refrigerant Recharge',
      'Compressor Repair',
      'Condenser Service',
      'Evaporator Cleaning',
      'Climate Control Repair',
    ],
    image:
      'https://images.unsplash.com/photo-1635438837136-128c77aa71e4?w=800&q=80',
  },
  {
    id: 'brakes',
    icon: Disc,
    title: 'Brake Services',
    tagline: 'Safety First',
    description:
      'Complete brake system service including pad replacement, rotor resurfacing/replacement, caliper service, brake fluid flush, and ABS diagnostics.',
    features: [
      'Brake Pad Replacement',
      'Rotor Resurfacing',
      'Caliper Service',
      'Brake Fluid Flush',
      'ABS Diagnostics',
      'Emergency Brake Repair',
    ],
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  },
];

const tireBrands = [
  {
    name: 'Bridgestone',
    tagline: 'Premium Performance',
    description: 'Industry-leading tires for passenger vehicles, SUVs, and light trucks.',
  },
  {
    name: 'Firestone',
    tagline: 'Trusted Reliability',
    description: 'Dependable all-season and all-terrain tires at competitive prices.',
  },
  {
    name: 'Fuzion',
    tagline: 'Value Performance',
    description: 'High-quality tires engineered by Bridgestone at budget-friendly prices.',
  },
];

const maintenanceServices = [
  { name: 'Oil Changes', icon: Droplet },
  { name: 'Filter Replacements', icon: Settings2 },
  { name: 'Battery Service', icon: Battery },
  { name: 'Fluid Services', icon: Droplet },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-dark py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Wrench className="h-4 w-4" />
                Full Service Auto Care
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Expert Auto <span className="text-primary">Services</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/60">
                From complex suspension rebuilds to routine oil changes — our
                certified technicians handle it all with military-grade precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Priority 1: Repairs */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                Priority <span className="text-primary">Repair</span> Services
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                The critical systems that keep you safe on the road. These are our
                core specialties.
              </p>
            </div>

            <div className="space-y-16">
              {priorityRepairs.map((service, index) => {
                const Icon = service.icon;
                const isReversed = index % 2 !== 0;
                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid items-center gap-12 lg:grid-cols-2 ${
                      isReversed ? 'direction-rtl' : ''
                    }`}
                  >
                    {/* Text */}
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {service.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl font-extrabold text-dark">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm text-text"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="tel:6093968417"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
                      >
                        <Phone className="h-4 w-4" />
                        Schedule This Service
                      </a>
                    </div>

                    {/* Image */}
                    <div
                      className={`relative overflow-hidden rounded-2xl shadow-lg ${
                        isReversed ? 'lg:order-1' : ''
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-[350px] w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Priority 2: Tires */}
        <section id="tires" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <CircleDot className="h-4 w-4" />
                Authorized Dealer
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                Premium <span className="text-primary">Tire</span> Brands
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                We carry top-tier tire brands for every vehicle and budget.
                Installation, rotation, balancing, and TPMS service included.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {tireBrands.map((brand, i) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group rounded-2xl bg-surface p-8 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <CircleDot className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-dark">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {brand.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {brand.description}
                  </p>
                  <a
                    href="tel:6093968417"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-dark cursor-pointer"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Priority 3: Maintenance */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
                Routine <span className="text-primary">Maintenance</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Preventive care to keep your vehicle running at peak performance.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {maintenanceServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-display font-bold text-dark">{svc.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

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
  Lightbulb,
  Wind,
  Thermometer,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Cog,
} from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FinalCTA from '../../src/components/FinalCTA';

/* ── Repairs (Most Profitable) ── */

const repairs = [
  {
    id: 'brakes',
    icon: Disc,
    title: 'Brake Services',
    tagline: 'Safety First',
    description:
      'Complete brake system service including pad replacement, rotor resurfacing/replacement, caliper service, brake fluid flush, and ABS diagnostics.',
    features: [
      'Brake Pad Replacement',
      'Rotor Resurfacing / Replacement',
      'Caliper Service',
      'Brake Fluid Flush',
      'ABS Diagnostics',
      'Emergency Brake Repair',
    ],
    image: '/images/brakes.jpg',
  },
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
    image: '/images/suspension repair.jpg',
  },
  {
    id: 'engine',
    icon: Cog,
    title: 'Engine Services',
    tagline: 'Heart of Your Vehicle',
    description:
      'Comprehensive engine diagnostics, tune-ups, and repair to keep your vehicle running at peak performance.',
    features: [
      'Engine Diagnostics',
      'Tune-Ups',
      'Spark Plug Replacement',
      'Timing Belt / Chain',
      'Engine Mount Repair',
      'Check Engine Light',
    ],
    image: '/images/engine services.jpg',
  },
  {
    id: 'ac',
    icon: Snowflake,
    title: 'AC Services',
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
    image: '/images/ac services.jpg',
  },
  {
    id: 'radiator',
    icon: Thermometer,
    title: 'Radiator Services',
    tagline: 'Keep Your Engine Cool',
    description:
      'Radiator repair, replacement, and coolant flush services to prevent overheating and engine damage.',
    features: [
      'Radiator Repair',
      'Radiator Replacement',
      'Coolant Flush',
      'Thermostat Replacement',
      'Hose Inspection & Replacement',
      'Cooling System Diagnostics',
    ],
    image: '/images/radiator.jpg',
  },
  {
    id: 'belts',
    icon: Settings2,
    title: 'Belts & Hoses',
    tagline: 'Preventive Care',
    description:
      'Inspection and replacement of serpentine belts, timing belts, and hoses to prevent breakdowns.',
    features: [
      'Serpentine Belt Replacement',
      'Timing Belt Service',
      'Radiator Hose Replacement',
      'Heater Hose Replacement',
      'Belt Tensioner Service',
      'Visual Inspection',
    ],
    image: '/images/belt and hoses.jpeg',
  },
  {
    id: 'shocks',
    icon: Gauge,
    title: 'Shocks & Struts',
    tagline: 'Ride Quality Experts',
    description:
      'Worn shocks and struts affect handling, braking, and tire wear. We restore your smooth, controlled ride.',
    features: [
      'Shock Absorber Replacement',
      'Strut Assembly Replacement',
      'Strut Mount Replacement',
      'Bounce Test Diagnostics',
      'Ride Height Inspection',
      'Road Test Verification',
    ],
    image: '/images/suspension repair.jpg',
  },
];

/* ── Tires ── */

const tireServices = [
  { name: 'Tire Installation', icon: CircleDot },
  { name: 'Tire Rotation', icon: CircleDot },
  { name: 'Wheel Balance', icon: Move },
  { name: 'TPMS Services', icon: Gauge },
  { name: 'Wheel Alignment', icon: Move },
  { name: 'Flat Repair', icon: Wrench },
];

/* ── Maintenance ── */

const maintenanceServices = [
  { name: 'Oil Changes', icon: Droplet },
  { name: 'Filters', icon: Settings2 },
  { name: 'Lighting', icon: Lightbulb },
  { name: 'Wiper Blades', icon: Wind },
  { name: 'Fluid Services', icon: Thermometer },
  { name: 'Battery', icon: Battery },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-dark py-20 pt-32 lg:pt-40 text-white">
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
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-none">
                <span className="text-white drop-shadow-lg">Expert Auto</span>{' '}
                <span className="text-red-600 drop-shadow-lg">Services</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/60">
                From complex suspension rebuilds to routine oil changes — our
                certified technicians handle it all with military-grade precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ REPAIRS SECTION ═══ */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Wrench className="h-4 w-4" />
                Repairs
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Professional <span className="text-primary">Repair</span> Services
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                The critical systems that keep you safe on the road. These are our core specialties.
              </p>
            </div>

            <div className="space-y-16">
              {repairs.map((service, index) => {
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
                    className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? 'direction-rtl' : ''}`}
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
                      <h3 className="font-display text-3xl font-extrabold">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-text">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/schedule"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
                      >
                        <Calendar className="h-4 w-4" />
                        Schedule This Service
                      </a>
                    </div>

                    {/* Image */}
                    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${isReversed ? 'lg:order-1' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-56 md:h-[350px] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ TIRES SECTION ═══ */}
        <section id="tires" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <CircleDot className="h-4 w-4" />
                Tires
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Complete <span className="text-primary">Tire</span> Services
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Authorized Bridgestone, Firestone & Fuzion dealer. From selection to installation, we handle it all.
              </p>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="grid gap-4 sm:grid-cols-2">
                {tireServices.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={svc.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="pill-badge"
                    >
                      <div className="pill-icon">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="pill-text">{svc.name}</span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-[400px] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src="/images/tire installation.jpg"
                  alt="Tire installation service"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-xl font-bold text-white">
                    Expert Tire Care
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Professional installation, balancing & alignment for all tire brands.
                  </p>
                  <a
                    href="/tires"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
                  >
                    View Tire Brands
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ MAINTENANCE SECTION ═══ */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Droplet className="h-4 w-4" />
                Maintenance
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Routine <span className="text-primary">Maintenance</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Preventive care to keep your vehicle running at peak performance and avoid costly repairs.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {maintenanceServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="pill-badge"
                  >
                    <div className="pill-icon">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="pill-text">{svc.name}</span>
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

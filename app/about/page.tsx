'use client';

import { motion } from 'motion/react';
import {
  Shield,
  Star,
  Clock,
  Users,
  Wrench,
  MapPin,
  Phone,
  Calendar,
  Award,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { BUSINESS, LINKS, HOURS } from '../../src/lib/constants';

const values = [
  {
    icon: Shield,
    title: 'Military Precision',
    description:
      'Our veteran founder brings the discipline, attention to detail, and commitment to excellence learned through military service to every repair.',
  },
  {
    icon: Heart,
    title: 'Family Values',
    description:
      'As a family-operated business, we treat every customer like family. Your safety and satisfaction are our top priorities.',
  },
  {
    icon: Award,
    title: 'Certified Expertise',
    description:
      'Our technicians are trained and certified in the latest diagnostic and repair techniques for all vehicle makes and models.',
  },
  {
    icon: Users,
    title: 'Community First',
    description:
      'We are proud to serve Trenton and surrounding communities. We believe in honest work, fair pricing, and building lasting relationships.',
  },
];

const currentYear = new Date().getFullYear();
const yearsOfService = currentYear - BUSINESS.established;

const milestones = [
  { year: '1997', event: 'Founded by the Zambranos family' },
  { year: '2005', event: 'Became an authorized Bridgestone / Firestone dealer' },
  { year: '2015', event: 'Expanded commercial fleet services division' },
  { year: '2018', event: 'Relocated to our current Trenton, NJ facility' },
  { year: currentYear.toString(), event: `Serving ${yearsOfService}+ years with ${BUSINESS.reviewCount}+ five-star reviews` },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[40vh] md:min-h-[50vh] items-center overflow-hidden bg-dark pt-24 md:pt-32 lg:pt-40">
          <Image
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80"
            alt="Auto repair team at work"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/30 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5" />
                Veteran-Owned &amp; Family Operated
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-none">
                <span className="text-white drop-shadow-lg">About</span> <span className="text-red-600 drop-shadow-lg">Zambranos</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
                Since {BUSINESS.established}, delivering expert auto care with
                military-grade precision and family-first values in Trenton, NJ.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <Clock className="h-4 w-4" />
                  Our Story
                </span>
                <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  29+ Years of <span className="text-primary">Trusted</span> Service
                </h2>
                <p className="mt-6 leading-relaxed text-muted">
                  Zambranos Complete Auto Center was founded in {BUSINESS.established} with a
                  simple mission: provide honest, high-quality auto repair at fair
                  prices. As a veteran-owned and family-operated business, we bring
                  the discipline and integrity of military service to every job.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  While our roots go back to 1997, we moved to our current Trenton location at {BUSINESS.address} in 2018. Since then, we&apos;ve grown into the area&apos;s trusted destination for
                  suspension repair, brake services, wheel alignments, tire
                  installation, and commercial fleet maintenance.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  As authorized dealers for Bridgestone, Firestone, and Fuzion tires,
                  we offer premium products backed by manufacturer warranties. Our
                  commitment to quality has earned us a {BUSINESS.rating}-star rating
                  from {BUSINESS.reviewCount}+ Google reviews.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-72 md:h-[500px] overflow-hidden rounded-2xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]"
              >
                <Image
                  src="/images/owner.jpg"
                  alt="Founder of Zambrano's Auto Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                What <span className="text-primary">Drives</span> Us
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Our values define everything we do — from the way we diagnose
                problems to the way we treat our customers.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="premium-card p-8"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold text-dark">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Our <span className="text-primary">Journey</span>
              </h2>
            </div>

            <div className="mx-auto max-w-2xl space-y-0">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 pb-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                      {milestone.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-primary/20" />
                    )}
                  </div>
                  <div className="pt-2.5">
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <p className="mt-1 text-muted">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-dark py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {[
                { value: '29+', label: 'Years in Business', icon: Clock },
                { value: `${BUSINESS.reviewCount}+`, label: 'Google Reviews', icon: Star },
                { value: `${BUSINESS.rating}★`, label: 'Average Rating', icon: Star },
                { value: '1000s', label: 'Vehicles Serviced', icon: Wrench },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <div className="font-display text-3xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hours & Location */}
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="premium-card p-8"
              >
                <h3 className="mb-6 font-display text-2xl font-bold">
                  Business Hours
                </h3>
                <ul className="space-y-4">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
                    >
                      <span className="font-semibold text-dark">{h.day}</span>
                      <span className={`font-bold ${h.time === 'Closed' ? 'text-primary' : 'text-muted'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="premium-card p-8"
              >
                <h3 className="mb-6 font-display text-2xl font-bold">
                  Visit Us
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Address</p>
                      <a
                        href={LINKS.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-primary cursor-pointer"
                      >
                        {BUSINESS.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Phone</p>
                      <a
                        href={BUSINESS.phoneTel}
                        className="text-lg font-bold text-primary transition-colors hover:text-dark cursor-pointer"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={LINKS.appointment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer"
                  >
                    <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
                    Schedule Service
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

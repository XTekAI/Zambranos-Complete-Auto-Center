'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Car,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { BUSINESS } from '../../src/lib/constants';

const serviceTypes = [
  'Suspension Repair',
  'Brake Services',
  'Wheel Alignment',
  'Tire Services',
  'Engine Services',
  'AC Services',
  'Radiator Services',
  'Belts & Hoses',
  'Oil Change',
  'Other',
];

const timeSlots = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
];

function getMinDate() {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  return today.toISOString().split('T')[0];
}

function isSunday(dateStr: string) {
  const date = new Date(dateStr + 'T12:00:00');
  return date.getDay() === 0;
}

export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    if (!form.vehicleYear.trim()) errs.vehicleYear = 'Year is required';
    if (!form.vehicleMake.trim()) errs.vehicleMake = 'Make is required';
    if (!form.vehicleModel.trim()) errs.vehicleModel = 'Model is required';
    if (!form.service) errs.service = 'Select a service';
    if (!form.date) errs.date = 'Select a date';
    else if (isSunday(form.date)) errs.date = 'We are closed on Sundays';
    if (!form.time) errs.time = 'Select a time';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20';
  const labelClass = 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted';
  const errorClass = 'mt-1 flex items-center gap-1 text-xs text-primary';

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="bg-surface min-h-screen">
          <section className="pt-32 lg:pt-44 pb-24 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-lg text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="font-display text-3xl font-black text-dark md:text-4xl">
                Appointment <span className="text-primary">Requested!</span>
              </h1>
              <p className="mt-4 text-muted leading-relaxed">
                Thank you, <strong className="text-dark">{form.name}</strong>. We received your request for{' '}
                <strong className="text-dark">{form.service}</strong> on{' '}
                <strong className="text-dark">
                  {new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </strong>{' '}
                at <strong className="text-dark">{form.time}</strong>.
              </p>
              <p className="mt-4 text-muted">
                Our team will call you at <strong className="text-dark">{form.phone}</strong> to confirm your appointment.
              </p>

              <div className="mt-8 pill-badge-info justify-center">
                <div className="pill-icon">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60">Questions? Call us directly</p>
                  <a href={BUSINESS.phoneTel} className="font-bold text-white hover:text-primary transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <a
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-bold text-white transition-all hover:brightness-110"
              >
                Back to Home
              </a>
            </motion.div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-surface min-h-screen">
        {/* Hero */}
        <section className="bg-dark py-12 md:py-16 pt-24 md:pt-32 lg:pt-40 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                <Calendar className="h-4 w-4" />
                Schedule an Appointment
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl leading-none">
                <span className="text-white">Book Your</span>{' '}
                <span className="text-primary">Service</span>
              </h1>
              <p className="mt-4 text-white/60 text-lg">
                Fill out the form below and our team will confirm your appointment. Same-day and next-day slots available.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="premium-card p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-bold text-dark mb-6 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Your Information
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(609) 000-0000"
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Email (Optional)</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="john@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Vehicle Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="premium-card p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-bold text-dark mb-6 flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Vehicle Details
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className={labelClass}>Year *</label>
                    <input
                      type="text"
                      value={form.vehicleYear}
                      onChange={(e) => update('vehicleYear', e.target.value)}
                      placeholder="2022"
                      maxLength={4}
                      className={inputClass}
                    />
                    {errors.vehicleYear && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.vehicleYear}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Make *</label>
                    <input
                      type="text"
                      value={form.vehicleMake}
                      onChange={(e) => update('vehicleMake', e.target.value)}
                      placeholder="Toyota"
                      className={inputClass}
                    />
                    {errors.vehicleMake && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.vehicleMake}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Model *</label>
                    <input
                      type="text"
                      value={form.vehicleModel}
                      onChange={(e) => update('vehicleModel', e.target.value)}
                      placeholder="Camry"
                      className={inputClass}
                    />
                    {errors.vehicleModel && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.vehicleModel}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Service Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="premium-card p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-bold text-dark mb-6 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Service Needed
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Type of Service *</label>
                    <div className="relative">
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a service...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    </div>
                    {errors.service && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Additional Notes (Optional)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="Describe the issue or any details we should know..."
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Date & Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="premium-card p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-bold text-dark mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Preferred Date &amp; Time
                </h2>
                <p className="text-xs text-muted mb-6">
                  Monday – Saturday, <strong className="text-dark">8:00 AM – 1:00 PM</strong>.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Date *</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      min={getMinDate()}
                      className={`${inputClass} cursor-pointer`}
                    />
                    {errors.date && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.date}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Time Slot *</label>
                    <div className="relative">
                      <select
                        value={form.time}
                        onChange={(e) => update('time', e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a time...</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <Clock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    </div>
                    {errors.time && (
                      <p className={errorClass}>
                        <AlertCircle className="h-3 w-3" /> {errors.time}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-4 font-bold text-white transition-all hover:brightness-110 shadow-xl shadow-red-600/20 cursor-pointer"
                >
                  <Calendar className="h-5 w-5" />
                  Request Appointment
                </button>
                <a
                  href={BUSINESS.phoneTel}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-dark px-10 py-4 font-bold text-white transition-all hover:bg-dark/80"
                >
                  <Phone className="h-5 w-5" />
                  Or Call {BUSINESS.phone}
                </a>
              </motion.div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function LandingContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);
  };

  const services = [
    'Wheel Alignment',
    'Brake Service',
    'Tire Balancing & Rotation',
    'Suspension & Steering',
    'General Auto Repair',
    'Commercial Fleet Service',
  ];

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-dark/80 border border-white/10 p-12 text-center backdrop-blur-xl">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600/20 text-red-500 border border-red-500/30">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">Request Received!</h3>
        <p className="text-gray-400 font-medium">
          Thank you, {formData.name}. We'll contact you shortly at {formData.phone} to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="premium-card premium-card-dark w-full p-8 shadow-2xl sm:p-10 !cursor-default !bg-dark/95 backdrop-blur-2xl border-white/10">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-black text-primary uppercase tracking-tight">Book Your Service</h2>
        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">English-Speaking Market NJ</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[10px] font-black text-primary mb-2 uppercase tracking-[0.2em]">
            Full Name
          </label>
          <input
            id="name"
            required
            type="text"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white ring-red-600 transition-all focus:border-red-600 focus:outline-none focus:ring-1"
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-[10px] font-black text-primary mb-2 uppercase tracking-[0.2em]">
              Phone Number
            </label>
            <input
              id="phone"
              required
              type="tel"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white ring-red-600 transition-all focus:border-red-600 focus:outline-none focus:ring-1"
              placeholder="(609) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[10px] font-black text-primary mb-2 uppercase tracking-[0.2em]">
              Email Address
            </label>
            <input
              id="email"
              required
              type="email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white ring-red-600 transition-all focus:border-red-600 focus:outline-none focus:ring-1"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-[10px] font-black text-primary mb-2 uppercase tracking-[0.2em]">
            Selected Service
          </label>
          <select
            id="service"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white ring-red-600 transition-all focus:border-red-600 focus:outline-none focus:ring-1 appearance-none shadow-xl"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="" disabled className="bg-dark text-white">Select service</option>
            {services.map((service) => (
              <option key={service} value={service} className="bg-dark text-white">
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-[10px] font-black text-primary mb-2 uppercase tracking-[0.2em]">
            Additional Details (Optional)
          </label>
          <textarea
            id="message"
            rows={2}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white ring-red-600 transition-all focus:border-red-600 focus:outline-none focus:ring-1"
            placeholder="Tell us about the issue..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="animated-button w-full !rounded-xl !py-5 flex group shadow-2xl"
        >
          <span className="anim-text flex items-center justify-center gap-2 w-full uppercase tracking-[0.2em] font-black">
            Schedule Now <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="anim-bg" />
        </button>

        <p className="text-center text-[9px] font-extrabold text-gray-500 uppercase tracking-widest leading-relaxed">
          By clicking "Schedule Now", you agree for our veteran-owned team to contact you to confirm the appointment.
        </p>
      </form>
    </div>
  );
}

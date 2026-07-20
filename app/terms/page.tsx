import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { BUSINESS } from '../../src/lib/constants';

export const metadata = {
  title: 'Terms of Service | Zambranos Complete Auto Center',
  description: 'Terms of Service for Zambranos Complete Auto Center. Review the conditions that apply to scheduling and receiving service at our shop.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Header */}
        <section className="bg-dark pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Legal
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-white/60">
              Last updated: July 20, 2026 · {BUSINESS.name}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 space-y-14 text-text leading-relaxed">

            {/* Intro */}
            <div>
              <p className="text-lg text-muted">
                These Terms of Service govern the conditions under which <strong className="text-dark">{BUSINESS.name}</strong> schedules and performs vehicle service for you. By scheduling an appointment or using our services, you agree to the terms below. For information on how we handle your personal data, see our{' '}
                <a href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* 1. Appointment Scheduling & Availability */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                1. Appointment Scheduling &amp; Availability
              </h2>
              <p className="text-muted">
                All appointments are subject to availability and may be rescheduled by either party with reasonable notice. Same-day and next-day slots are offered on a best-effort basis and are not guaranteed until confirmed.
              </p>
            </div>

            {/* 2. Estimates & Pricing */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                2. Estimates &amp; Pricing
              </h2>
              <p className="text-muted">
                Estimates provided prior to or at the start of a visit are subject to change upon physical inspection of your vehicle. Final pricing will always be confirmed with you before any work begins.
              </p>
            </div>

            {/* 3. Vehicle Inspection Findings */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                3. Vehicle Inspection Findings
              </h2>
              <p className="text-muted">
                {BUSINESS.name} is not responsible for pre-existing vehicle conditions discovered during service, including damage, wear, or defects unrelated to the requested repair.
              </p>
            </div>

            {/* 4. Service Warranty */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                4. Service Warranty
              </h2>
              <p className="text-muted">
                All services are performed by certified technicians and are backed by our service warranty as communicated to you at the time of service. Warranty terms vary by service type and parts used.
              </p>
            </div>

            {/* 5. Vehicle Pickup & Storage Fees */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                5. Vehicle Pickup &amp; Storage Fees
              </h2>
              <p className="text-muted">
                Vehicles left on our premises beyond the agreed pickup time may be subject to storage fees. We will make reasonable efforts to notify you before any such fees apply.
              </p>
            </div>

            {/* 6. Right to Refuse Service */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                6. Right to Refuse Service
              </h2>
              <p className="text-muted">
                We reserve the right to refuse service to anyone for any lawful reason, including but not limited to safety concerns, capacity limits, or non-payment on prior services.
              </p>
            </div>

            {/* 7. Changes to These Terms */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                7. Changes to These Terms
              </h2>
              <p className="text-muted">
                We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-dark p-8 text-white">
              <h2 className="font-display text-2xl font-black mb-4">
                8. Contact Us
              </h2>
              <p className="text-white/70 mb-4">
                If you have any questions about these terms, please contact us:
              </p>
              <div className="space-y-2 text-white/80 text-sm">
                <p><strong className="text-white">Business:</strong> {BUSINESS.name}</p>
                <p><strong className="text-white">Address:</strong> {BUSINESS.address}</p>
                <p>
                  <strong className="text-white">Phone:</strong>{' '}
                  <a href="tel:6093968417" className="text-primary hover:underline">{BUSINESS.phone}</a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

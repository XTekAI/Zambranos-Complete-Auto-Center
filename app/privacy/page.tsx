import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { BUSINESS } from '../../src/lib/constants';

export const metadata = {
  title: 'Privacy Policy & Terms | Zambranos Complete Auto Center',
  description: 'Privacy Policy and Terms of Service for Zambranos Complete Auto Center. Learn how we handle your information and appointment communications.',
};

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

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
              Privacy Policy &amp; Terms of Service
            </h1>
            <p className="mt-4 text-white/60">
              Last updated: January 1, {currentYear} · {BUSINESS.name}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 space-y-14 text-text leading-relaxed">

            {/* Intro */}
            <div>
              <p className="text-lg text-muted">
                Welcome to <strong className="text-dark">{BUSINESS.name}</strong>. By using our website, scheduling an appointment, or providing us with your contact information, you agree to the terms outlined in this Privacy Policy. Please read it carefully.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted mb-4">
                When you schedule an appointment, contact us, or interact with our website, we may collect the following information:
              </p>
              <ul className="space-y-2 text-muted list-none">
                {[
                  'Full name',
                  'Phone number',
                  'Email address',
                  'Vehicle information (year, make, model)',
                  'Preferred service type and appointment date/time',
                  'Any additional notes or requests you provide',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Appointment Reminders & Communications */}
            <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-8">
              <h2 className="font-display text-2xl font-black text-dark mb-4">
                2. Appointment Reminders &amp; Marketing Communications
              </h2>
              <p className="text-muted mb-4">
                <strong className="text-dark">By scheduling an appointment or submitting your contact information through our website, you expressly consent to receive:</strong>
              </p>
              <ul className="space-y-3 text-muted">
                {[
                  'Appointment confirmation messages via phone call, SMS text, or email.',
                  'Appointment reminder messages sent before your scheduled visit.',
                  'Follow-up messages after your service to ensure your satisfaction.',
                  'Promotional offers, seasonal discounts, and service reminders from Zambranos Complete Auto Center.',
                  'General marketing communications about our services, new offerings, and business updates.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                You may opt out of marketing communications at any time by replying <strong>STOP</strong> to any text message, clicking the unsubscribe link in any email, or calling us at{' '}
                <a href="tel:6093968417" className="text-primary font-bold hover:underline">
                  {BUSINESS.phone}
                </a>. Appointment confirmation and reminder messages are part of our service and may still be sent until your appointment is completed or canceled.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-muted mb-4">We use the information we collect exclusively to:</p>
              <ul className="space-y-2 text-muted">
                {[
                  'Schedule, confirm, and manage your service appointments.',
                  'Send you reminders and follow-ups related to your vehicle and service history.',
                  'Improve our services and customer experience.',
                  'Communicate promotional offers and updates from our shop.',
                  'Comply with legal obligations when required.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. We Do NOT Share Your Information */}
            <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="font-display text-2xl font-black text-dark mb-4">
                4. We Do NOT Share Your Information
              </h2>
              <p className="text-muted mb-4 text-lg">
                <strong className="text-dark">Your personal information is never sold, rented, traded, or shared with any third party.</strong>
              </p>
              <p className="text-muted">
                All information collected by {BUSINESS.name} is used exclusively for the internal operations of our business. We do not share, distribute, or disclose your personal data to outside companies, advertisers, data brokers, or any other third-party entities — period.
              </p>
              <p className="mt-4 text-muted">
                The only exception would be if we are legally required to disclose information by a valid court order or law enforcement request. In such cases, we will only disclose the minimum information required by law.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                5. Data Security
              </h2>
              <p className="text-muted">
                We take reasonable precautions to protect your personal information from unauthorized access, loss, or misuse. Access to customer data is restricted to authorized staff members of {BUSINESS.name} who need it to perform their job functions.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                6. Data Retention
              </h2>
              <p className="text-muted">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your personal data at any time by contacting us directly. We will honor such requests promptly unless retention is required by law.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                7. Your Rights
              </h2>
              <p className="text-muted mb-4">You have the right to:</p>
              <ul className="space-y-2 text-muted">
                {[
                  'Request access to the personal information we hold about you.',
                  'Request correction of any inaccurate information.',
                  'Request deletion of your personal data.',
                  'Opt out of marketing communications at any time.',
                  'File a complaint if you believe your rights have been violated.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 8. Terms of Service */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                8. Terms of Service
              </h2>
              <p className="text-muted mb-4">
                By using our website and services, you agree to the following terms:
              </p>
              <ul className="space-y-3 text-muted">
                {[
                  'All appointments are subject to availability and may be rescheduled by either party with reasonable notice.',
                  'Estimates provided are subject to change upon vehicle inspection. Final pricing will be confirmed before any work begins.',
                  'Zambranos Complete Auto Center is not responsible for pre-existing vehicle conditions discovered during service.',
                  'Vehicles left on our premises beyond the agreed pickup time may be subject to storage fees.',
                  'All services are performed by certified technicians and are backed by our service warranty as communicated at the time of service.',
                  'We reserve the right to refuse service to anyone for any lawful reason.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 9. Changes */}
            <div>
              <h2 className="font-display text-2xl font-black text-dark mb-4 border-b border-gray-100 pb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-muted">
                We may update this Privacy Policy and Terms of Service from time to time. Any changes will be posted on this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-dark p-8 text-white">
              <h2 className="font-display text-2xl font-black mb-4">
                10. Contact Us
              </h2>
              <p className="text-white/70 mb-4">
                If you have any questions, concerns, or requests regarding this policy, please contact us:
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

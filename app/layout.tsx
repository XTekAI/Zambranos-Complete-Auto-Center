import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zambrano's Complete Auto Center | Veteran-Owned Auto Repair in Trenton, NJ",
  description:
    'Veteran-owned auto repair shop in Trenton, NJ since 1997. Expert suspension, brakes, tires, wheel alignment & commercial fleet services. 4.4★ rated with 249+ Google reviews. Call (609) 396-8417.',
  keywords: [
    'auto repair Trenton NJ',
    'suspension repair',
    'brake service',
    'tire shop Trenton',
    'wheel alignment',
    'commercial fleet service',
    'veteran owned auto shop',
    'Zambranos auto center',
  ],
  openGraph: {
    title: "Zambrano's Complete Auto Center",
    description: 'Veteran-Owned Excellence in Trenton Since 1997. Expert Suspension, Brakes & Tires.',
    type: 'website',
    locale: 'en_US',
    siteName: "Zambrano's Complete Auto Center",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="Trenton" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-dvh bg-white font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}

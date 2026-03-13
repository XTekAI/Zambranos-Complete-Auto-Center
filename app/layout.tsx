import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import JSONLD from '../src/components/JSONLD';

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
  icons: {
    icon: '/favicon.jpg',
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
        <JSONLD />
      </head>
      <body className="min-h-dvh bg-white font-sans text-text antialiased">
        {/* Google Analytics Tag */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-GFRBEE46P6`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GFRBEE46P6');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '835081036266613');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=835081036266613&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}

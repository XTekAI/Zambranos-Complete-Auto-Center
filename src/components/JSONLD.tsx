import { BUSINESS, LINKS } from '../lib/constants';

export default function JSONLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": "https://www.zambranosauto.com/#business",
        "name": BUSINESS.name,
        "legalName": BUSINESS.name,
        "url": "https://www.zambranosauto.com/",
        "logo": "https://www.zambranosauto.com/logo.png",
        "image": [
          "https://www.zambranosauto.com/images/zambrano-van-real.jpg",
          "https://www.zambranosauto.com/images/owner.jpg",
          "https://www.zambranosauto.com/images/hero-truck.jpg"
        ],
        "description": "Zambranos Complete Auto Center is a veteran-owned and family-operated auto repair shop. Established in 1997 and serving Trenton since 2018. Specialists in tires, suspension, brakes, and wheel alignments.",
        "slogan": "Veteran-Owned Excellence Since 1997",
        "telephone": "+1-609-396-8417",
        "foundingDate": "1997",
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Financing",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1017 Hamilton Ave.",
          "addressLocality": "Trenton",
          "addressRegion": "NJ",
          "postalCode": "08629",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.2186485,
          "longitude": -74.7382175
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "08:30",
            "closes": "14:00"
          }
        ],
        "sameAs": [
          LINKS.facebook,
          LINKS.instagram,
          LINKS.twitter
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Trenton",
            "containedInPlace": { "@type": "State", "name": "New Jersey" }
          },
          {
            "@type": "City",
            "name": "Hamilton",
            "containedInPlace": { "@type": "State", "name": "New Jersey" }
          },
          {
            "@type": "City",
            "name": "Ewing",
            "containedInPlace": { "@type": "State", "name": "New Jersey" }
          }
        ],
        "knowsAbout": [
          "Tire services",
          "Brake repair",
          "Suspension repair",
          "Wheel alignments",
          "Commercial vehicle maintenance",
          "Fleet service",
          "Ford F-250",
          "Ford F-350",
          "Ford E-250",
          "Sedans",
          "Light trucks",
          "Work vans"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.zambranosauto.com/#website",
        "url": "https://www.zambranosauto.com/",
        "name": BUSINESS.name,
        "publisher": { "@id": "https://www.zambranosauto.com/#business" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.zambranosauto.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Zambrano's Complete Auto Center specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zambrano's specialize in tire services, suspension repair, brake repair, wheel alignments, and maintenance for passenger and commercial vehicles."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work on commercial and fleet vehicles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We service commercial vehicles, fleet vans, and trucks, including heavy-duty models like Ford F-series."
            }
          },
          {
            "@type": "Question",
            "name": "Is Zambrano's veteran-owned?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Zambrano's Complete Auto Center is proudly veteran-owned and family-operated since 1997."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

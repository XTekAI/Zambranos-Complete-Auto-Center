'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';
import Script from 'next/script';
import {
  CircleDot,
  ShieldCheck,
  Zap,
  ChevronRight,
  Phone,
  Calendar,
  Wrench,
} from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FinalCTA from '../../src/components/FinalCTA';
import { BUSINESS, LINKS } from '../../src/lib/constants';

const brands = [
  {
    name: 'Bridgestone',
    tagline: 'Premium Performance & Innovation',
    description: 'Industry-leading tires engineered for those who demand the highest level of safety and performance. From luxury sedans to powerful SUVs and light trucks, Bridgestone delivers precision handling and ultimate comfort.',
    specialty: 'Premium SUVs, Light Trucks & Luxury Sedans',
    features: ['Enliten Technology', 'Potenza Performance', 'Alenza SUV specialist'],
    image: '/images/tires bridgestone.jpg',
    logo: '/images/Bridgestone.png',
    color: 'border-red-600'
  },
  {
    name: 'Firestone',
    tagline: 'Reliability Since 1900',
    description: 'A legacy of trust. Firestone tires are built for real-world reliability and long-lasting performance. Whether you are commuting to work or hauling a load, Firestone offers dependable all-season and all-terrain options.',
    specialty: 'Reliable All-Season & All-Terrain',
    features: ['Centennial Tradition', 'Destination AT2', 'WeatherGrip Technology'],
    image: '/images/firestone tires.png',
    logo: '/images/firestone.png',
    color: 'border-red-500'
  },
  {
    name: 'Fuzion',
    tagline: 'Value Meets Performance',
    description: 'Engineered by Bridgestone, Fuzion tires provide a high-quality, budget-friendly option for drivers who want reliable performance without the premium price tag. Safety and value combined.',
    specialty: 'Budget-Friendly Performance',
    features: ['Bridgestone Engineering', 'Great All-Season Value', 'Quiet Ride Design'],
    image: '/images/fuizon tires.jpg',
    logo: '/images/fuzion-logo.png',
    color: 'border-red-400'
  },
];

export default function TiresPage() {
  useEffect(() => {
    // @ts-ignore
    if (window.TCWidget) {
      // @ts-ignore
      window.TCWidget.init({
        apikey: "8f51859db3abe21e51e13fd2dae1857a",
        container: "tireconnect"
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-surface">
        {/* Hero Section */}
        <section className="bg-dark py-20 pt-32 lg:pt-44 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <img 
               src="https://images.unsplash.com/photo-1590240455581-28564a594367?w=1920&q=80" 
               alt="Tires Hero" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                <CircleDot className="h-4 w-4" />
                Authorized Bridgestone & Firestone Dealer
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-none">
                <span className="text-white drop-shadow-lg">Premium</span> <span className="text-red-600 drop-shadow-lg">Tire Center</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/70">
                The foundation of your vehicle's safety starts where the rubber meets the road. 
                We provide expert selection, installation, and maintenance for the world's most trusted tire brands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TireConnect Widget */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6">
            <div id="tireconnect" className="min-h-[600px] w-full bg-surface/50 rounded-3xl overflow-hidden shadow-sm flex items-center justify-center">
              <div className="text-center p-12">
                <CircleDot className="w-12 h-12 text-primary/20 mx-auto mb-4 animate-pulse" />
                <p className="text-muted font-medium">Loading Tire Catalog...</p>
              </div>
            </div>
          </div>
          <Script 
            src="https://app.tireconnect.ca/js/widget.js" 
            strategy="afterInteractive"
            onLoad={() => {
              // @ts-ignore
              if (window.TCWidget) {
                // @ts-ignore
                window.TCWidget.init({
                  apikey: "8f51859db3abe21e51e13fd2dae1857a",
                  container: "tireconnect"
                });
              }
            }}
          />
        </section>

        {/* Brand Showcase */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-extrabold text-dark md:text-4xl">
              World-Class <span className="text-primary">Brands</span> We Trust
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              We don't just sell tires; we sell peace of mind. Every brand we carry is selected for its performance, safety rating, and longevity.
            </p>
          </div>

          <div className="space-y-20">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`premium-card overflow-hidden grid md:grid-cols-2 gap-0 items-stretch border-l-8 ${brand.color}`}
              >
                {/* Text Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6 h-12 w-auto flex items-start">
                    <img src={brand.logo} alt={brand.name} className="h-full object-contain" />
                  </div>
                  <div className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2">{brand.tagline}</div>
                  <h3 className="font-display text-3xl md:text-4xl font-black text-dark mb-4">{brand.name}</h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  
                  <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <span className="block text-xs font-black uppercase text-primary mb-1">Our Specialty Recommendation</span>
                    <span className="font-bold text-dark">{brand.specialty}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {brand.features.map(f => (
                      <span key={f} className="inline-flex items-center gap-1 bg-dark/5 px-3 py-1 rounded-full text-xs font-bold text-dark/70">
                        <ShieldCheck className="w-3 h-3 text-primary" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={`${brand.name} tires`} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 md:to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Installation Details */}
        <section className="bg-dark py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 bg-red-600 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-900 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-6">
              Expert Selection <br/> <span className="text-primary italic">Simplified</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Find the perfect tires for your budget and needs directly above. 
              Our team of experts is ready to get you back on the road safely.
            </p>
            
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-left max-w-2xl mx-auto backdrop-blur-sm">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Professional Installation Includes:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Computerized Balancing</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> New Valve Stems</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> TPMS Reset/Testing</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Lifetime Rotations</li>
              </ul>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={BUSINESS.phoneTel} 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-black rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-red-600/20"
              >
                <Phone className="w-5 h-5" />
                Get a Quote Today
              </a>
              <a 
                href={LINKS.appointment} 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white text-dark font-black rounded-2xl hover:bg-gray-100 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Installation
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

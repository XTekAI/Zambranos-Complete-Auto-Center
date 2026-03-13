import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FinalCTA from '../../src/components/FinalCTA';
import AnimatedButton from '../../src/components/AnimatedButton';
import { BUSINESS } from '../../src/lib/constants';
import { Truck, ShieldCheck, Clock, Zap, Settings, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/zambrano-van-real.jpg"
            alt="Commercial Services Hero"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <Truck className="h-4 w-4" />
            Military-Grade Fleet Management
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
            <span className="bg-red-600 text-white px-4 py-1 inline-block transform -rotate-1">KEEP YOUR FLEET</span> <br />
            <span className="text-red-600 block mt-2">BATTLE READY</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white text-lg font-medium leading-relaxed mb-10 drop-shadow-md">
            Downtime is lost revenue. At Zambrano&apos;s, we provide priority scheduling and specialized heavy-duty repair services for F-Series, E-Series, and all commercial van fleets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton 
              href={BUSINESS.phoneTel}
              text="Call for Priority Service"
              className="px-8 py-4 bg-primary text-white font-bold"
            />
            <AnimatedButton 
              href="/#contact"
              text="Our Location"
              className="px-8 py-4 border-2 border-white/20 text-white font-bold hover:bg-white/10"
            />
          </div>
        </div>
      </section>

      {/* Why Zambrano's Section */}
      <section className="py-24 bg-white rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-black text-dark mb-6 tracking-tight">
                Why Mercer County Trusts <br />
                <span className="text-primary">Zambrano's Commercial</span>
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Since 1997, we've helped local businesses stay on the road. We understand the specific demands of work trucks and the importance of preventive maintenance.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Priority Lane", desc: "Commercial vehicles bypass the standard queue for diagnostic and routine maintenance." },
                  { icon: ShieldCheck, title: "Warranty Guaranteed", desc: "Our fleet repairs come with industrial-strength warranties to protect your investment." },
                  { icon: Zap, title: "Speed and Precision", desc: "Most fleet repairs are completed same-day or within 24 hours of drop-off." }
                ].map((item, idx) => (
                  <div key={idx} className="pill-badge-info">
                    <div className="pill-icon">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-72 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/zambrano-van-real.jpg" 
                alt="Professional Fleet Service" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-white font-bold text-lg mb-1">Serving all of Mercer County</p>
                <p className="text-white/80 text-sm">Trenton • Hamilton • Ewing • Lawrenceville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-dark mb-4">Commercial Specialty Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Heavy-Duty Suspension", icon: Settings, desc: "Specialized tuning and repair for trucks hauling heavy equipment." },
              { title: "Commercial Braking Systems", icon: ShieldCheck, desc: "Upgraded pads, rotors, and air brake maintenance for fleet safety." },
              { title: "DOT Inspections", icon: TrendingUp, desc: "Keep your fleet compliant with local and federal transportation regulations." },
              { title: "E-Series Specialty", icon: Truck, desc: "Dedicated expertise for Ford E250 and E350 cargo and passenger vans." },
              { title: "F-Series Performance", icon: Zap, desc: "Performance maintenance for F150 and F250 workhorses." },
              { title: "Tire Fleet Management", icon: TrendingUp, desc: "Deep discounts on commercial-grade Firestone and Bridgestone tires." }
            ].map((s, i) => (
              <div key={i} className="pill-badge-info flex-col items-start !rounded-2xl !p-8">
                <div className="pill-icon">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-white">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12">
        <FinalCTA />
      </section>
      
      <Footer />
    </main>
  );
}

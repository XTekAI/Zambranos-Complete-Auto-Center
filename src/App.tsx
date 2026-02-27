/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FinancingBrands from './components/FinancingBrands';
import CoreServices from './components/CoreServices';
import CommercialSection from './components/CommercialSection';
import WhyChooseUs from './components/WhyChooseUs';
import MaintenanceServices from './components/MaintenanceServices';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FinancingBrands />
        <CoreServices />
        <CommercialSection />
        <WhyChooseUs />
        <MaintenanceServices />
        <Testimonials />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

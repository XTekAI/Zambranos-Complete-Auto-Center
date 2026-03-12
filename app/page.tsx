import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import FinancingBrands from '../src/components/FinancingBrands';
import CoreServices from '../src/components/CoreServices';
import CommercialSection from '../src/components/CommercialSection';
import TireBrands from '../src/components/TireBrands';
import WhyChooseUs from '../src/components/WhyChooseUs';
import MaintenanceServices from '../src/components/MaintenanceServices';
import Testimonials from '../src/components/Testimonials';
import ServiceArea from '../src/components/ServiceArea';
import FinalCTA from '../src/components/FinalCTA';
import Footer from '../src/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FinancingBrands />
        <CoreServices />
        <CommercialSection />
        <TireBrands />
        <WhyChooseUs />
        <MaintenanceServices />
        <Testimonials />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

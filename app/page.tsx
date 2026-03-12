"use client";

import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import FinancingBrands from '../src/components/FinancingBrands';
import CoreServices from '../src/components/CoreServices';
import CommercialSection from '../src/components/CommercialSection';
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

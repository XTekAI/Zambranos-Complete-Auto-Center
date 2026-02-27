import AnimatedButton from './AnimatedButton';

export default function FinalCTA() {
  return (
    <section className="bg-red-600 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to Get Back on the Road?
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium">
          Trust Zambranos Complete Auto Center for expert suspension, brake, and tire services. Fast turnaround, honest pricing, and guaranteed results.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <AnimatedButton text="(609) 396-8417" href="tel:609-396-8417" variant="dark" className="w-full sm:w-auto" />
          <AnimatedButton text="Book Appointment" href="#contact" variant="white" className="w-full sm:w-auto" />
          <AnimatedButton 
            text="Get Directions" 
            href="https://www.google.com/maps/place/Zambranos+Complete+Auto+Center/@40.2186444,-74.7358035,21z/data=!4m15!1m8!3m7!1s0x89c159aa2414b915:0x36716ece72290eab!2s1017+Hamilton+Ave,+Trenton,+NJ+08629!3b1!8m2!3d40.2186494!4d-74.7355814!16s%2Fg%2F11b8yyr95l!3m5!1s0x89c159aa244419cb:0xeda66e2d8ae67a21!8m2!3d40.2186444!4d-74.7356426!16s%2Fg%2F1tdj5380?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noreferrer" 
            variant="dark" 
            className="w-full sm:w-auto" 
          />
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { MapPin, Navigation, Phone } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section id="contact" className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              Visit Our Shop
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-6 tracking-tight">
              Serving <span className="text-red-600">Trenton</span> & Beyond
            </h2>
            
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Conveniently located at 1017 Hamilton Ave, Trenton NJ 08629. We provide top-tier suspension, brake, and tire services to drivers throughout the area.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-zinc-100 p-3 rounded-xl h-fit border border-zinc-200">
                  <Navigation className="w-6 h-6 text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-950">Location</h3>
                  <p className="text-zinc-600">1017 Hamilton Ave<br />Trenton, NJ 08629</p>
                  <a href="https://www.google.com/maps/place/Zambranos+Complete+Auto+Center/@40.2186444,-74.7358035,21z/data=!4m15!1m8!3m7!1s0x89c159aa2414b915:0x36716ece72290eab!2s1017+Hamilton+Ave,+Trenton,+NJ+08629!3b1!8m2!3d40.2186494!4d-74.7355814!16s%2Fg%2F11b8yyr95l!3m5!1s0x89c159aa244419cb:0xeda66e2d8ae67a21!8m2!3d40.2186444!4d-74.7356426!16s%2Fg%2F1tdj5380?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:text-red-700 text-sm mt-2 inline-block">Get Directions</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-zinc-100 p-3 rounded-xl h-fit border border-zinc-200">
                  <Phone className="w-6 h-6 text-zinc-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-950">Contact</h3>
                  <p className="text-zinc-600">Phone: (609) 396-8417</p>
                  <a href="tel:609-396-8417" className="text-red-600 font-bold hover:text-red-700 text-sm mt-2 inline-block">Call Now</a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <h3 className="font-bold text-zinc-950 mb-4">Business Hours</h3>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex justify-between"><span>Monday - Friday</span><span className="font-medium">8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-medium">8:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between text-red-600 font-bold"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200"
          >
            {/* Placeholder for Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.815340628355!2d-74.7356426!3d40.2186444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c159aa244419cb%3A0xeda66e2d8ae67a21!2sZambranos%20Complete%20Auto%20Center!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

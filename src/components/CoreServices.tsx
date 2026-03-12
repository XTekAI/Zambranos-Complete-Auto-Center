import { motion } from 'motion/react';
import { Settings, Disc, Move, Truck, ArrowRight, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Suspension Repair',
    description: 'Expert diagnostics and repair for shocks, struts, and steering components to ensure a smooth, safe ride.',
    icon: <Settings className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1596464619711-6415e6b189a8?q=80&w=2070&auto=format&fit=crop',
    link: '#contact'
  },
  {
    title: 'Brake Services',
    description: 'Complete brake system repair, pad replacement, and rotor resurfacing for optimal stopping power.',
    icon: <Disc className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop',
    link: '#contact'
  },
  {
    title: 'Wheel Alignment',
    description: 'Precision computerized alignment to extend tire life and improve vehicle handling.',
    icon: <Move className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop',
    link: '#contact'
  },
  {
    title: 'Tire Services',
    description: 'Installation, rotation, balancing, TPMS service, and flat repair for all major brands.',
    icon: <Disc className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1590240455581-28564a594367?q=80&w=2070&auto=format&fit=crop',
    link: '#contact'
  },
  {
    title: 'Commercial Vehicles',
    description: 'Priority service for work trucks, vans, and fleets to minimize downtime.',
    icon: <Truck className="w-8 h-8 text-primary" />,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
    link: '#commercial'
  }
];

export default function CoreServices() {
  return (
    <section id="services" className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary text-sm font-bold mb-6 uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            Our Specialties
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-6 tracking-tight">
            High-Performance <span className="text-primary">Auto Care</span>
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            We focus on the critical systems that keep you safe on the road. From complex suspension work to precision alignments, our certified technicians deliver expert results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 hover:shadow-xl hover:shadow-zinc-300/50 transition-all border border-zinc-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-950 mb-3">{service.title}</h3>
                <p className="text-zinc-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

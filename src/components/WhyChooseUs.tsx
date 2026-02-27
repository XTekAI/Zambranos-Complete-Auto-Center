import { motion } from 'motion/react';
import { ShieldCheck, Award, MapPin, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-10 h-10 text-red-600" />,
    title: 'Certified Expertise',
    description: 'Our technicians are highly trained specialists in suspension, brakes, and alignment, not just general mechanics.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
    title: 'Trusted Warranty',
    description: 'We stand behind our work with comprehensive warranties on parts and labor for your peace of mind.'
  },
  {
    icon: <MapPin className="w-10 h-10 text-red-600" />,
    title: 'Locally Owned Since 1997',
    description: 'Proudly serving the Trenton community for over 25 years with honest, transparent pricing and reliable service.'
  },
  {
    icon: <Wrench className="w-10 h-10 text-red-600" />,
    title: 'State-of-the-Art Equipment',
    description: 'We invest in the latest diagnostic and alignment technology to ensure precision repairs every time.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-6 tracking-tight">
            Why Choose <span className="text-red-600">Zambranos</span>?
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            When it comes to your vehicle's safety and performance, you need specialists. Here is why drivers and fleets trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/50 transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-3">{reason.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

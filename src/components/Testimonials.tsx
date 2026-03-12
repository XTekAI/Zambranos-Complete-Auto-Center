import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Michael T.',
    text: 'Zambranos is the only place I trust with my work truck. They got my suspension fixed and new tires on in the same day. Fast, honest, and reasonably priced.',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    name: 'Sarah J.',
    text: 'I had a terrible shaking in my steering wheel. They diagnosed it as a bad tie rod and alignment issue. Fixed it quickly and the car drives like new. Highly recommend their suspension work!',
    rating: 5,
    date: '1 month ago'
  },
  {
    name: 'David R.',
    text: 'Great experience getting new brakes and rotors. They explained exactly what was wrong, showed me the worn parts, and didn\'t try to upsell me on things I didn\'t need.',
    rating: 5,
    date: '3 months ago'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 text-sm font-bold mb-6 uppercase tracking-wider">
            <Star className="w-4 h-4 fill-yellow-500" />
            200+ 5-Star Google Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Don't just take our word for it. Read why over 200 drivers in Trenton have given Zambranos Complete Auto Center a 5-star rating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative group hover:border-zinc-700 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-800 group-hover:text-primary/30 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-6 italic leading-relaxed relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-white">{review.name}</span>
                <span className="text-sm text-zinc-500">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary transition-colors"
          >
            Read More Reviews on Google
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

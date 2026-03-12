import { Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-1 mb-4">
              <span className="text-white">Zambran</span>
              <span className="text-primary">o</span>
              <span className="text-white">s</span>
            </a>
            <p className="text-sm mb-6 leading-relaxed">
              Serving Trenton since 1997. We are the premier auto center specializing in high-performance suspension, brake systems, wheel alignment, and tire services for passenger and commercial vehicles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Auto Repair</a></li>
              <li><a href="#commercial" className="hover:text-primary transition-colors">Commercial Vehicles</a></li>
              <li><a href="#financing" className="hover:text-primary transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Coupons</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Our Specialties</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-zinc-500">Suspension Repair</span></li>
              <li><span className="text-zinc-500">Brake Services</span></li>
              <li><span className="text-zinc-500">Wheel Alignment</span></li>
              <li><span className="text-zinc-500">Tire Installation</span></li>
              <li><span className="text-zinc-500">Fleet Maintenance</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1017 Hamilton Ave<br />Trenton, NJ 08629</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:609-396-8417" className="hover:text-white transition-colors font-bold text-lg text-white">(609) 396-8417</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Zambranos Complete Auto Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

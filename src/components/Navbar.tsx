import { Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 text-white sticky top-0 z-50 border-b border-zinc-800">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium text-center hidden md:block">
        <span className="flex items-center justify-center gap-2">
          <span className="text-yellow-300">★★★★★</span>
          Click here to see our 200+ 5-star reviews on Google and leave a review of your own!
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-1">
              <span className="text-white">Zambran</span>
              <span className="text-red-600">o</span>
              <span className="text-white">s</span>
            </a>
            <span className="ml-2 text-xs text-zinc-400 uppercase tracking-widest hidden sm:block mt-1">
              Complete Auto Center
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-zinc-300 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Services</a>
            <a href="#commercial" className="text-zinc-300 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Commercial</a>
            <a href="#financing" className="text-zinc-300 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Financing</a>
            
            <div className="flex flex-col items-end">
              <a href="tel:609-396-8417" className="flex items-center gap-2 text-xl font-bold text-white hover:text-red-500 transition-colors">
                <Phone className="w-5 h-5 text-red-600" />
                (609) 396-8417
              </a>
              <a href="https://www.google.com/maps/place/Zambranos+Complete+Auto+Center/@40.2186444,-74.7358035,21z/data=!4m15!1m8!3m7!1s0x89c159aa2414b915:0x36716ece72290eab!2s1017+Hamilton+Ave,+Trenton,+NJ+08629!3b1!8m2!3d40.2186494!4d-74.7355814!16s%2Fg%2F11b8yyr95l!3m5!1s0x89c159aa244419cb:0xeda66e2d8ae67a21!8m2!3d40.2186444!4d-74.7356426!16s%2Fg%2F1tdj5380?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors mt-1">
                <MapPin className="w-3 h-3" />
                1017 Hamilton Ave, Trenton NJ 08629
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a href="tel:609-396-8417" className="mr-4 text-white p-2 bg-red-600 rounded-full">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-white hover:bg-zinc-800 rounded-md">Services</a>
            <a href="#commercial" className="block px-3 py-2 text-base font-medium text-white hover:bg-zinc-800 rounded-md">Commercial</a>
            <a href="#financing" className="block px-3 py-2 text-base font-medium text-white hover:bg-zinc-800 rounded-md">Financing</a>
            <a href="tel:609-396-8417" className="block px-3 py-2 text-base font-medium text-red-500 hover:bg-zinc-800 rounded-md">Call (609) 396-8417</a>
            <a href="https://www.google.com/maps/place/Zambranos+Complete+Auto+Center/@40.2186444,-74.7358035,21z/data=!4m15!1m8!3m7!1s0x89c159aa2414b915:0x36716ece72290eab!2s1017+Hamilton+Ave,+Trenton,+NJ+08629!3b1!8m2!3d40.2186494!4d-74.7355814!16s%2Fg%2F11b8yyr95l!3m5!1s0x89c159aa244419cb:0xeda66e2d8ae67a21!8m2!3d40.2186444!4d-74.7356426!16s%2Fg%2F1tdj5380?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" className="block px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-800 rounded-md">Zambranos Complete Auto Center, Trenton NJ</a>
          </div>
        </div>
      )}
    </nav>
  );
}

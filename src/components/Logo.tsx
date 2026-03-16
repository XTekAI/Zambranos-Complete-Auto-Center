'use client';

import Link from 'next/link';
import { Settings } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = true }: LogoProps) {
  return (
    <Link href="/" className={`group flex flex-col items-start leading-none gap-0 cursor-pointer ${className}`}>
      <div className={`flex items-center font-display font-black tracking-tighter ${light ? 'text-white' : 'text-dark'} text-2xl md:text-3xl`}>
        <span>ZAMBRAN</span>
        <span className="inline-flex items-center justify-center">
          <Settings 
            className="h-[0.85em] w-[0.85em] text-primary" 
            strokeWidth={3.5}
          />
        </span>
        <span>S</span>
      </div>
      <div className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-primary uppercase mt-0.5 whitespace-nowrap">
        COMPLETE AUTO CENTER
      </div>
    </Link>
  );
}

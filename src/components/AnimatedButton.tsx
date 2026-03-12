'use client';

import Link from 'next/link';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: 'red' | 'white' | 'dark' | 'outline';
  onClick?: () => void;
}

const variants: Record<string, string> = {
  red: 'bg-primary text-white hover:brightness-110',
  white: 'bg-white text-dark hover:bg-surface',
  dark: 'bg-dark text-white hover:bg-primary',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
};

export default function AnimatedButton({
  text,
  href,
  className = '',
  variant = 'red',
  onClick,
}: AnimatedButtonProps) {
  const base = `inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={base}>
          {text}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {text}
    </button>
  );
}

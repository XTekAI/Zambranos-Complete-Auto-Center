'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: 'red' | 'white' | 'dark' | 'outline';
  onClick?: () => void;
  icon?: ReactNode;
}

export default function AnimatedButton({
  text,
  href,
  className = '',
  onClick,
  icon,
}: AnimatedButtonProps) {
  const baseClasses = `animated-button group rounded-full px-8 py-4 font-bold transition-all duration-300 ${className}`;

  const content = (
    <>
      <span className="anim-text">
        {icon && icon}
        {text}
      </span>
      <span className="anim-bg" />
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={baseClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

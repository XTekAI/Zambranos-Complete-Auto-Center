import React from 'react';

interface AnimatedButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: 'dark' | 'white' | 'red' | 'outline-red';
  target?: string;
  rel?: string;
}

export default function AnimatedButton({ text, href, className = '', variant = 'dark', target, rel }: AnimatedButtonProps) {
  const letters = text.split('');
  
  const baseClasses = "relative overflow-hidden rounded-full font-black uppercase inline-flex items-center justify-center group transition-colors px-8 py-4 text-center border-2";
  
  let variantClasses = "";
  let originalClasses = "";
  let hoverTextClasses = "";

  if (variant === 'red') {
    // Initial: Red bg, white text. Hover: Dark bg, white text.
    variantClasses = "bg-zinc-950 text-white border-zinc-950";
    originalClasses = "bg-primary text-white";
    hoverTextClasses = "text-white";
  } else if (variant === 'white') {
    // Initial: White bg, dark text. Hover: Dark bg, white text.
    variantClasses = "bg-zinc-950 text-white border-zinc-950";
    originalClasses = "bg-white text-zinc-950";
    hoverTextClasses = "text-white";
  } else if (variant === 'dark') {
    // Initial: Dark bg, white text. Hover: Red bg, white text.
    variantClasses = "bg-primary text-white border-primary";
    originalClasses = "bg-zinc-950 text-white";
    hoverTextClasses = "text-white";
  } else if (variant === 'outline-red') {
    // Initial: White bg, red text, red border. Hover: Red bg, white text.
    variantClasses = "bg-primary text-white border-primary";
    originalClasses = "bg-white text-primary";
    hoverTextClasses = "text-white";
  }

  const content = (
    <>
      <div className={`absolute inset-0 grid place-content-center transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-y-full ${originalClasses}`}>
        {text}
      </div>
      <div className="inline-flex">
        {letters.map((letter, i) => (
          <span
            key={i}
            className={`opacity-0 transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:opacity-100 group-hover:translate-y-0 ${
              i % 2 === 0 ? '-translate-y-4' : 'translate-y-4'
            } ${hoverTextClasses}`}
            style={{ transitionDelay: `${i * 0.03}s` }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {content}
    </button>
  );
}

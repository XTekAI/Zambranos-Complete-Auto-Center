'use client';

import { useLanguage } from './LanguageContext';
import type { Lang } from './translations';

const OPTIONS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
];

interface LanguageToggleProps {
  className?: string;
  size?: 'compact' | 'default';
}

export default function LanguageToggle({ className = '', size = 'default' }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();
  const isCompact = size === 'compact';

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={`flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 ${isCompact ? 'p-0.5' : 'p-1'} ${className}`}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={`rounded-full font-black uppercase tracking-wider transition-all duration-200 ${
            isCompact ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1.5 text-xs'
          } ${
            lang === option.value
              ? 'bg-primary text-white shadow-md shadow-primary/30'
              : 'text-white/50 hover:text-white'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

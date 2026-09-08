'use client';

import { useLanguage } from './LanguageContext';
import type { Lang } from './translations';

const OPTIONS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
];

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={`flex items-center rounded-full border border-white/20 bg-white/10 p-1 ${className}`}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest transition-all duration-200 ${
            lang === option.value
              ? 'bg-primary text-white shadow-lg shadow-primary/30'
              : 'text-white/50 hover:text-white'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

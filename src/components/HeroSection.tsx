import React from 'react';
import { siteConfig } from '../data/config';
import { ChevronDown, Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-24 overflow-hidden">
      {/* Yumuşak Güneş Işığı / Sunbeam */}
      <div className="sunbeam absolute inset-0 z-0" />

      {/* Dekoratif lale ve bahar motifleri */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-12 flex items-center justify-center gap-3 opacity-60">
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-champagne-400" />
        <span className="text-xl">🌷</span>
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-champagne-400" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Zarif Üst Başlık / Monogram */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-cream-50/90 border border-champagne-300/60 shadow-sm">
          <span className="font-script text-xl text-blush-500 font-bold">
            {siteConfig.couple.sender} & {siteConfig.couple.recipient}
          </span>
          <span className="w-1 h-1 rounded-full bg-champagne-400" />
          <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">
            {siteConfig.couple.date}
          </span>
        </div>

        {/* Ana Başlık */}
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.18] tracking-tight mb-8">
          İyi ki hayatımın <br />
          <span className="italic text-rose-gradient font-medium">
            en güzel hikâyesi
          </span>{' '}
          sen olmuşsun.
        </h1>

        {/* Zarif Aşk Mektubu Girişi */}
        <div className="relative max-w-2xl mx-auto px-6 py-8 rounded-2xl glass-card border border-blush-200/50 shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 bg-white text-champagne-500 rounded-full border border-champagne-200">
            <Heart className="w-4 h-4 fill-blush-400 text-blush-500" />
          </div>
          <p className="font-editorial text-xl sm:text-2xl text-stone-700 leading-relaxed italic">
            "{siteConfig.hero.letterParagraph}"
          </p>
        </div>

        {/* Aşağı Kaydır İpucu */}
        <div className="mt-14 flex flex-col items-center justify-center gap-2 text-stone-500">
          <span className="text-xs tracking-widest uppercase text-stone-400 font-medium">
            {siteConfig.hero.scrollHint}
          </span>
          <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center animate-bounce text-blush-500">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

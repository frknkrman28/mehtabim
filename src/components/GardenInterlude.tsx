import React from 'react';
import { siteConfig } from '../data/config';

export const GardenInterlude: React.FC = () => {
  return (
    <section className="relative py-32 px-4 my-20 overflow-hidden text-center bg-gradient-to-b from-transparent via-blush-50/60 to-transparent">
      {/* Dekoratif Lale ve Çiçek Çizimleri */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:block opacity-40 select-none">
        <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
          <path d="M60 230 C60 170, 30 140, 20 80" stroke="#698565" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 180 C20 160, 10 130, 20 100" stroke="#8FA78C" strokeWidth="2" strokeLinecap="round" />
          {/* Lale Çanağı */}
          <path d="M20 80 C5 70, 0 45, 10 25 C20 40, 25 55, 20 80 Z" fill="#F3D2D6" stroke="#CE6B7D" />
          <path d="M20 80 C35 70, 40 45, 30 25 C20 40, 15 55, 20 80 Z" fill="#F8D8C3" stroke="#CE6B7D" />
          <path d="M15 35 C20 15, 25 15, 25 35 Z" fill="#EAA7AF" stroke="#B84A5E" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:block opacity-40 select-none scale-x-[-1]">
        <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
          <path d="M60 230 C60 170, 30 140, 20 80" stroke="#698565" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 180 C20 160, 10 130, 20 100" stroke="#8FA78C" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 80 C5 70, 0 45, 10 25 C20 40, 25 55, 20 80 Z" fill="#F3D2D6" stroke="#CE6B7D" />
          <path d="M20 80 C35 70, 40 45, 30 25 C20 40, 15 55, 20 80 Z" fill="#F8D8C3" stroke="#CE6B7D" />
          <path d="M15 35 C20 15, 25 15, 25 35 Z" fill="#EAA7AF" stroke="#B84A5E" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-12 rounded-3xl glass-card border border-champagne-300/40 shadow-sm">
        {/* Ortadaki lale simgesi */}
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-cream-50 border border-champagne-200 flex items-center justify-center shadow-xs">
          <span className="text-2xl select-none">🌷</span>
        </div>

        {/* Cümle */}
        <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl text-stone-800 italic leading-relaxed font-normal">
          "{siteConfig.gardenInterlude.quote}"
        </blockquote>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-champagne-400" />
          <span className="font-script text-2xl text-blush-500 font-bold">
            {siteConfig.couple.recipient}
          </span>
          <span className="w-8 h-[1px] bg-champagne-400" />
        </div>
      </div>
    </section>
  );
};

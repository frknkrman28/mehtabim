import React, { useEffect, useState } from 'react';
import { siteConfig } from '../data/config';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

export const FinalBirthdayMessage: React.FC = () => {
  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    // Sayfanın en sonuna gelindiğinde hafif pastel kalp/çiçek konfetisi
    const triggerCelebration = () => {
      if (hasCelebrated) return;
      setHasCelebrated(true);
      try {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.8 },
          colors: ['#F3D2D6', '#CE6B7D', '#E8D59A', '#FFFDF9'],
          disableForReducedMotion: true,
        });
      } catch {
        // Fallback
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.documentElement.scrollHeight - 300;
      if (scrollPosition >= bottomThreshold) {
        triggerCelebration();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCelebrated]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
      {/* Yumuşak Işık Efekti */}
      <div className="absolute inset-0 bg-radial-gradient from-blush-100/50 via-cream-50/80 to-cream-100 pointer-events-none" />

      {/* Açan Lale & Kalp İllüstrasyonu */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blush-200 to-cream-50 border border-champagne-300 shadow-xl flex items-center justify-center animate-gentle-float">
          <span className="text-4xl select-none">🌷</span>
        </div>
        <div className="absolute -top-1 -right-1">
          <Heart className="w-7 h-7 text-blush-500 fill-blush-500 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* En Önemli Kutlama Başlığı */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-stone-900 font-normal leading-tight tracking-tight mb-4">
          {siteConfig.finalMessage.highlightText}
        </h2>

        {/* Seni Çok Seviyorum İtirafı */}
        <p className="font-editorial text-3xl sm:text-4xl md:text-5xl text-rose-gradient font-medium italic mt-4 mb-10">
          "{siteConfig.finalMessage.loveDeclaration}"
        </p>

        {/* Zarif Ayraç */}
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-champagne-400" />
          <span className="font-script text-3xl text-champagne-600">
            {siteConfig.couple.sender} &hearts; {siteConfig.couple.recipient}
          </span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-champagne-400" />
        </div>

        {/* Kapanış Cümlesi */}
        <p className="font-editorial text-xl sm:text-2xl text-stone-600 italic max-w-xl mx-auto leading-relaxed">
          "{siteConfig.finalMessage.subText}"
        </p>

        {/* Tarih ve Özel Gün Rozeti */}
        <div className="mt-8">
          <span className="inline-block px-5 py-2 rounded-full bg-cream-50 border border-champagne-300 text-stone-500 text-xs tracking-widest uppercase font-mono shadow-xs">
            {siteConfig.finalMessage.dateBadge}
          </span>
        </div>
      </div>
    </section>
  );
};

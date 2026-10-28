import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/config';
import { Sparkles, Heart } from 'lucide-react';

interface GiftIntroProps {
  onOpen: () => void;
}

export const GiftIntro: React.FC<GiftIntroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGift = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Çiçek yaprağı ve altın ışıltı konfetisi
    try {
      const count = 70;
      const defaults = {
        origin: { y: 0.6 },
        colors: ['#F3D2D6', '#EAA7AF', '#CE6B7D', '#F8D8C3', '#D4AF37', '#FFFDF9'],
        shapes: ['circle'] as ('circle')[],
        ticks: 200,
        gravity: 0.8,
        scalar: 1.2,
      };

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.6),
        spread: 60,
      });
      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.4),
        spread: 100,
        decay: 0.91,
      });
    } catch {
      // Confetti fallback
    }

    // Müziği hemen başlat ve yumuşak geçiş yap
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cream-100 transition-opacity duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(254, 245, 246, 0.9) 0%, rgba(250, 247, 242, 0.95) 100%),
          radial-gradient(#e8d59a 0.6px, transparent 0.6px)
        `,
        backgroundSize: '100% 100%, 24px 24px',
      }}
    >
      {/* İnce lale kenar süslemeleri (SVG) */}
      <div className="absolute top-4 left-4 w-28 h-28 opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-blush-500 stroke-current">
          <path d="M10 80 Q 25 50 40 40 Q 30 20 40 10 Q 50 25 45 40 Q 60 45 40 80" strokeWidth="1.5" />
          <path d="M40 80 Q 42 95 45 100" strokeWidth="2" stroke="#698565" />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 w-28 h-28 opacity-30 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-blush-500 stroke-current">
          <path d="M10 80 Q 25 50 40 40 Q 30 20 40 10 Q 50 25 45 40 Q 60 45 40 80" strokeWidth="1.5" />
          <path d="M40 80 Q 42 95 45 100" strokeWidth="2" stroke="#698565" />
        </svg>
      </div>

      {/* Kart / Mektup Kutusu İçeriği */}
      <div className="relative max-w-md w-11/12 mx-auto text-center px-8 py-12 rounded-3xl glass-card border border-blush-200/70 shadow-2xl">
        {/* Zarif Rozet */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200 text-blush-600 text-xs tracking-widest uppercase font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-champagne-500 animate-spin-slow" />
          <span>{siteConfig.intro.badge}</span>
        </div>

        {/* 3D / Vektörel Zarif Hediye Kutusu ve Lale İllüstrasyonu */}
        <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
          <div
            className={`w-28 h-28 rounded-2xl bg-gradient-to-tr from-blush-100 via-cream-50 to-blush-200 border border-blush-300 shadow-lg flex items-center justify-center transition-all duration-700 ${
              isOpening ? 'scale-110 rotate-6' : 'hover:scale-105 animate-gentle-float'
            }`}
          >
            {/* Hediye Kurdelesi & Lale Mührü */}
            <div className="relative flex flex-col items-center">
              <span className="text-4xl filter drop-shadow-sm select-none">🌷</span>
              <div className="w-8 h-8 rounded-full bg-champagne-300/40 border border-champagne-400/60 flex items-center justify-center -mt-2">
                <Heart className="w-4 h-4 text-blush-600 fill-blush-500" />
              </div>
            </div>
          </div>

          {/* Dış ışıltı halkası */}
          <div className="absolute inset-0 rounded-full border border-champagne-300/30 animate-pulse-subtle pointer-events-none" />
        </div>

        {/* Başlık Metni */}
        <h2 className="font-editorial text-2xl md:text-3xl text-stone-800 font-medium italic mb-3 leading-snug">
          "{siteConfig.intro.envelopeTitle}"
        </h2>

        <p className="font-script text-2xl text-blush-500 mb-8">
          {siteConfig.couple.sender} &hearts; {siteConfig.couple.recipient}
        </p>

        {/* Açılış Butonu */}
        <button
          onClick={handleOpenGift}
          disabled={isOpening}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-blush-500 via-rose-500 to-blush-600 text-white font-medium text-sm tracking-wider uppercase shadow-lg shadow-blush-500/25 hover:shadow-xl hover:shadow-blush-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:ring-offset-2"
        >
          <span className="relative z-10 flex items-center gap-2 font-medium">
            {siteConfig.intro.openButtonText}
          </span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        {/* Ses İpucu */}
        <p className="mt-4 text-xs text-stone-500 tracking-wide">
          {siteConfig.intro.hintText}
        </p>
      </div>
    </div>
  );
};

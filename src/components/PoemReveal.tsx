import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/config';
import { Feather, Eye, Sparkles } from 'lucide-react';

export const PoemReveal: React.FC = () => {
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  // Satırların tek tek zarifçe belirmesi
  useEffect(() => {
    if (!isStarted || showAll) return;

    if (revealedCount < siteConfig.poemSection.lines.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, 1400); // 1.4 saniye aralıklarla duygusal okuma ritmi
      return () => clearTimeout(timer);
    }
  }, [revealedCount, isStarted, showAll]);

  const handleStartReveal = () => {
    setIsStarted(true);
    setRevealedCount(1);
  };

  const handleShowAll = () => {
    setShowAll(true);
    setRevealedCount(siteConfig.poemSection.lines.length);
  };

  return (
    <section className="relative py-28 px-4 max-w-4xl mx-auto">
      {/* Üst Rozet */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50 border border-champagne-300 text-champagne-600 text-xs tracking-widest uppercase font-medium shadow-xs">
          <Feather className="w-3.5 h-3.5 text-blush-500" />
          <span>{siteConfig.poemSection.badge}</span>
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl text-stone-900 font-normal mt-4">
          {siteConfig.poemSection.title}
        </h2>
        <p className="font-editorial text-lg text-stone-500 italic mt-2">
          {siteConfig.poemSection.subtitle}
        </p>
      </div>

      {/* Mektup Kağıdı / Parşömen Alanı */}
      <div className="relative paper-texture p-8 sm:p-14 md:p-16 rounded-3xl border-2 border-champagne-200 shadow-2xl overflow-hidden">
        {/* Zarif İç Altın Çerçeve */}
        <div className="absolute inset-3 sm:inset-4 border border-champagne-300/50 rounded-2xl pointer-events-none" />

        {/* Köşe Lale Gravürleri */}
        <div className="absolute top-6 left-6 text-xl opacity-40 select-none">🌷</div>
        <div className="absolute top-6 right-6 text-xl opacity-40 select-none">🌷</div>
        <div className="absolute bottom-6 left-6 text-xl opacity-40 select-none">🌷</div>
        <div className="absolute bottom-6 right-6 text-xl opacity-40 select-none">🌷</div>

        {/* Akrostiş İpucu Rozeti */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-10 h-[1px] bg-champagne-300" />
          <span className="text-xs uppercase tracking-widest text-champagne-600 font-medium font-mono">
            Akrostiş: {siteConfig.poemSection.acrosticWord}
          </span>
          <span className="w-10 h-[1px] bg-champagne-300" />
        </div>

        {/* Başlatma veya Tümünü Göster Kontrolü */}
        {!isStarted && !showAll ? (
          <div className="text-center py-12">
            <p className="font-editorial text-xl text-stone-600 italic mb-6">
              Sana yazdığım en derin mısraları satır satır okumak ister misin?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleStartReveal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush-500 hover:bg-blush-600 text-white font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4 text-champagne-200" />
                <span>Mısraları Yavaşça Oku</span>
              </button>
              <button
                onClick={handleShowAll}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 hover:bg-white text-stone-700 border border-stone-200 font-medium text-sm transition-all"
              >
                <Eye className="w-4 h-4 text-stone-500" />
                <span>Şiirin Tamamını Gör</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Şiir Satırları */}
            <div className="space-y-4 sm:space-y-5 text-center my-6">
              {siteConfig.poemSection.lines.map((line, idx) => {
                const isVisible = showAll || idx < revealedCount;
                return (
                  <div
                    key={idx}
                    className={`transition-all duration-1000 transform ${
                      isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                    }`}
                  >
                    <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-stone-800 leading-relaxed tracking-wide">
                      {/* Akrostiş Baş Harfi Vurgusu */}
                      <span className="inline-block font-semibold text-rose-gradient text-3xl sm:text-4xl md:text-5xl mr-0.5 border-b-2 border-champagne-300/80">
                        {line.acrosticLetter}
                      </span>
                      <span>{line.text}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Hızlıca Hepsini Görme Butonu (Okuma devam ederken) */}
            {!showAll && revealedCount < siteConfig.poemSection.lines.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleShowAll}
                  className="text-xs tracking-wider uppercase text-stone-400 hover:text-blush-500 transition-colors underline decoration-dotted"
                >
                  Beklemeden hepsini göster
                </button>
              </div>
            )}

            {/* Şiir Sonu İmzası */}
            {(showAll || revealedCount >= siteConfig.poemSection.lines.length) && (
              <div className="mt-14 pt-8 border-t border-champagne-200/80 text-center animate-fade-in">
                <p className="font-script text-4xl sm:text-5xl text-rose-gradient mb-2">
                  {siteConfig.poemSection.signature}
                </p>
                <p className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                  {siteConfig.couple.date}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

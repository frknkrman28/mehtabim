import React, { useState } from 'react';
import { siteConfig, PhotoItem } from '../data/config';
import { Calendar, Heart, ZoomIn, Sparkles } from 'lucide-react';
import { ImageModal } from './ImageModal';

export const MemorySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Bölüm Başlığı */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100/70 border border-blush-200 text-blush-600 text-xs tracking-widest uppercase font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5 text-champagne-500" />
          <span>Anılarımızın Bahçesi</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
          Zamanın İçinde <span className="italic text-rose-gradient">Seninle</span> Yürümek
        </h2>
        <p className="mt-4 font-editorial text-lg text-stone-600 italic">
          Her karede bir tebessüm, her saniyede çoğalan sevgimiz...
        </p>
      </div>

      {/* Fotoğraf Akışı */}
      <div className="space-y-24">
        {siteConfig.photos.map((photo, index) => {
          const isEven = index % 2 === 0;
          const hasQuote = Boolean(photo.quote);

          return (
            <div key={photo.id} className="relative">
              {/* Ara Pasaj / Aforizma (Varsa) */}
              {hasQuote && (
                <div className="my-16 text-center max-w-xl mx-auto px-6 py-8 rounded-2xl bg-gradient-to-r from-cream-100 via-blush-50 to-cream-100 border-y border-blush-200/80 shadow-sm">
                  <span className="text-2xl select-none mb-2 block">🌷</span>
                  <p className="font-editorial text-2xl sm:text-3xl text-stone-800 italic leading-snug">
                    "{photo.quote}"
                  </p>
                </div>
              )}

              {/* Fotoğraf Türüne Göre Render */}
              {photo.layout === 'cinematic' ? (
                /* 1. SİNEMATİK GENİŞ KARE */
                <div className="max-w-4xl mx-auto group">
                  <div className="relative rounded-3xl overflow-hidden glass-card p-3 sm:p-5 border border-champagne-300/40 shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <div
                      className="relative w-full max-h-[580px] bg-stone-900 rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      {!failedImages[photo.id] ? (
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          onError={() => handleImageError(photo.id)}
                          className="w-full max-h-[580px] object-contain transition-transform duration-700 group-hover:scale-102"
                        />
                      ) : (
                        <div className="py-24 px-6 text-center text-stone-300">
                          <span className="text-4xl block mb-2">🌷</span>
                          <p className="font-editorial text-xl italic">{photo.caption}</p>
                        </div>
                      )}

                      {/* Zoom İpucu Butonu */}
                      <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Fotoğraf Alt Yazısı */}
                    <div className="pt-4 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <p className="font-editorial text-xl sm:text-2xl text-stone-800 italic font-medium">
                        "{photo.caption}"
                      </p>
                      {photo.date && (
                        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-stone-500">
                          <Calendar className="w-3.5 h-3.5 text-blush-500" />
                          {photo.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : photo.layout === 'framed' ? (
                /* 2. ZARİF ÇERÇEVELİ TABLO */
                <div className="max-w-3xl mx-auto group">
                  <div className="relative bg-white p-5 sm:p-8 rounded-2xl border-4 border-double border-champagne-300 shadow-xl transition-transform duration-500 hover:-translate-y-1">
                    <div
                      className="relative bg-stone-900 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer max-h-[500px]"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      {!failedImages[photo.id] ? (
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          onError={() => handleImageError(photo.id)}
                          className="w-full max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-103"
                        />
                      ) : (
                        <div className="py-20 text-center text-stone-300">
                          <span className="text-3xl block mb-2">🌷</span>
                          <p className="font-editorial text-lg italic">{photo.caption}</p>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="font-editorial text-xl text-stone-800 italic">
                        "{photo.caption}"
                      </p>
                      {photo.date && (
                        <p className="text-xs tracking-widest uppercase text-stone-400 mt-1">
                          {photo.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* 3. POLAROID KART FORMU */
                <div
                  className={`max-w-md mx-auto sm:max-w-lg transition-transform duration-500 ${
                    isEven ? 'sm:mr-auto sm:ml-12 rotate-[-1.5deg]' : 'sm:ml-auto sm:mr-12 rotate-[1.5deg]'
                  }`}
                >
                  <div
                    className="polaroid-card group cursor-pointer"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    {/* Washi Tape / Bant Efekti */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-champagne-200/60 backdrop-blur-sm border border-champagne-300/40 rotate-[-2deg] shadow-xs select-none" />

                    <div className="relative bg-stone-900 rounded-sm overflow-hidden flex items-center justify-center max-h-[460px]">
                      {!failedImages[photo.id] ? (
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          onError={() => handleImageError(photo.id)}
                          className="w-full max-h-[460px] object-contain transition-transform duration-700 group-hover:scale-103"
                        />
                      ) : (
                        <div className="py-16 text-center text-stone-300">
                          <span className="text-3xl block mb-2">🌷</span>
                          <p className="font-editorial text-base italic">{photo.caption}</p>
                        </div>
                      )}

                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Polaroid Alt Yazısı (El Yazısı Hissi) */}
                    <div className="mt-3 px-2 flex items-center justify-between">
                      <p className="font-editorial text-lg sm:text-xl text-stone-800 italic leading-snug">
                        {photo.caption}
                      </p>
                      <Heart className="w-4 h-4 text-blush-400 group-hover:scale-110 group-hover:fill-blush-400 transition-all flex-shrink-0" />
                    </div>

                    {photo.date && (
                      <p className="px-2 text-[11px] uppercase tracking-wider text-stone-400 mt-1 font-mono">
                        {photo.date}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal / Lightbox */}
      <ImageModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </section>
  );
};

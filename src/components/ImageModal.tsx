import React, { useEffect } from 'react';
import { X, Heart, Calendar } from 'lucide-react';
import { PhotoItem } from '../data/config';

interface ImageModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-cream-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-champagne-300/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 shadow-md transition-all hover:scale-105"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Görsel Alanı */}
        <div className="flex-1 bg-stone-950 flex items-center justify-center min-h-[300px] max-h-[65vh] md:max-h-[80vh] overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-contain select-none"
          />
        </div>

        {/* Detay ve Not Alanı */}
        <div className="p-6 md:w-80 flex flex-col justify-between bg-cream-50">
          <div>
            {photo.date && (
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-400 font-medium mb-3">
                <Calendar className="w-3.5 h-3.5 text-blush-500" />
                <span>{photo.date}</span>
              </div>
            )}
            <p className="font-editorial text-xl text-stone-800 italic leading-relaxed mb-4">
              "{photo.caption}"
            </p>
            {photo.quote && (
              <div className="p-3 rounded-xl bg-blush-50 border border-blush-200/60 text-xs text-stone-600 italic">
                {photo.quote}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-400">
            <span className="font-script text-lg text-blush-500">Furkan &hearts; Mehtap</span>
            <div className="flex items-center gap-1 text-champagne-500">
              <Heart className="w-3.5 h-3.5 fill-current text-blush-400" />
              <span>Sonsuz Anı</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

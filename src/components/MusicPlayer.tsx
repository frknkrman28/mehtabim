import React, { useState, useRef, useEffect } from 'react';
import { siteConfig, SongItem } from '../data/config';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
  ListMusic,
  Disc,
} from 'lucide-react';

interface MusicPlayerProps {
  shouldPlay: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ shouldPlay }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong: SongItem = siteConfig.playlist[currentSongIndex] || siteConfig.playlist[0];

  // Başlangıçta "Hediyeni Aç" tıklandığında müziği başlat
  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Tarayıcı engellerse kullanıcı butona tıklar
          setIsPlaying(false);
        });
    }
  }, [shouldPlay]);

  // Şarkı değiştiğinde veya oynatma durumu tetiklendiğinde
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % siteConfig.playlist.length);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 100);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? siteConfig.playlist.length - 1 : prev - 1
    );
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 100);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSongEnded = () => {
    handleNext();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnded}
        preload="metadata"
      />

      {/* Sabit Oynatıcı Konumu */}
      <div className="fixed bottom-5 right-5 z-40 max-w-[92vw] sm:max-w-md">
        {/* Çalma Listesi Açılır Kutusu */}
        {showPlaylist && (
          <div className="mb-3 p-4 rounded-2xl glass-card border border-blush-200/80 shadow-2xl animate-fade-in text-stone-800">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200/60">
              <span className="text-xs font-semibold tracking-wider uppercase text-blush-600 flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5" />
                Bizim Şarkılarımız
              </span>
              <button
                onClick={() => setShowPlaylist(false)}
                className="text-stone-400 hover:text-stone-600 text-xs"
              >
                Kapat
              </button>
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {siteConfig.playlist.map((song, idx) => (
                <button
                  key={song.id}
                  onClick={() => {
                    setCurrentSongIndex(idx);
                    setTimeout(() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = 0;
                        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                      }
                    }, 50);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs ${
                    idx === currentSongIndex
                      ? 'bg-blush-100 text-blush-700 font-medium'
                      : 'hover:bg-cream-100 text-stone-700'
                  }`}
                >
                  <div className="truncate pr-2">
                    <p className="font-medium truncate">{song.title}</p>
                    <p className="text-[10px] text-stone-400 truncate">{song.artist}</p>
                  </div>
                  {idx === currentSongIndex && isPlaying && (
                    <div className="flex items-end gap-0.5 h-3 flex-shrink-0">
                      <span className="w-1 h-3 bg-blush-500 animate-pulse" />
                      <span className="w-1 h-2 bg-blush-400 animate-pulse delay-100" />
                      <span className="w-1 h-3.5 bg-blush-600 animate-pulse delay-200" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ana Oynatıcı Kartı */}
        {isMinimized ? (
          /* Küçültülmüş Mini Rozet */
          <button
            onClick={() => setIsMinimized(false)}
            className="group flex items-center gap-2.5 p-3 rounded-full glass-card border border-blush-200 shadow-xl hover:scale-105 transition-all text-stone-700"
          >
            <div className={`p-1.5 rounded-full bg-blush-500 text-white ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <Disc className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium pr-2 max-w-[120px] truncate">
              {currentSong.title}
            </span>
          </button>
        ) : (
          /* Geniş Oynatıcı */
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-blush-200/90 shadow-2xl text-stone-800">
            <div className="flex items-center gap-3">
              {/* Dönen Vinil / Müzik İkonu */}
              <div
                onClick={togglePlay}
                className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-stone-900 to-stone-700 text-champagne-300 flex items-center justify-center cursor-pointer shadow-md flex-shrink-0 overflow-hidden group"
              >
                <div className={`w-full h-full flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
                  <Disc className="w-6 h-6 text-champagne-300" />
                </div>
                <div className="absolute inset-0 bg-blush-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </div>
              </div>

              {/* Şarkı Bilgisi */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-stone-900 truncate">
                    {currentSong.title}
                  </p>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-[10px] text-stone-400 hover:text-stone-600 px-1"
                    title="Küçült"
                  >
                    _
                  </button>
                </div>
                <p className="text-[11px] text-stone-500 truncate">
                  {currentSong.artist}
                </p>

                {/* Süre Çubuğu */}
                <div className="mt-1 flex items-center gap-2 text-[10px] text-stone-400 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <div className="flex-1 h-1 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blush-400 to-rose-500 rounded-full"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Kontroller Alt Barı */}
            <div className="mt-3 pt-2 border-t border-stone-200/50 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                  title="Önceki Şarkı"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-full bg-blush-500 hover:bg-blush-600 text-white transition-all shadow-xs"
                  title={isPlaying ? 'Durdur' : 'Oynat'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                  title="Sonraki Şarkı"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Ses Kontrolü */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleMute}
                  className="text-stone-500 hover:text-stone-700 p-1"
                  title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const newVol = parseFloat(e.target.value);
                    setVolume(newVol);
                    if (isMuted) setIsMuted(false);
                  }}
                  className="w-16 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-blush-500"
                />
              </div>

              {/* Çalma Listesi Butonu */}
              <button
                onClick={() => setShowPlaylist(!showPlaylist)}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  showPlaylist ? 'bg-blush-100 text-blush-600' : 'text-stone-500 hover:bg-stone-100'
                }`}
                title="Şarkı Listesi"
              >
                <ListMusic className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

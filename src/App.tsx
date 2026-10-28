import React, { useState } from 'react';
import { GiftIntro } from './components/GiftIntro';
import { HeroSection } from './components/HeroSection';
import { MemorySection } from './components/MemorySection';
import { GardenInterlude } from './components/GardenInterlude';
import { PoemReveal } from './components/PoemReveal';
import { FinalBirthdayMessage } from './components/FinalBirthdayMessage';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';
import { ButterflyGarden } from './components/ButterflyGarden';

export const App: React.FC = () => {
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    setStartMusic(true);
  };

  return (
    <div className="relative min-h-screen bg-cream-100 text-stone-800 overflow-x-hidden selection:bg-blush-200 selection:text-blush-600">
      {/* 1. Açılış Ekranı: Hediye Kutusu / Aşk Mektubu */}
      {!isGiftOpened && <GiftIntro onOpen={handleOpenGift} />}

      {/* Arka Plan Bahar Efektleri (Süzülen yapraklar & kelebekler) */}
      <FloatingPetals />
      <ButterflyGarden />

      {/* Ana Hikaye Akışı */}
      <main className={`transition-opacity duration-1000 ${isGiftOpened ? 'opacity-100' : 'opacity-0'}`}>
        {/* 3. Bölüm: Seninle Başlayan Güzel Şeyler (Hero) */}
        <HeroSection />

        {/* 4. Bölüm: Kaydırdıkça Açılan Anılarımız (Fotoğraf Hikayesi) */}
        <MemorySection />

        {/* 6. Bölüm: Küçük Bir Bahçe Molası (Garden Interlude) */}
        <GardenInterlude />

        {/* 7. Bölüm: Şiirim, Sadece Sana (Akrostiş Şiir) */}
        <PoemReveal />

        {/* Final: Doğum Günü Kutlama Mesajı */}
        <FinalBirthdayMessage />
      </main>

      {/* 5. Bölüm: Sabit Müzik Oynatıcı (Müzik kesintisiz devam eder) */}
      <MusicPlayer shouldPlay={startMusic} />
    </div>
  );
};

export default App;

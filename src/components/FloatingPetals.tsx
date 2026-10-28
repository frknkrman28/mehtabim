import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  swayAmplitude: number;
  swaySpeed: number;
  swayOffset: number;
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Bahar bahçesi renkleri: Pudra pembe, pastel şeftali, gül yaprağı, lale kırmızısı dokunuşu
    const colors = [
      'rgba(247, 215, 220, ', // pudra pembe
      'rgba(243, 194, 203, ', // yumuşak pembe
      'rgba(253, 235, 220, ', // pastel şeftali
      'rgba(224, 122, 122, ', // hafif gül kurusu
      'rgba(212, 175, 55, ',  // şampanya altını ışıltı
    ];

    const petalCount = window.innerWidth < 768 ? 18 : 32;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.8 + 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.45 + 0.25,
        swayAmplitude: Math.random() * 25 + 10,
        swaySpeed: Math.random() * 0.015 + 0.005,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time * p.swaySpeed * 60 + p.swayOffset) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        // Petal shape (zarif lale/gül yaprağı silüeti)
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.7, p.size * 0.8, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.8, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

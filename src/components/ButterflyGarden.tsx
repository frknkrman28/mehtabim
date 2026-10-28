import React from 'react';

export const ButterflyGarden: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* Kelebek 1 - Sol üstten sağ ortaya doğru süzülen */}
      <div 
        className="absolute w-8 h-8 opacity-70 animate-butterfly-1"
        style={{
          top: '20%',
          left: '10%',
          animation: 'butterflyFlight1 28s ease-in-out infinite'
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full filter drop-shadow-sm">
          <path
            d="M 25,25 Q 15,5 5,15 Q 0,25 15,30 Q 22,28 25,25"
            fill="#F3D2D6"
            stroke="#CE6B7D"
            strokeWidth="0.8"
            className="origin-[25px_25px] animate-wing-left"
          />
          <path
            d="M 25,25 Q 35,5 45,15 Q 50,25 35,30 Q 28,28 25,25"
            fill="#F8D8C3"
            stroke="#CE6B7D"
            strokeWidth="0.8"
            className="origin-[25px_25px] animate-wing-right"
          />
          {/* Gövde ve anten */}
          <line x1="25" y1="18" x2="25" y2="32" stroke="#5A7358" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 25,18 Q 23,12 21,10" fill="none" stroke="#5A7358" strokeWidth="0.8" />
          <path d="M 25,18 Q 27,12 29,10" fill="none" stroke="#5A7358" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Kelebek 2 - Sağ alttan çapraz yükselen */}
      <div 
        className="absolute w-6 h-6 opacity-60"
        style={{
          top: '65%',
          right: '12%',
          animation: 'butterflyFlight2 34s ease-in-out infinite'
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full filter drop-shadow-sm">
          <path
            d="M 25,25 Q 12,8 4,18 Q 2,28 16,31 Q 22,28 25,25"
            fill="#E8E0EB"
            stroke="#A89AB3"
            strokeWidth="0.8"
            className="origin-[25px_25px] animate-wing-left"
          />
          <path
            d="M 25,25 Q 38,8 46,18 Q 48,28 34,31 Q 28,28 25,25"
            fill="#FAF5E6"
            stroke="#D4AF37"
            strokeWidth="0.8"
            className="origin-[25px_25px] animate-wing-right"
          />
          <line x1="25" y1="18" x2="25" y2="32" stroke="#4F684B" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      <style>{`
        @keyframes butterflyFlight1 {
          0% { transform: translate(0, 0) rotate(15deg) scale(0.9); }
          25% { transform: translate(120px, 80px) rotate(-10deg) scale(1); }
          50% { transform: translate(250px, -40px) rotate(20deg) scale(0.95); }
          75% { transform: translate(140px, -120px) rotate(-5deg) scale(0.85); }
          100% { transform: translate(0, 0) rotate(15deg) scale(0.9); }
        }

        @keyframes butterflyFlight2 {
          0% { transform: translate(0, 0) rotate(-20deg) scale(0.85); }
          30% { transform: translate(-140px, -100px) rotate(10deg) scale(0.95); }
          60% { transform: translate(-80px, -220px) rotate(-15deg) scale(1); }
          85% { transform: translate(40px, -120px) rotate(5deg) scale(0.9); }
          100% { transform: translate(0, 0) rotate(-20deg) scale(0.85); }
        }

        .animate-wing-left {
          animation: wingFlapLeft 0.35s ease-in-out infinite alternate;
        }
        .animate-wing-right {
          animation: wingFlapRight 0.35s ease-in-out infinite alternate;
        }

        @keyframes wingFlapLeft {
          from { transform: scaleX(1); }
          to { transform: scaleX(0.2); }
        }
        @keyframes wingFlapRight {
          from { transform: scaleX(1); }
          to { transform: scaleX(0.2); }
        }
      `}</style>
    </div>
  );
};

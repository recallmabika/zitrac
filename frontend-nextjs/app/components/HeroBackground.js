'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  { type: 'video', src: '/assets/networking.mp4' },
  { type: 'image', src: '/assets/cloud-infrastructure.png', animation: 'zoom' },
  { type: 'video', src: '/assets/hm2xc7jyixawkycqxesi.mp4' },
  { type: 'image', src: '/assets/global-network.png', animation: 'pan' },
  { type: 'image', src: '/assets/particle-wave-1.png', animation: 'zoom' },
  { type: 'image', src: '/assets/particle-wave-2.png', animation: 'pan' },
];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advance = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 1200);
  }, []);

  useEffect(() => {
    const slide = slides[current];
    // Videos play for 8s, images for 5s
    const duration = slide.type === 'video' ? 8000 : 5000;
    const timer = setTimeout(advance, duration);
    return () => clearTimeout(timer);
  }, [current, advance]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {slides.map((slide, i) => {
        const isActive = i === current;
        const animClass = slide.animation === 'pan' ? 'hero-bg-pan' : 'hero-bg-zoom';

        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              isActive && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover scale-105 ${isActive ? 'hero-bg-zoom' : ''}`}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={slide.src}
                alt=""
                fill
                className={`object-cover ${isActive ? animClass : ''}`}
                unoptimized
                aria-hidden="true"
                priority={i === 0}
              />
            )}
          </div>
        );
      })}

      {/* Converging Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-red-600/30 blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-red-700/35 blur-[130px] pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-red-900/20 blur-[150px] pointer-events-none"></div>

      {/* Particle Wave Overlays - highly visible */}
      <Image
        src="/assets/particle-wave-1.png"
        alt=""
        width={900}
        height={400}
        className="absolute -top-10 -left-10 w-[55%] h-auto opacity-50 object-cover pointer-events-none mix-blend-screen rotate-[10deg] scale-110"
        unoptimized
        aria-hidden="true"
      />
      <Image
        src="/assets/particle-wave-2.png"
        alt=""
        width={900}
        height={400}
        className="absolute -bottom-10 -right-10 w-[55%] h-auto opacity-45 object-cover pointer-events-none mix-blend-screen rotate-[-5deg] scale-110"
        unoptimized
        aria-hidden="true"
      />

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40"></div>

      {/* Animated connecting dots grid */}
      <div className="hero-dots absolute inset-0 pointer-events-none opacity-15"></div>
    </div>
  );
}

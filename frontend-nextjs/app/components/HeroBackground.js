'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Hero backdrop images:
// 1. Shaking hands at Advisory & Support (/assets/it-consulting.jpg)
// 2. Web Hosting & Domain Registration office (/assets/web-hosting-hero.png)
// 3. Enterprise Strategy / Business Meeting (/assets/hero-business-meeting.jpg)
// 4. Mission-Critical Datacenter Server Racks (/assets/hero-datacenter-racks.png)
// 5. Mobile & Cloud User Experience (/assets/hero-mobile-client.jpg)
// 6. Solid Pure Black Background (Minimalist Enterprise Focus)
const HERO_SLIDES = [
  {
    type: 'image',
    src: '/assets/it-consulting.jpg',
    label: 'Advisory & IT Support',
    alt: 'ZITRAC Enterprise Advisory & Strategic IT Support',
  },
  {
    type: 'image',
    src: '/assets/web-hosting-hero.png',
    label: 'Cloud & Web Hosting',
    alt: 'Web Hosting & Domain Registration Zimbabwe',
  },
  {
    type: 'image',
    src: '/assets/hero-business-meeting.jpg',
    label: 'Strategic Transformation',
    alt: 'Enterprise Strategy & Digital Transformation Consulting',
  },
  {
    type: 'image',
    src: '/assets/hero-datacenter-racks.png',
    label: 'Tier-3 Datacenter Racks',
    alt: 'Tier-3 Datacenter Server Infrastructure & Cloud Hosting',
  },
  {
    type: 'image',
    src: '/assets/hero-mobile-client.jpg',
    label: 'Mobile & Cloud Portals',
    alt: 'Connected Mobile Applications & Cloud Client Portals',
  },
  {
    type: 'color',
    color: '#000000',
    label: 'Zero-Distraction Mode',
    alt: 'Solid Black Background',
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Background slide items - Slightly reduced visibility as requested */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            idx === current ? 'opacity-60' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover hero-bg-zoom contrast-105"
              unoptimized
              aria-hidden="true"
              priority={idx === 0}
            />
          ) : (
            <div className="w-full h-full bg-black" />
          )}
        </div>
      ))}

      {/* Balanced dark gradients to keep text legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/45 pointer-events-none" />

      {/* Slide Navigation Progress Bars - Reduced size, docked neatly above marquee */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-30 pointer-events-auto">
        <div className="max-w-md sm:max-w-lg mx-auto px-4 flex items-center gap-1.5 sm:gap-2">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
                className="group flex-1 py-2 focus:outline-none cursor-pointer"
              >
                {/* Thin Sleek Track */}
                <div className="h-[2.5px] w-full bg-white/15 rounded-full overflow-hidden transition-colors group-hover:bg-white/25">
                  {/* Faint Loading Fill */}
                  <div
                    className={`h-full rounded-full transition-all ${
                      isActive
                        ? 'bg-red-500/75 w-full'
                        : 'w-0 bg-white/30'
                    }`}
                    style={
                      isActive
                        ? {
                            animation: `heroBarProgress ${SLIDE_DURATION}ms linear forwards`,
                          }
                        : {}
                    }
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

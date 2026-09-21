'use client';

import { useEffect, useState } from 'react';

export default function NavbarScrollEffect() {
  const [scrollState, setScrollState] = useState('top'); // 'top', 'hero', 'past-hero'

  useEffect(() => {
    const handler = () => {
      const heroHeight = window.innerHeight - 100;
      if (window.scrollY > heroHeight) {
        setScrollState('past-hero');
      } else if (window.scrollY > 32) {
        setScrollState('hero');
      } else {
        setScrollState('top');
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const nav = document.getElementById('main-navbar');
    if (!nav) return;
    
    if (scrollState === 'past-hero') {
      nav.classList.add('navbar-scrolled');
      nav.classList.remove('navbar-hero-scroll');
    } else if (scrollState === 'hero') {
      nav.classList.remove('navbar-scrolled');
      nav.classList.add('navbar-hero-scroll');
    } else {
      nav.classList.remove('navbar-scrolled');
      nav.classList.remove('navbar-hero-scroll');
    }
  }, [scrollState]);

  return null;
}

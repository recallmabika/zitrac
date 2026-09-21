'use client';

import { useEffect, useState } from 'react';

export default function NavbarScrollEffect() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const nav = document.getElementById('main-navbar');
    if (!nav) return;
    if (scrolled) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  }, [scrolled]);

  return null;
}

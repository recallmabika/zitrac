'use client';

import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook that adds 'is-visible' class to elements
 * with 'animate-on-scroll', 'animate-slide-left', 'animate-slide-right',
 * 'animate-scale', 'hero-title-line', or 'hero-fade-up' classes.
 */
export default function ScrollAnimator() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const selectors = [
      '.animate-on-scroll',
      '.animate-slide-left',
      '.animate-slide-right',
      '.animate-scale',
      '.hero-title-line',
      '.hero-fade-up',
    ].join(', ');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe existing elements
    document.querySelectorAll(selectors).forEach((el) => observer.observe(el));

    // MutationObserver for dynamically added elements
    const mutation = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches?.(selectors)) observer.observe(node);
          node.querySelectorAll?.(selectors).forEach((el) => observer.observe(el));
        });
      });
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}

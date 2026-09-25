'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Intersection Observer hook that adds 'is-visible' class to elements
 * with 'animate-on-scroll', 'animate-slide-left', 'animate-slide-right',
 * 'animate-scale', 'hero-title-line', or 'hero-fade-up' classes.
 */
export default function ScrollAnimator() {
  const pathname = usePathname();
  const observerRef = useRef(null);

  useEffect(() => {
    const selectors = [
      '.animate-on-scroll',
      '.animate-slide-left',
      '.animate-slide-right',
      '.animate-drop-top',
      '.animate-slide-up',
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
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px',
      }
    );
    observerRef.current = observer;

    // Observe existing elements
    document.querySelectorAll(selectors).forEach((el) => {
      // If already visible in viewport, make visible immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });

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
  }, [pathname]);

  return null;
}

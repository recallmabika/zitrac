'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ChatWithUs() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-20 z-40 select-none font-sans"
    >
      {/* Independent Floating Channel Pills with Slower, Staggered Entrance Motion */}
      <div
        className={`absolute bottom-full mb-3 right-0 flex flex-col items-end gap-2.5 transition-all duration-700 ease-out origin-bottom-right pointer-events-none ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Channel 1: WhatsApp Chat */}
        <a
          href="https://wa.me/263718001031?text=Hello%20ZITRAC%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          style={{
            transitionDelay: isOpen ? '160ms' : '0ms',
          }}
          className={`group flex items-center gap-3.5 px-4 py-3 rounded-none border border-black/15 dark:border-white/15 bg-white dark:bg-[#0c0d12] shadow-xl hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-[#0f1a16] transition-all duration-500 min-w-[260px] sm:min-w-[280px] ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-all">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-xs text-[#0a0a0f] dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                WhatsApp Chat
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                &bull; Instant
              </span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              Fast technical replies via WhatsApp
            </div>
          </div>
        </a>

        {/* Channel 2: Project Scope Inquiry */}
        <Link
          href="/contact/"
          onClick={() => setIsOpen(false)}
          style={{
            transitionDelay: isOpen ? '90ms' : '0ms',
          }}
          className={`group flex items-center gap-3.5 px-4 py-3 rounded-none border border-black/15 dark:border-white/15 bg-white dark:bg-[#0c0d12] shadow-xl hover:border-red-500/50 hover:bg-red-50 dark:hover:bg-[#1a0f12] transition-all duration-500 min-w-[260px] sm:min-w-[280px] ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 group-hover:bg-red-600 group-hover:text-white transition-all">
            <svg
              className="h-4 w-4 stroke-[1.8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.018z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-xs text-[#0a0a0f] dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Project Scope Inquiry
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-red-600 dark:text-red-400">
                &bull; Brief
              </span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              Submit engineering scope directly
            </div>
          </div>
        </Link>

        {/* Channel 3: Direct Call Desk */}
        <a
          href="tel:+263718001031"
          onClick={() => setIsOpen(false)}
          style={{
            transitionDelay: isOpen ? '20ms' : '0ms',
          }}
          className={`group flex items-center gap-3.5 px-4 py-3 rounded-none border border-black/15 dark:border-white/15 bg-white dark:bg-[#0c0d12] shadow-xl hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-[#0f1422] transition-all duration-500 min-w-[260px] sm:min-w-[280px] ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <svg
              className="h-4 w-4 stroke-[1.8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-xs text-[#0a0a0f] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Call ZITRAC Desk
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-blue-600 dark:text-blue-400">
                &bull; Live
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
              +263 71 800 1031
            </div>
          </div>
        </a>
      </div>

      {/* Trigger Button - Clean architectural design */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close chat menu' : 'Chat with ZITRAC Technologies'}
        className="chat-toggle-btn flex items-center gap-2.5 rounded-none border border-black/15 dark:border-white/15 bg-white dark:bg-black px-4 py-2.5 text-xs font-semibold text-[#0a0a0f] dark:text-white shadow-xl transition-all duration-300 hover:border-red-500/50 hover:text-red-500 active:scale-95"
      >
        {/* Pulsing Green Online Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
        </span>

        {/* Dynamic Icon & Text */}
        {isOpen ? (
          <>
            <svg
              className="h-4 w-4 stroke-[2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="tracking-wide">Close</span>
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4 stroke-[1.8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <span className="tracking-wide">Chat with Us</span>
          </>
        )}
      </button>
    </div>
  );
}

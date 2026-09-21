'use client';

import { useState } from 'react';

export default function ShellSnippet() {
  const [copied, setCopied] = useState(false);
  const command = 'npm create zitrac-app@latest';

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="hidden sm:flex items-center gap-3 rounded-full border border-white/15 bg-black/80 px-5 py-3 font-mono text-xs text-slate-300 shadow-inner">
      <span className="text-slate-500">$</span>
      <span>{command}</span>
      <button
        type="button"
        aria-label="Copy command"
        onClick={copyToClipboard}
        className="text-slate-400 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-red-500 rounded"
      >
        {copied ? (
          <span className="text-emerald-400 font-sans text-[11px] font-bold">Copied!</span>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

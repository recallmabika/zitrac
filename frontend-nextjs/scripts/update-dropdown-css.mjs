import fs from 'fs';

const path = 'c:/Users/recal/Desktop/zitractech/frontend-nextjs/app/globals.css';
let content = fs.readFileSync(path, 'utf8');

const target = `html.light footer a {
  color: #475569 !important;
}`;

const replacement = `html.light footer a {
  color: #475569 !important;
}

/* Light Mode Dropdown Panel High-Contrast Styling */
html.light .dropdown-panel {
  background-color: rgba(255, 255, 255, 0.98) !important;
  border-color: #e2e8f0 !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
}

html.light .dropdown-panel .text-slate-500 {
  color: #64748b !important;
}

html.light .dropdown-panel .text-slate-400 {
  color: #475569 !important;
}

html.light .dropdown-panel .text-slate-200 {
  color: #0f172a !important;
}

html.light .dropdown-panel a:hover .text-slate-200,
html.light .dropdown-panel a:hover span {
  color: #dc2626 !important;
}

html.light .dropdown-panel .border-white\\/10 {
  border-color: #e2e8f0 !important;
}

html.light .dropdown-panel .bg-white\\/5 {
  background-color: #f1f5f9 !important;
  color: #475569 !important;
  border-color: #cbd5e1 !important;
}`;

if (content.includes('html.light footer a {')) {
  // Normalize CRLF to LF for reliable matching
  const isCRLF = content.includes('\r\n');
  const normalizedTarget = isCRLF ? target.replace(/\n/g, '\r\n') : target;
  const normalizedReplacement = isCRLF ? replacement.replace(/\n/g, '\r\n') : replacement;

  content = content.replace(normalizedTarget, normalizedReplacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated globals.css with light mode dropdown styles');
} else {
  console.log('Target string not found');
}

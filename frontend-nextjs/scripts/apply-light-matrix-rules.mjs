import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace or augment light mode styles for Architecture Matrix
const lightThemeRules = `
/* Architecture Matrix Light Theme Comprehensive Rules */
html.light .architecture-matrix {
  background-color: #ffffff !important;
  border-bottom-color: #e2e8f0 !important;
}

html.light .architecture-matrix .sticky {
  background-color: #ffffff !important;
}

html.light .architecture-matrix h2,
html.light .architecture-matrix h3 {
  color: #0f172a !important;
}

html.light .architecture-matrix p.text-slate-200 {
  color: #334155 !important;
}

html.light .architecture-matrix ul li {
  color: #0f172a !important;
}

html.light .architecture-matrix ul li span.text-slate-100 {
  color: #1e293b !important;
}

html.light .architecture-matrix .matrix-nav-btn {
  box-shadow: none !important;
}

html.light .architecture-matrix .matrix-nav-btn:not(.text-red-600) {
  color: #475569 !important;
}

html.light .architecture-matrix .matrix-nav-btn:not(.text-red-600):hover {
  color: #0f172a !important;
}

html.light .architecture-matrix .matrix-nav-btn:not(.text-red-600) span.text-slate-500 {
  color: #64748b !important;
}

html.light .architecture-matrix .matrix-nav-btn.text-red-600 {
  color: #dc2626 !important;
}

html.light .architecture-matrix a.rounded-full.border-white\\/40 {
  border-color: #0f172a !important;
  background-color: #0f172a !important;
  color: #ffffff !important;
  box-shadow: none !important;
}

html.light .architecture-matrix a.rounded-full.border-white\\/40:hover {
  background-color: #dc2626 !important;
  border-color: #dc2626 !important;
  color: #ffffff !important;
}

html.light .architecture-matrix a.rounded-full.border-white\\/40:hover span {
  color: #ffffff !important;
}

/* Light Theme Studio Card & Code Terminal */
html.light .architecture-matrix .matrix-studio-frame {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%) !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.08) !important;
}

html.light .architecture-matrix .matrix-studio-header {
  border-bottom-color: #e2e8f0 !important;
  color: #64748b !important;
}

html.light .architecture-matrix .matrix-studio-title {
  color: #0f172a !important;
}

html.light .architecture-matrix .matrix-studio-node {
  color: #334155 !important;
}

html.light .architecture-matrix .matrix-studio-sla {
  background-color: #ecfdf5 !important;
  border-color: #a7f3d0 !important;
  color: #059669 !important;
}

html.light .architecture-matrix .matrix-main-image-card {
  border-color: #cbd5e1 !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
}

html.light .architecture-matrix .matrix-code-card {
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: #cbd5e1 !important;
  color: #0f172a !important;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.12) !important;
}

html.light .architecture-matrix .matrix-code-card pre code,
html.light .architecture-matrix .matrix-code-card .text-slate-200 {
  color: #0f172a !important;
}

html.light .architecture-matrix .matrix-code-card .border-b {
  border-bottom-color: #e2e8f0 !important;
}

html.light .architecture-matrix .matrix-code-card .text-slate-500 {
  color: #64748b !important;
}

html.light .architecture-matrix .matrix-dot-grid div.bg-slate-400 {
  background-color: #94a3b8 !important;
}
`;

// Remove previous light theme block if exists and append clean new rules
const marker = '/* Architecture Matrix Light Theme Support */';
if (css.includes(marker)) {
  css = css.substring(0, css.indexOf(marker));
}
const marker2 = '/* Architecture Matrix Light Theme Comprehensive Rules */';
if (css.includes(marker2)) {
  css = css.substring(0, css.indexOf(marker2));
}

css = css.trimEnd() + '\n\n' + lightThemeRules.trim() + '\n';
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated app/globals.css with Architecture Matrix Light Theme Comprehensive Rules');

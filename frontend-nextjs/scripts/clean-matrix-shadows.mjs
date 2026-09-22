import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace shadow rules for matrix studio frame, main image card, code card, and dot grid
const oldRules = `html.light .architecture-matrix .matrix-studio-frame {
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
}`;

const newRules = `html.light .architecture-matrix .matrix-studio-frame {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%) !important;
  border-color: #e2e8f0 !important;
  box-shadow: none !important;
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
  border-color: #e2e8f0 !important;
  box-shadow: none !important;
}

html.light .architecture-matrix .matrix-code-card {
  background-color: rgba(255, 255, 255, 0.98) !important;
  border-color: #e2e8f0 !important;
  color: #0f172a !important;
  box-shadow: none !important;
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
  background-color: #64748b !important;
}`;

if (css.includes(oldRules)) {
  css = css.replace(oldRules, newRules);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully replaced shadow and dot rules in app/globals.css');
} else {
  // If exact whitespace differed, use regex or replace the tail
  const tailIdx = css.indexOf('/* Light Theme Studio Card & Code Terminal */');
  if (tailIdx !== -1) {
    css = css.substring(0, tailIdx) + '/* Light Theme Studio Card & Code Terminal */\n' + newRules + '\n';
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Successfully updated tail of app/globals.css');
  }
}

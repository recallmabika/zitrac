import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const matrixLightStyles = `
/* Architecture Matrix Light Theme Support */
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

html.light .architecture-matrix .matrix-nav-btn:not(.bg-red-600) {
  color: #475569 !important;
}

html.light .architecture-matrix .matrix-nav-btn:not(.bg-red-600):hover {
  background-color: #f1f5f9 !important;
  color: #0f172a !important;
}

html.light .architecture-matrix .matrix-nav-btn:not(.bg-red-600) span.bg-white\\/10 {
  background-color: #e2e8f0 !important;
  color: #334155 !important;
}

html.light .architecture-matrix .matrix-nav-btn:not(.bg-red-600):hover span.bg-white\\/10 {
  background-color: #cbd5e1 !important;
  color: #0f172a !important;
}

html.light .architecture-matrix a.rounded-full.border-white\\/40 {
  border-color: #0f172a !important;
  background-color: #0f172a !important;
  color: #ffffff !important;
}

html.light .architecture-matrix a.rounded-full.border-white\\/40:hover {
  background-color: #dc2626 !important;
  border-color: #dc2626 !important;
  color: #ffffff !important;
}

html.light .architecture-matrix a.rounded-full.border-white\\/40:hover span {
  color: #ffffff !important;
}
`;

if (!css.includes('Architecture Matrix Light Theme Support')) {
  css += matrixLightStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully appended Architecture Matrix light styles to app/globals.css');
} else {
  console.log('Styles already exist in app/globals.css');
}

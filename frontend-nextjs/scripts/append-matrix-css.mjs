import fs from 'fs';

let css = fs.readFileSync('app/globals.css', 'utf8');

const matrixStyles = `
/* ── Interactive Architecture Matrix 3-Column Layout ── */
html.light .matrix-nav-btn {
  background-color: rgba(0, 0, 0, 0.02) !important;
  border-color: rgba(0, 0, 0, 0.06) !important;
}

html.light .matrix-nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
}

html.light .matrix-nav-btn.translate-x-1\\.5 {
  background-color: rgba(0, 0, 0, 0.06) !important;
  border-color: rgba(0, 0, 0, 0.2) !important;
}

html.light .matrix-content-col {
  background-color: #ffffff !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.07) !important;
}

html.light .matrix-content-col h3 {
  color: #0f172a !important;
}

html.light .matrix-content-col p {
  color: #475569 !important;
}

html.light .matrix-content-col a {
  color: #0f172a !important;
}

html.light .matrix-content-col a:hover {
  color: #dc2626 !important;
}

html.light .matrix-content-col .border-white\\/10,
html.light .matrix-content-col .border-white\\/15 {
  border-color: rgba(0, 0, 0, 0.08) !important;
}

html.light .matrix-content-col .bg-white\\/5 {
  background-color: rgba(0, 0, 0, 0.04) !important;
  color: #475569 !important;
}

html.light .matrix-image-col {
  border-color: rgba(0, 0, 0, 0.12) !important;
  background-color: #f8fafc !important;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.07) !important;
}
`;

if (!css.includes('Interactive Architecture Matrix 3-Column Layout')) {
  css += '\n' + matrixStyles;
  fs.writeFileSync('app/globals.css', css, 'utf8');
  console.log('CSS_APPENDED_SUCCESSFULLY');
} else {
  console.log('ALREADY_EXISTS');
}

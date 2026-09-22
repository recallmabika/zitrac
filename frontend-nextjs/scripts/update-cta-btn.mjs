import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const oldBtnRegex = /html\.light \.architecture-matrix a\.rounded-full[\s\S]*?html\.light \.architecture-matrix \.matrix-studio-frame/g;
const newBtnRule = `html.light .architecture-matrix .matrix-cta-btn {
  border-color: #0f172a !important;
  background-color: transparent !important;
  color: #0f172a !important;
  box-shadow: none !important;
}

html.light .architecture-matrix .matrix-cta-btn:hover {
  border-color: #dc2626 !important;
  color: #dc2626 !important;
  background-color: transparent !important;
}

/* Light Theme Studio Card & Code Terminal */
html.light .architecture-matrix .matrix-studio-frame`;

css = css.replace(oldBtnRegex, newBtnRule);
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated .matrix-cta-btn in app/globals.css');

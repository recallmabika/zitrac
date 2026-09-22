import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync('public/assets/zimbabwe-dots-map.png');

let offset = 8;
let width = 800, height = 800;
let idatBuffers = [];

while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') {
    idatBuffers.push(buf.slice(offset + 8, offset + 8 + len));
  }
  offset += 12 + len;
}

const compressed = Buffer.concat(idatBuffers);
const raw = zlib.inflateSync(compressed);

const stride = 1 + width * 4;
const pixels = new Uint8Array(width * height * 4);

let prevRow = new Uint8Array(width * 4);
for (let y = 0; y < height; y++) {
  const filter = raw[y * stride];
  const rowStart = y * stride + 1;
  const currentRow = new Uint8Array(width * 4);
  
  for (let x = 0; x < width * 4; x++) {
    const rawVal = raw[rowStart + x];
    const a = (x >= 4) ? currentRow[x - 4] : 0;
    const b = prevRow[x];
    const c = (x >= 4) ? prevRow[x - 4] : 0;
    
    let val = rawVal;
    if (filter === 1) val = (rawVal + a) & 0xff;
    else if (filter === 2) val = (rawVal + b) & 0xff;
    else if (filter === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr = a;
      if (pb < pa && pb <= pc) pr = b;
      else if (pc < pa) pr = c;
      val = (rawVal + pr) & 0xff;
    }
    currentRow[x] = val;
    pixels[(y * width * 4) + x] = val;
  }
  prevRow = currentRow;
}

const visited = new Uint8Array(width * height);
const dots = [];

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = pixels[idx], g = pixels[idx+1], b = pixels[idx+2];
    if (r < 100 && g < 100 && b < 100 && !visited[y * width + x]) {
      let sumX = 0, sumY = 0, count = 0;
      const queue = [[x, y]];
      visited[y * width + x] = 1;
      
      while (queue.length > 0) {
        const [cx, cy] = queue.pop();
        sumX += cx;
        sumY += cy;
        count++;
        
        for (const [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1]]) {
          const nx = cx + dx, ny = cy + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited[ny * width + nx]) {
            const nidx = (ny * width + nx) * 4;
            if (pixels[nidx] < 100 && pixels[nidx+1] < 100 && pixels[nidx+2] < 100) {
              visited[ny * width + nx] = 1;
              queue.push([nx, ny]);
            }
          }
        }
      }
      
      if (count >= 3) {
        dots.push({
          x: Number((sumX / count).toFixed(1)),
          y: Number((sumY / count).toFixed(1)),
          r: 2.8
        });
      }
    }
  }
}

console.log('Detected dots count:', dots.length);

const svgCircles = dots.map(d => `<circle cx="${d.x}" cy="${d.y}" r="${d.r}" />`).join('\n  ');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="currentColor">
  ${svgCircles}
</svg>`;
fs.writeFileSync('public/assets/zimbabwe-dots-map.svg', svg);

const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#ffffff">
  ${svgCircles}
</svg>`;
fs.writeFileSync('public/assets/zimbabwe-dots-map-dark.svg', darkSvg);

const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#0f172a">
  ${svgCircles}
</svg>`;
fs.writeFileSync('public/assets/zimbabwe-dots-map-light.svg', lightSvg);

console.log('Saved all SVG variants successfully!');

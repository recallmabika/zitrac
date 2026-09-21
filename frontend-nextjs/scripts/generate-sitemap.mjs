/**
 * Automated XML Sitemap Generator for Next.js Static Export
 * Generates sitemap.xml directly into the /out root directory after compilation
 */

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://zitrac.co.zw';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about/', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/it-consulting/', priority: '0.85', changefreq: 'monthly' },
  { path: '/services/web-design-development/', priority: '0.85', changefreq: 'monthly' },
  { path: '/services/software-development/', priority: '0.85', changefreq: 'monthly' },
  { path: '/services/web-hosting-domain-registration/', priority: '0.85', changefreq: 'monthly' },
  { path: '/services/cyber-security/', priority: '0.85', changefreq: 'monthly' },
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const xmlUrls = staticRoutes
    .map((route) => {
      return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  // Write to public/ and out/ (if out exists)
  const publicDir = path.resolve('public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8');
  }

  const outDir = path.resolve('out');
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapContent, 'utf-8');
    console.log('✅ Generated sitemap.xml directly into Next.js /out directory');
  } else {
    console.log('✅ Generated sitemap.xml into /public directory (will be copied to /out on build)');
  }
}

generateSitemap();

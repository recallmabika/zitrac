/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce pure static HTML export for cPanel public_html deployment
  output: 'export',

  // Ensure trailing slashes are consistently appended to all static paths
  // to match strict canonical URLs and Apache directory indexing rules
  trailingSlash: true,

  // Since Next.js image optimization requires a persistent Node.js server,
  // static exports require unoptimized image tags or external CDN loaders (Cloudflare R2)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '**.zitrac.co.zw',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Enforce strict linting and type checking on build
  reactStrictMode: true,
  poweredByHeader: false,

  // Disable experimental dev indicator overlays that crash React Client Manifest in dev mode
  devIndicators: false,

  // Prune debugging noise in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
};

export default nextConfig;

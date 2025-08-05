/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    // Enable image optimization for better performance and smaller file sizes
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  // Enable compression
  compress: true,
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
  // Configure caching
  generateEtags: true,
  poweredByHeader: false,
}

module.exports = nextConfig
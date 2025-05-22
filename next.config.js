/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  trailingSlash: true, // recommended for static export
  images: {
    unoptimized: true, // 🔧 disables image optimization for static export
  },
}

module.exports = nextConfig

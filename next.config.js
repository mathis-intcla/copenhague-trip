/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // App Router is enabled by default in Next.js 14
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

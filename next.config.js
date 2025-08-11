/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
    ],
  },
}

module.exports = nextConfig

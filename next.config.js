/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'server',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone'
};

module.exports = nextConfig;
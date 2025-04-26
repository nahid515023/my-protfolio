/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // Ensure we're using the pages directory
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 
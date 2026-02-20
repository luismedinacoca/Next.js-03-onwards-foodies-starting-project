/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Increase the limit to your desired size, e.g., 2MB, 5MB, or '10mb'
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig

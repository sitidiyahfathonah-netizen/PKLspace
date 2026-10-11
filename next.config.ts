/** @type {import('next').NextMode} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pkl-space-backend-production.up.railway.app',
      },
    ],
  },
};

module.exports = nextConfig;
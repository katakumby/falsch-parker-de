/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    sitemap: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
    ],
  },
};

export default nextConfig;
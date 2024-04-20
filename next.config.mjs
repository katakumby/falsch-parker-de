/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/abschleppdienst',
        destination: '/de/towing',
        permanent: true,
      },
      {
        source: '/umtriebsentschadigung',
        destination: '/de/parking-ticket',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/de/contact',
        permanent: true,
      },
      {
        source: '/agb',
        destination: '/de/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/impressum',
        destination: '/de/imprint',
        permanent: true,
      },
      {
        source: '/datenschutzerklaerung',
        destination: '/de/data-protection',
        permanent: true,
      },
      {
        source: '/abschleppdienst/zurich',
        destination: '/de/location/zurich',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
    ],
  },
};

export default nextConfig;
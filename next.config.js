/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;

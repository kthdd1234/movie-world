/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/browse/movie',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

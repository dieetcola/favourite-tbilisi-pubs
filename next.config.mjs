/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media-cdn.tripadvisor.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'assets.example.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyimage.com'],
  },
};

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyimage.com', 'www.notion.so', 'images.unsplash.com'],
  },
};

module.exports = nextConfig

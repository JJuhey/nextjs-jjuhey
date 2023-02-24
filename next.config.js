/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyimage.com', 'www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
};

module.exports = nextConfig

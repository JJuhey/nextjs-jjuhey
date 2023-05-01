/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyimage.com', 'www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
  alias: {
    '@app': path.resolve(__dirname, 'src/app'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@components': path.resolve(__dirname, 'src/components'),
  }
};

module.exports = nextConfig;

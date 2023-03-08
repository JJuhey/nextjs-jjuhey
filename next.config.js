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
    '@app': path.resolve(__dirname, 'app'),
    '@utils': path.resolve(__dirname, 'utils'),
    '@components': path.resolve(__dirname, 'components'),
  }
};

module.exports = nextConfig;

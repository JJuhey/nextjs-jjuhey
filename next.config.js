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

module.exports = nextConfig
// const path = require('path');
// // ...
// const nextConfig = phase => {
//   //...
// webpack(config, { webpack }) {
// 			config.resolve = {
// 				alias: {
// 					'@services': path.resolve(__dirname, 'src/services'),
// 					'@utils': path.resolve(__dirname, 'src/utils'),
// 					'@hooks': path.resolve(__dirname, 'src/hooks'),
// 					'@components': path.resolve(__dirname, 'src/components')
// 				},
// 				...config.resolve
// 			};
// 			return config;
// 		}
//     //...
// }

// module.exports = phase => nextConfig(phase);
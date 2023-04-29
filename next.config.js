/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    domains: ['i.pinimg.com', '*'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
  },
};

module.exports = nextConfig;

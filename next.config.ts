import type { NextConfig } from "next";


const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/horizons-crux',
  assetPrefix: '/horizons-crux/public/',
};

module.exports = nextConfig;


export default nextConfig;

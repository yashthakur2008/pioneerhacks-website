const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/pioneerhacks-website' : '',
  assetPrefix: isProd ? '/pioneerhacks-website/' : '',
};

export default nextConfig;

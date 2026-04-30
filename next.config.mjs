/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/quickcart',
  assetPrefix: '/quickcart',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
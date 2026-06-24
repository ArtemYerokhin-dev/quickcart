import { realpathSync } from 'fs';

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
  webpack: (config) => {
    // Fix Windows case-insensitive path deduplication
    // Force all module paths through realpath to get consistent casing
    config.resolve.symlinks = true;
    const originalResolve = config.resolve.plugins || [];
    config.resolve.plugins = [
      ...originalResolve,
      {
        apply(resolver) {
          resolver.hooks.result.tap('NormalizeCase', (request) => {
            try {
              if (request.path) {
                request.path = realpathSync(request.path);
              }
            } catch (_) {}
            return request;
          });
        },
      },
    ];
    return config;
  },
};

export default nextConfig;

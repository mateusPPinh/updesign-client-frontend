/** @type {import('next').NextConfig} */
const nextConfig = {
  env:  {
    NEXT_PUBLIC_UMBRIEL_API: process.env.NEXT_PUBLIC_UMBRIEL_API
  },
  async rewrites () {
    return {
      // fallback: [
      //   {
      //     source: '/:index*',
      //     destination: '/home',
      //   },
      // ]
    }
  },
  reactStrictMode: true,
  images: {
    domains: [
      'd3t3ozftmdmh3i.cloudfront.net',
      's3.amazonaws.com',
      'afr.net',
      'ott.bgea.live',
      'deow9bq0xqvbj.cloudfront.net',
      'd3wo5wojvuv7l.cloudfront.net',
      'episodes.castos.com'
    ],
    remotePatterns: [
      { protocol: 'http', hostname: '**' },
      { protocol: 'https', hostname: '**' }
    ]
  },
  experimental: {
    optimizePackageImports: ['tailwindcss']
  }
};

import withBundleAnalyzer from '@next/bundle-analyzer';

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  concurrentFeatures: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['id'],
    defaultLocale: 'id',
  },
});

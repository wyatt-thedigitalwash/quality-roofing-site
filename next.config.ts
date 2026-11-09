import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Photos and logos: cached for a year. Rename a file when replacing it, or returning
    // visitors keep the old copy. Root icons and the share image use a day, since their
    // names can't change.
    const longCache = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
    const dayCache = [{ key: 'Cache-Control', value: 'public, max-age=86400' }];
    return [
      { source: '/assets/:path*', headers: longCache },
      { source: '/certificates/:path*', headers: longCache },
      { source: '/:file(favicon\\.ico|apple-touch-icon\\.png|android-chrome-.*\\.png|og-image\\.png|site\\.webmanifest)', headers: dayCache },
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;

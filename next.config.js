const withSerwistInit = require("@serwist/next").default;

const isDev = process.env.NODE_ENV === "development";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  register: !isDev, // SW cannot use eval() — dev mode uses eval-source-map
  // Precache all static assets and pages for offline access
  maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // 6MB
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // images pre-converted to WebP, skip server-side sharp
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        // Long cache for static assets with hashed filenames
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images in public/assets
        source: "/assets/(.*\\.(?:webp|avif|jpg|jpeg|png|svg|ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },
      {
        // Font files
        source: "/assets/(.*\\.(?:woff|woff2|ttf|otf|eot))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Audio files
        source: "/assets/(.*\\.(?:mp3|wav|ogg|flac))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        // Service worker and manifest
        source: "/(sw\\.js|manifest\\.json)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = withSerwist(nextConfig);

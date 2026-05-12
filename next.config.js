const isDev = process.env.NODE_ENV === "development";
const skipSerwist = isDev || !!process.env.CF_PAGES || process.env.SKIP_SERWIST === "1";

let withSerwist = (config) => config; // no-op by default

if (!skipSerwist) {
  const withSerwistInit = require("@serwist/next").default;
  withSerwist = withSerwistInit({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
    reloadOnOnline: true,
    register: !isDev,
    maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
  });
}

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
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/(.*\\.(?:webp|avif|jpg|jpeg|png|svg|ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },
      {
        source: "/assets/(.*\\.(?:woff|woff2|ttf|otf|eot))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/(.*\\.(?:mp3|wav|ogg|flac))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
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

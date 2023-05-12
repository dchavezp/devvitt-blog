/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GHOST_URL: process.env.GHOST_URL,
    GHOST_KEY: process.env.GHOST_KEY,
  },
  images: {
    domains: [
      "digitalpress.fra1.cdn.digitaloceanspaces.com",
      "static.ghost.org",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;

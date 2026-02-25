/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
};

module.exports = nextConfig;

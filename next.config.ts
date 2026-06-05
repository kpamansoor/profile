import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "unavatar.io",
      },
      {
        protocol: "https",
        hostname: "trendlense.in",
      },
    ],
  },
};

export default nextConfig;

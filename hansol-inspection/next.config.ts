import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

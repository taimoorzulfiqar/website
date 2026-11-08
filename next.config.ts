import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static files for Hostinger file-manager upload (output goes in /out)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['static.vecteezy.com', 'media-hosting.imagekit.io', 'superstarsbio.com'], // Combine domains into a single array
  },
};

export default nextConfig;

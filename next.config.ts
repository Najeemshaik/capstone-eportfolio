import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nextConfig: NextConfig & Record<string, any> = {
  viewTransition: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

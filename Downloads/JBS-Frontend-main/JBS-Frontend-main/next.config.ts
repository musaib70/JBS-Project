import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.jbsconsulting.co',
      },
      {
        protocol: 'https',
        hostname: 'jbsconsultingbackend-staging.up.railway.app',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    devIndicators: false,

    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

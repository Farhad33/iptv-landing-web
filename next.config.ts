import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations for SEO
  compress: true,

  // Generate static sitemap
  generateBuildId: async () => {
    return "zebra-iptv-build-" + Date.now();
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Security headers for better SEO trust signals
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["@iconify/react", "lucide-react"],
  },

  // Production source maps disabled for better performance
  productionBrowserSourceMaps: false,

  // Power by header removal for security
  poweredByHeader: false,

  // Trailing slash handling for consistent URLs
  trailingSlash: false,
};

export default nextConfig;

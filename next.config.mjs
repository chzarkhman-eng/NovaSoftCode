/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid dev-only Segment Explorer / RSC manifest bugs (often on Windows paths with spaces).
  experimental: {
    devtoolSegmentExplorer: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig

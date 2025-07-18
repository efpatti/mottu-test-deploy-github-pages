import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 basePath: "/mottu-test-deploy-github-pages",
 output: "export",
 reactStrictMode: true,
 trailingSlash: true,
 images: {
  unoptimized: true,
 },
};

export default nextConfig;

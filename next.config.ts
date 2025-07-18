import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export",
 reactStrictMode: true,
 trailingSlash: true,
 images: {
   unoptimized: true,
 },
 // Only add basePath if deploying to GitHub Pages under a repository name
 // For GitHub Pages user/org sites, leave this commented out
 basePath: "/mottu-test-deploy-github-pages",
};

export default nextConfig;

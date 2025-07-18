const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
 output: "export",
 reactStrictMode: true,
 trailingSlash: true,
 basePath: isProd ? "/mottu-test-deploy-github-pages" : "",
 assetPrefix: isProd ? "/mottu-test-deploy-github-pages/" : "",
 images: {
  unoptimized: true,
 },
};

export default nextConfig;

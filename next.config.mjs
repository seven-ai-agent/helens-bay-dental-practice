/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/helens-bay-dental-practice",
  assetPrefix: "/helens-bay-dental-practice/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

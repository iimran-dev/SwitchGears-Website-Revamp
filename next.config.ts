import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:"/switchgear",
  
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai", "*.chatglm.cn"],
};

export default nextConfig;

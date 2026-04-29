import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const BASE   = isProd ? "/" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isProd && {
    basePath:    "",
    assetPrefix: "/",
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE,
  },
};

export default nextConfig;

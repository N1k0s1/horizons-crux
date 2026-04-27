import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const BASE   = isProd ? "/horizons-crux" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isProd && {
    basePath:    "/horizons-crux",
    assetPrefix: "/horizons-crux/",
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE,
  },
};

export default nextConfig;

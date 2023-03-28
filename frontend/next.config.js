/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
    experimental: {
    appDir: true,
  },
    webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
   images: {
    loader: "default",
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

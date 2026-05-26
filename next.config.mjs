const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const hasCustomDomain = Boolean(process.env.CUSTOM_DOMAIN);
const repoBasePath = "/CristianeElias";
const basePath = isGithubPages && !hasCustomDomain ? repoBasePath : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;

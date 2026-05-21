const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/CristianeElias";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? repoBasePath : "",
  assetPrefix: isGithubPages ? `${repoBasePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBasePath : ""
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(path.dirname("__dirname"), "app/styles/scss")],
  },
};

export default nextConfig;

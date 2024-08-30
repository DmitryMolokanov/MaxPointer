import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpakConfig";
import { BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "./build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const PORT = 3000;

const config: webpack.Configuration = buildWebpackConfig({
  mode: "production",
  paths,
  port: PORT,
});

export default config;

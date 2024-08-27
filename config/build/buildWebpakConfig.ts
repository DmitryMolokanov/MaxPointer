import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugin";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode: mode,
    // точка входа (главный файл приложения)
    entry: paths.entry,
    // для ts
    module: {
      // конфигурация лоадеров, которые выходят за рамки js(ts,css, png, jpg ...)
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    // точка выхода (файл для сборки)
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),

    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
}

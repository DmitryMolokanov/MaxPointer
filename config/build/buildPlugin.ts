import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(
  paths: BuildPaths
): webpack.WebpackPluginInstance[] {
  return [
    // подключение html
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    // выводит процес загрузки
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      //для асинхронной подгрузки
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}

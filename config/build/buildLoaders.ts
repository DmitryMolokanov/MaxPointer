import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: false,
          // namedExport: false применяется для импорта
          // как import style from my.scss а не import * as style from my.css

          modules: {
            namedExport: false,
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [cssLoaders, typescriptLoaders];
}

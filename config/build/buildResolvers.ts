import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    // позволяет импортировать файлы без расширения (вместо import ... from './example.ts' import ... from './example')
    extensions: [".ts", ".tsx", ".js"],
  };
}

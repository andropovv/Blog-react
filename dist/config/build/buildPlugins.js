import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildPlugins(_a) {
    var paths = _a.paths;
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ];
}

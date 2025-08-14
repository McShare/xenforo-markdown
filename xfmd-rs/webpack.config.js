const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './src-js/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'xfmd.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'XFMD 基础测试',
            template: './src-js/index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: __dirname
        }),
        new MiniCssExtractPlugin(),
    ],
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
    },
    devServer: {
        static: './dist'
    }
};

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// let Encore = require("@symfony/webpack-encore"); FURTHER READING
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }, ],
            },
            {
                test: /\.(png|jpg|svg|JPG)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 90000,
                        name: "assets/[name].[ext]",
                    },
                }, ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    // {
                    //   loader: MiniCssExtractPlugin.loader,
                    // },
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    //SI SE QUIERE OPTIMIZAR LOS CHUNKS (IMPORTS)
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 0,
            name: "commons",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon-32x32.png",
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            //TAMBIEN PARA OPTIMIZAR CHUNKS EN CSS
            chunkFilename: "css/[id]-[hash].css",
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/main.**", "**/commons.**"],
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: process.env.PORT || 3005,
        hot: true,
        historyApiFallback: true, //PARA REACT ROUTER
    },
};
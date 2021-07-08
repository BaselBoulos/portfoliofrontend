const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

let mode = "development";

if (process.env.NODE_ENV === "production ") {
    mode = "production";
}

module.exports = {
    mode: mode,
    entry: "./src/index.js",
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|pdf|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader",
                },
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    // devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        hot: true,
    },
};
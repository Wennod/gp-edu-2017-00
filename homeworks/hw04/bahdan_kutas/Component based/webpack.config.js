const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        style: './app/styles/main.scss',
        app: './app/app.js',
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'app'),
                    path.join(__dirname, 'app/tests'),
                ],
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' },
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    // devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'styles/[name].bundle.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            title: 'msm-task',
            template: './index.html',
            inject: 'body',
        }),
    ],

    output: {
        filename: 'src/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

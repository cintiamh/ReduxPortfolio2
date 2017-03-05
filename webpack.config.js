const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
        vendor: ['react', 'react-dom', 'redux']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    { loader: 'babel-loader', options: { presets: ['es2015', 'react'] } }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

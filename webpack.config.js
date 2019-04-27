const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './part3/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader"} ]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader'}, { loader: 'css-loader' }]
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./part3/index.html",
            filename: "./index.html"
        })
    ]
};
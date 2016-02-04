var path = require('path');
var webpack = require('webpack');


module.exports = {
    context: path.resolve('src'),
    entry: "./main.js",
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    module: {
        preloaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }, {
                test: /\.(png|jpg|jpeg|ttf|eot)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=10000"
            }
        ]
    },
    watch : false,
    devtool: "eval-source-map"
};
var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        "./src/main"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preloaders: [{
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: "jshint-loader"
            }
        ],
        loaders: [{
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: "react-hot!babel-loader"
            }, {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: "style!css!autoprefixer!compass?sourcemap"
            }, {
                test: /\.(png|jpg|jpeg|ttf|eot)$/,
                include: path.join(__dirname, 'src'),
                loader: "url?limit=10000"
            }
        ]
    },
    resolve : {
        extensions: ['', '.js', '.jsx']
    },
    devtool: "cheap-module-eval-source-map"
};
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const uglify = require('uglifyjs-webpack-plugin')
const webpack_util = require('./webpack.util')

module.exports = {
    target: 'web',
    devtool: '#cheap-module-eval-source-map',
    entry: webpack_util.devEntries(),
    // entry: [path.resolve(__dirname, './Client/main.js')],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new uglify(),
        new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true
        // }),
    ].concat(webpack_util.htmlPlugin())
};
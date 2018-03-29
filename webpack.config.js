const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const webpack_util = require('./webpack.util')

module.exports = {
    target: 'web',
    // devtool: '#cheap-module-eval-source-map',
    entry: webpack_util.entries(),
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
        //压缩打包代码
        new uglify(),
    ].concat(webpack_util.htmlPlugin())
};
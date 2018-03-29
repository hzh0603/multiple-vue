const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//获取所有的入口文件（开发时使用，需要热加载所以需要加"webpack-hot-middleware/client"）
exports.devEntries = function () {
    var entryFiles = glob.sync(__dirname + '/Client/pages/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let arr = ["webpack-hot-middleware/client"]
        arr.push(filePath)
        map[filename] =arr
    })
    return map
}

//获取所有的入口文件（打包的时使用）
exports.entries = function () {
    var entryFiles = glob.sync(__dirname + '/Client/pages/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] =filePath
    })
    return map
}

//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = function () {
    let entryHtml = glob.sync(__dirname + '/Client/pages/*/*.html')
    let arr = []
    entryHtml.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let conf = {
            // 模板来源
            template: filePath,
            // 文件名称
            filename: filename + '.html',
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['manifest', 'vendor', filename],
            inject: true
        }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
}
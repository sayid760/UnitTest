const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin") // 导入 在内存中自动生成html文件 的插件

const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, "./public/index.html"), // 源文件
    filename: "index.html" // 生成的 内存中首页的 名称
})

module.exports = {
    mode: 'development', // development 或 production
    entry: {
        "index": ['./src/index.js'],
    },
    plugins: [
        htmlPlugin
    ],
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/ 
            }
        ]
    },
    resolve: {
        //查找module的话从这里开始查找
        // root: 'E:/github/flux-example/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx'],
        alias: {
            AppStore : 'js/stores/AppStores.js'
        }
    }
}
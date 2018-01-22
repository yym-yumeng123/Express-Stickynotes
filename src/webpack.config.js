/**
 * Created by yym on 2017/11/24.
 */
var webpack = require('webpack')  // 引用webpack
var path = require('path')  // node 内置path

module.exports = {
    entry: path.join(__dirname, "js/app/index.js"),  // 入口文件,相对于webpack.config.js的位置
    output: {  // 出口文件
        filename: "index.js",  // 文件名字
        path: path.join(__dirname,"../public/js")  // 出口位置
    },
    module: {  // 模块
        rules:[{  //一些规则
            test : /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }]
    },
    resolve: {  // 解析
        alias: {  // 创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块
            jquery: path.join(__dirname,"js/lib/jquery.min.js"),
            mod: path.join(__dirname,"js/mod"),
            less: path.join(__dirname,"less")
        }
    },
    plugins: [  //插件
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
}
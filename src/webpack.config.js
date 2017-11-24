/**
 * Created by yym on 2017/11/24.
 */
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: path.join(__dirname, "js/app/index.js"),
    output: {
        filename: "index.js",
        path: path.join(__dirname,"../public/js")
    },
    module: {
        rules:[{
            test : /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname,"js/lib/jquery.min.js"),
            mod: path.join(__dirname,"js/mod"),
            less: path.join(__dirname,"less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
}
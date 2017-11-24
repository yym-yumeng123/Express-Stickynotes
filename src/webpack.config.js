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
    }
}
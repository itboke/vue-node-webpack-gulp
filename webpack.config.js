/*
 * 构建核心 公用js文件
 * @author hzl
*/
var path = require('path');
module.exports = {
    entry: [
        './src/js/core/zepto.js',
        './src/js/core/vue.min.js'
    ],
    output: {
        filename: 'js/cores.js',
        path:path.resolve(__dirname,'./dist')
    },
    module: {
        loaders:[
              {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015']
                }
              }
        ]
    }
};
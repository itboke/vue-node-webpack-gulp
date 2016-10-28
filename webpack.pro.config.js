var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('css/[name].[chunkhash:6].css');

var MapPlugin = require('map-webpack-plugin');
var mapPluginInstance = new MapPlugin({
    filename:'map.json',
    path: path.resolve(__dirname,'./dist/map')
});
module.exports = {

    output:{
        filename: 'js/[name].[chunkhash:6].js',
        publicPath: '/dist/'
    },
    module:{
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' }, 
            { test: /\.(js)$/, loader: 'babel', exclude: /node_modules/ },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style','css!autoprefixer!less')
            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=img/[folder]/[name][hash:6].[ext]'},
            { test: /\.(html|tpl)$/, loader: 'fuck-loader'},
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue','.less'],
        // 别名
        alias: {
            components: path.join(__dirname, './src/js/components')
        }
    },
    plugins:[
        extractLESS,
        mapPluginInstance,
        new webpack.DefinePlugin({
            'process.env':{
              'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

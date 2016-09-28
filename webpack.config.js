var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (file)=>{

    var _name,_entry={},opt = {};
    if(file){
        var _name = file.replace('.js','');
        var extractLESS = new ExtractTextPlugin('../css/'+ _name +'.css');
        _entry[_name] = './src/js/' + file;
        opt.entry = _entry;
        opt.output = {
            path: path.join(__dirname, './dist'),
            filename: '[name].js',
            publicPath: ''
        };
    }
    opt.watch  = true;
    opt.module = {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style','css!autoprefixer!less')
            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=/dist/img/[name].[hash:8].[ext]'},
            { test: /\.(html|tpl)$/, loader: 'html-loader'},
        ]
    };
    opt.vue = {
        loaders: {
            css: 'style!css!autoprefixer!less'
        }
    };
    opt.babel = {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    };
    opt.resolve = {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            components: path.join(__dirname, './src/js/components')
        }
    };
    opt.plugins = [extractLESS];
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    //devtool: '#source-map'
    return opt;
};

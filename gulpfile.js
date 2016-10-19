/*
  监听 & 构建
*/
const fs   = require('fs');
const path = require('path');
const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');
const config = require('./config');
const webpackConfig = require('./webpack.config');

var jsWatchList = new Set();
var _jsOutPath  = config.buildName + '/js';
var cssReg = /<%-init_css\(\'(\S+)\'\)%>/;
var jsReg  = /<%-init_js\(\'(\S+)\'\)%>/;

/*处理html模板 JS & CSS 构建路径*/
var handleStaticPath = function(data) {

    var filePath = String(data.path).replace(/\\/g, '/');
    var fileName = filePath.split('/src/html/')[1];
    var outputPath = '/'+config.buildName+'/' + fileName;
    var resource = String(data.contents);
    if(resource.indexOf('init_css') > -1 || resource.indexOf('init_js') > -1){
        var _result = resource.match(cssReg),_jsMatch = resource.match(jsReg), _cssString = '', _jsString = '';
        _result = _result[1].split(',');
        _jsMatch = _jsMatch[1].split(',');
        for(var i = 0,l = _result.length; i<l;i++)
        {
            _cssString += '<link href="./css/'+ _result[i] +'" rel="stylesheet" type="text/css">\n';
            _jsString += '<script src="./js/'+ _jsMatch[i] +'" ></script>\n';
        }
        resource = resource.replace(cssReg,_cssString);
        resource = resource.replace(jsReg,_jsString);
        if(!fs.existsSync(path.dirname(outputPath))){
            fs.mkdirSync(path.dirname(outputPath));
        }
        outputPath = path.resolve().replace(/\\/g,'/') + outputPath;
        fs.writeFileSync(outputPath, resource, "utf-8");
    }else{
        outputPath = path.resolve().replace(/\\/g,'/') + outputPath;
        fs.writeFileSync(outputPath, resource, "utf-8");
    }
};

gulp.task('default',['html:dev','js:dev'])

gulp.task('html:dev',function(){

    var _htmlSrcPath = config.staticPath + 'html/**/*.html';
    gulp.src(_htmlSrcPath)
        .on('data',function(resource){
            try{
                handleStaticPath(resource);
            }catch(err){
                console.log('html构建出错,错误信息：' + err);
            }
        })
})
function handle(file){
    if(jsWatchList.has(file.path)){
        return false;
    }else{
        jsWatchList.add(file.path);
        gulp.src(file.path)
            .pipe(webpack(webpackConfig(file.relative)))
            .pipe(gulp.dest(_jsOutPath))
    }
}
gulp.task('js:dev',function(){
    var _jsSrcPath = config.staticPath + 'js/*.js';
    var _htmlSrcPath = config.staticPath + 'html/**/*.html';
    gulp.src(_jsSrcPath)
        .pipe(watch(_jsSrcPath,{events:['add','change']},(file)=>{
            handle(file);
        }))
})

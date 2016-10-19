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
//var cssReg = /<%-init_css\(\'(\S+)\'\)%>/;
//var jsReg  = /<%-init_js\(\'(\S+)\'\)%>/;

gulp.task('default',['html:dev','js:dev'])

gulp.task('html:dev',function(){
    var _htmlSrcPath = config.staticPath + 'html/**/*.html';
    gulp.src(_htmlSrcPath)
        .pipe(gulp.dest('./dist/'))
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

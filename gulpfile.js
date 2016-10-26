/*
  监听 & 构建
*/
const fs   = require('fs');
const path = require('path');
const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');
const fileinclude = require('gulp-file-include');
const config = require('./config');
const webpackConfig = require('./webpack.config');

var jsWatchList = new Set();
var _jsOutPath  = config.path.debugDir;
//var cssReg = /<%-init_css\(\'(\S+)\'\)%>/;
//var jsReg  = /<%-init_js\(\'(\S+)\'\)%>/;
const _htmlSrcPath = config.path.htmlSrc;
const _htmlFile = [
    _htmlSrcPath+'*.html',
    _htmlSrcPath+'**/*.html',
    `!${_htmlSrcPath}/**/_*/*.html`,
    `!${_htmlSrcPath}/**/_*/**/*.html`,
    `!${_htmlSrcPath}/**/_*.html`
];


gulp.task('default',['html:dev','js:dev','html:watch'])

gulp.task('html:watch',function(){
    watch(_htmlFile,{events:['add', 'change']},(file)=>{})
    .pipe(fileinclude('@@'))
    .pipe(gulp.dest(config.path.debugDir))
})
gulp.task('html:dev',function(){
    gulp.src(_htmlFile)
        .pipe(fileinclude('@@'))
        .pipe(gulp.dest(config.path.debugDir))
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
    var _jsSrcPath = config.path.staticPath + 'js/*.js';
    gulp.src(_jsSrcPath)
        .pipe(watch(_jsSrcPath,{events:['add','change']},(file)=>{
            handle(file);
        }))
})

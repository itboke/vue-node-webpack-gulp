/*
  监听 & 构建
*/
const fs   = require('fs');
const path = require('path');
const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');
const fileinclude = require('gulp-file-include');
const named = require('vinyl-named');
const config = require('./config');
const webpackDevConfig = require('./webpack.dev.config');
const webpackProConfig = require('./webpack.pro.config');

var jsWatchList = new Set();
var _jsDevOutPath  = config.path.debugDir;
var _jsProOutPath = config.path.distDir;
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
//html文件开发环境的输出
gulp.task('html:dev',function(){
    gulp.src(_htmlFile)
        .pipe(fileinclude('@@'))
        .pipe(gulp.dest(config.path.debugDir))
})
//html文件生产环境的输出
gulp.task('html:build',function(){
    gulp.src(_htmlFile)
        .pipe(fileinclude('@@'))
        .pipe(gulp.dest(config.path.distDir))
})
function handle(file){
    if(jsWatchList.has(file.path)){
        return false;
    }else{
        jsWatchList.add(file.path);
        gulp.src(file.path)
            .pipe(webpack(webpackDevConfig(file.relative)))
            .pipe(gulp.dest(_jsDevOutPath))
    }
}
gulp.task('js:dev',function(){
    var _jsSrcPath = config.path.staticPath + 'js/*.js';
    gulp.src(_jsSrcPath)
        .pipe(watch(_jsSrcPath,{events:['add','change']},(file)=>{
            handle(file);
        }))
})

//发布环境
gulp.task('build',['html:build','js:build'])
gulp.task('js:build',function(){
    var _jsSrcPath = config.path.staticPath + 'js/*.js';
    gulp.src(_jsSrcPath)
        .pipe(named(function(file){
            var _file = file.relative.replace(/\\/g,'/');
            file.named  = path.basename(_file, path.extname(_file));
            this.queue(file);
        }))
        .pipe(webpack(webpackProConfig))
        .pipe(gulp.dest(_jsProOutPath))
})

/*
  监听 & 构建
*/

const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');
const config = require('./config');
const webpackConfig = require('./webpack.config');

const jsSrcPath = config.staticPath + 'js/';
const jsFile = [
    `${jsSrcPath}/**/*.vue`,
    `${jsSrcPath}/*.js`
];

gulp.task('default',['html:dev','js:dev'])

gulp.task('html:dev',function(){

    var _htmlSrcPath = config.staticPath + 'html/**/*.html',
        _htmlOutPath = config.outPutPath;

    gulp.src(_htmlSrcPath)
        .pipe(gulp.dest(_htmlOutPath))

})

gulp.task('js:dev',function(){
    var _jsSrcPath = config.staticPath + 'js/*.js',
        _jsOutPath = config.outPutPath + 'js';
    gulp.src(_jsSrcPath)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(_jsOutPath))
        .on('end',function(){
            gulp.src(jsFile)
                .pipe(watch(jsFile,{events:['add', 'change']},function(file){
                    gulp.src(file.path)
                        .pipe(webpack(webpackConfig))
                        .pipe(gulp.dest(_jsOutPath))
                }))
        })
})
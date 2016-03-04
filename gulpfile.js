var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

gulp.task('Less', function() {
    gulp.src('less/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        //.pipe(cssmin())  等发布的时候再进行压缩处理
        .pipe(gulp.dest('build/css'));
});

gulp.task('Watch', function() {
    gulp.watch('less/**/*.less',['Less']);
});

gulp.task('default',['Less','Watch']);



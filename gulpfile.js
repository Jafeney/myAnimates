var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'), 
    sequence = require('gulp-sequence'),
    clean = require('gulp-clean'),
    WEB_PORT = 9000,
    CSS_DEST = 'build/css',
    ROOT = './';

gulp.task('Less', function() {
    return gulp.src('less/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(cssmin())  //等发布的时候再进行压缩处理
        .pipe(gulp.dest(CSS_DEST))
        .pipe(livereload())
});

gulp.task('Http',function() {
    connect.server({
        root: ROOT,
        port: WEB_PORT,
        livereload: true
    });
});

gulp.task('Clean', function() {
    return gulp.src(CSS_DEST,{read: false})
        .pipe(clean())
        .pipe(notify({
            message: 'Clean task complete!'
        }));
});

gulp.task('Watch', function() {
    livereload.listen();
    gulp.watch('less/**/*.less',['Less']);
});

gulp.task('Build', function(cb) {
    sequence('Clean',['Less','Watch'])(cb);
});

gulp.task('Main', function(cb) {
    sequence('Build',['Http'])(cb);
});

gulp.task('default',['Main']);



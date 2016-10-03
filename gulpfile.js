const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const webpack = require('gulp-webpack');

const webpackPlugin = webpack(require('./webpack.config.js'));

gulp.task('index', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    return gulp.src('./src/js/app.js')
        .pipe(webpackPlugin)
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(concat('app.bundle.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['index', 'js', 'css'], function() {});

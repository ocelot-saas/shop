const ExtractTextPlugin = require('extract-text-webpack-plugin');
const gulp = require('gulp');
const path = require('path');
const webpack = require('gulp-webpack');


gulp.task('index', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});


gulp.task('js-css', function() {
    return gulp.src('./src/js/app.js')
        .pipe(webpack({
	    entry: ['./src/js/app.js'],
	    output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/dist/',
		filename: 'app.bundle.js'
	    },
	    module: {
		loaders: [{
		    test: /\.css$/,
		    loader: ExtractTextPlugin.extract('style-loader','css-loader')
		}]
	    },
	    plugins: [
		new ExtractTextPlugin('app.bundle.css')
	    ],
	    resolve: {
		extensions: ['', '.js', '.jsx', '.css'],
		root: [
		    path.resolve(__dirname, 'src')
		]
	    }
	}))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['index', 'js-css'], function() {});

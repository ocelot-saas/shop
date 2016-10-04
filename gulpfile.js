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
		    test: /\.(less|css)$/,
		    loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
		}, {
                    test: /\.svg$/,
                    loader: 'url?limit=6500&mimetype=image/svg+xml&name=fonts/[name].[ext]'
                }, {
                    test: /\.woff$/,
                    loader: 'url?limit=6500&mimetype=application/font-woff&name=fonts/[name].[ext]'
                }, {
                    test: /\.woff2$/,
                    loader: 'url?limit=6500&mimetype=application/font-woff2&name=fonts/[name].[ext]'
                }, {
                    test: /\.[ot]tf$/,
                    loader: 'url?limit=6500&mimetype=application/octet-stream&name=fonts/[name].[ext]'
                }, {
                    test: /\.eot$/,
                    loader: 'url?limit=6500&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
                }]
	    },
	    plugins: [
		new ExtractTextPlugin('app.bundle.css')
	    ],
	    resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.less'],
		root: [
		    path.resolve(__dirname, 'src')
		]
	    }
	}))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['index', 'js-css'], function() {});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');


const webpackConfig = {
    entry: './src/app.js',
    output: {
	path: path.resolve(__dirname, 'build'),
	filename: 'app.bundle.js'
    },
    module: {
	loaders: [{
	    test: /\.(less|css)$/,
	    loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
	}, {
	    test: /\.(png|gif|jpg|jpeg)$/,
	    loader: 'file?name=img/[name].[hash].[ext]',
	}, {
            test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=6500&mimetype=image/svg+xml&name=fonts/[name].[ext]'
        }, {
            test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=6500&mimetype=application/font-woff&name=fonts/[name].[ext]'
        }, {
            test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=6500&mimetype=application/font-woff2&name=fonts/[name].[ext]'
        }, {
            test: /\.[ot]tf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=6500&mimetype=application/octet-stream&name=fonts/[name].[ext]'
        }, {
            test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
};

gulp.task('index', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});


gulp.task('images', function() {
    return gulp.src('./src/img/**/*.{png,gif,jpg,jpeg}')
        .pipe(gulp.dest('./dist/img'));
})


gulp.task('favicon', function() {
    return gulp.src('./src/favicon.ico')
        .pipe(gulp.dest('./dist/'));
})


gulp.task('js-css', function() {
    return gulp.src('./src/app.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['index', 'images', 'favicon', 'js-css'], function() {});


gulp.task('dev-server', function(callback) {
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: '/dist',
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function(err) {
        if(err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        
        gutil.log("[dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

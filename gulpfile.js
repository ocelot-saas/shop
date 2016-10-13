const ExtractTextPlugin = require('extract-text-webpack-plugin');
const gulp = require('gulp');
const gutil = require('gulp-util');
const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');


const webpackNonLocalPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),    
];


const webpackConfig = {
    entry: './src/app.js',
    output: {
	path: path.resolve(__dirname, 'build'),
	filename: 'app.bundle.js'
    },
    module: {
	loaders: [{
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, 'src')],
            loader: 'babel',
            query: {
                cacheDirectory: path.resolve(__dirname, 'dist-cache'),
                presets: ['es2015', 'react'],
                plugins: ['transform-runtime']
            }
        }, {
	    test: /\.(less|css)$/,
            include: [path.resolve(__dirname, 'src')],
	    loader: ExtractTextPlugin.extract('style', 'css!less')
	}, {
	    test: /\.(svg|png|gif|jpg|jpeg)$/,
            include: [path.resolve(__dirname, 'src', 'img')],
	    loader: 'file?name=img/[name].[hash].[ext]'
	}, {
            test: /\.(svg|woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            include: [
                path.resolve(__dirname, 'src', 'fonts'),
                path.resolve(__dirname, 'node_modules', 'bootstrap', 'fonts'),
                path.resolve(__dirname, 'node_modules', 'font-awesome', 'fonts'),
            ],
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(process.env.ENV),
            'process.env.NODE_ENV': process.env.ENV === 'LOCAL' ? '"development"' : '"production"'
        }),
	new ExtractTextPlugin('[name].css'),
    ].concat(process.env.ENV !== 'LOCAL' ? webpackNonLocalPlugins : []),
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


gulp.task('webpack-dev-server', function(callback) {
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


gulp.task('build', ['index', 'images', 'favicon', 'js-css'], function() {});


gulp.task('dev-server', ['index', 'images', 'favicon', 'webpack-dev-server'], function() {});

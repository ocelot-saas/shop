const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = require('./src/server/config');


const webpackNonLocalPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
];


module.exports = {
    entry: './src/app.js',
    output: {
	path: '/',
	publicPath: '/',
	filename: 'app.bundle.js'
    },
    module: {
	loaders: [{
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, 'src')],
	    exclude: [path.resolve(__dirname, 'src', 'server')],
            loader: 'babel',
            query: {
                cacheDirectory: path.resolve(__dirname, 'dist-cache'),
                presets: ['es2015', 'react'],
                plugins: ['transform-runtime']
            }
        }, {
	    test: /\.(less|css)$/,
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules')
            ],
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
            'ENV': JSON.stringify(config.ENV),
            'process.env.NODE_ENV': config.ENV === 'LOCAL' ? '"development"' : '"production"'
        }),
	new ExtractTextPlugin('app.bundle.css'),
    ].concat(config.ENV !== 'LOCAL' ? webpackNonLocalPlugins : []),
    resolve: {
	extensions: ['', '.js', '.jsx', '.css', '.less'],
	root: [
	    path.resolve(__dirname, 'src')
	]
    },
    devtool: 'source-map'
}

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./config');
const webpackConfig = require('../../webpack.config');

const app = express();

if (config.ENV == 'LOCAL') {
    app.use(webpackDevMiddleware(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	serverSideRender: false
    }));

    app.use('/dist', express.static('./src/static'));
} else {
    app.use('/dist', express.static(config.DIST_PATH));
}

app.listen(config.PORT, function () {
    console.log('Listening on port ' + config.PORT.toString());
});

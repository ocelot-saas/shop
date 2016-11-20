const express = require('express');
const fs = require('fs');
const inventorySdk = require('inventory-sdk-js');
const path = require('path');
const Mustache = require('mustache');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./config');
const webpackConfig = require('../../webpack.config');


const app = express();
const inventoryService = new inventorySdk.InventoryService(config.INVENTORY_SERVICE_DOMAIN);


if (config.ENV == 'LOCAL') {
    const middleware = webpackDevMiddleware(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	serverSideRender: false
    });
    
    app.get('/dist/app.bundle.js', function (req, res) {
        inventoryService.getWebshopInfo('horias.ocelot.com')
            .then(function(webshopInfo) {
                const newConfig = Object.assign({}, config);
                newConfig["WEBSHOP_INFO"] = JSON.stringify(webshopInfo);
                const templateAppJsFile = middleware.fileSystem.readFileSync(path.join(process.cwd(), 'dist', 'app.bundle.js'), 'utf8');
                const appJsFile = Mustache.render(templateAppJsFile, newConfig);
                res.write(appJsFile);
                res.end();
            })
            .catch(function(error) {
                res.write('<!DOCTYPE html>\n<html>An error occurred</html>');
                res.end();
            });
    });
    app.use(middleware);
    app.get('*', function (req, res) {
	res.write(middleware.fileSystem.readFileSync(path.join(process.cwd(), 'dist', 'index.html')));
	res.end();
    });
} else {
    const templateAppJsFile = fs.readFileSync(path.join(process.cwd(), 'dist', 'app.bundle.js'), 'utf8');
    const indexFile = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf8');
    app.get('/dist/app.bundle.js', function (req, res) {
        inventoryService.getWebshopInfo('horias.ocelot.com')
            .then(function(webshopInfo) {
                const newConfig = Object.assign({}, config);
                newConfig["WEBSHOP_INFO"] = JSON.stringify(webshopInfo);                
                const appJsFile = Mustache.render(templateAppJsFile, newConfig);
                res.write(appJsFile);
                res.end();
            })
            .catch(function(error) {
                res.write('<!DOCTYPE html>\n<html>An error occurred</html>');
                res.end();
                throw error;
            });
    });
    app.use('/dist', express.static('./dist'));
    app.get('*', function (req, res) {
        res.write(indexFile);
        res.end();
    });
}

app.listen(config.PORT, config.ADDRESS, function () {
    console.log('Listening on port ' + config.PORT.toString());
});

var express = require('express');

var config = require('./config');

var app = express();

app.use('/dist', express.static(config.DIST_PATH));

app.listen(config.PORT, function () {
    console.log('Listening on port ' + config.PORT.toString());
});

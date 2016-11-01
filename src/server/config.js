const fs = require('fs');


exports.ENV = process.env.ENV;
exports.ADDRESS = process.env.ADDRESS;
exports.PORT = parseInt(process.env.PORT);

if (exports.ENV == 'LOCAL') {
    const secrets = JSON.parse(fs.readFileSync('/ocelot/var/secrets.json', 'utf-8'));
    exports.AUTH0_KEY = secrets.AUTH0_KEY;
    exports.AUTH0_DOMAIN = secrets.AUTH0_DOMAIN;
} else {
    exports.AUTH0_KEY = process.env.AUTH0_KEY;
    exports.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
}

exports.IDENTITY_SERVICE_DOMAIN = process.env.IDENTITY_SERVICE_DOMAIN;
exports.INVENTORY_SERVICE_DOMAIN = process.env.INVENTORY_SERVICE_DOMAIN;
exports.IDENTITY_SERVICE_PUBLIC_DOMAIN = process.env.IDENTITY_SERVICE_PUBLIC_DOMAIN;
exports.INVENTORY_SERVICE_PUBLIC_DOMAIN = process.env.INVENTORY_SERVICE_PUBLIC_DOMAIN;

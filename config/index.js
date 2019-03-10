const path = require('path');
exports.CONF = {

    // DB Params
    DB_HOST: 'DB_HOST',
    DB_USER: 'DB_USER',
    DB_PASS: 'DB_PASS',
    DB_NAME: 'DB_NAME',

    // App Root
    APPROOT: path.resolve(),
    // App Host
    APPHOST: 'localhost',
    // App Port
    APPPORT: process.env.PORT || 8000,
    // Site Name
    SITENAME: 'YouTube'

}

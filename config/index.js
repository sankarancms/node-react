const path = require('path');
exports.CONF = {

    // DB Params
    DB_HOST: 'localhost',
    DB_USER: 'CMS',
    DB_PASS: 'P@ssw0rd',
    DB_NAME: 'youtube',

    // App Root
    APPROOT: path.resolve(),
    // App Host
    APPHOST: 'localhost',
    // App Port
    APPPORT: process.env.PORT || 8000,
    // Site Name
    SITENAME: 'YouTube'

}

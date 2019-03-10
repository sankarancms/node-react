"use strict";
const { CONF } = require('../config');
class Application {

    /**
     * Application Constructor
     */
    constructor() {
        (async () => {
            this.init().catch(console.error);
        })()
        // Message on Exit
        process.on('exit', code => {
            console.log(`Application about to stop. Error code: ${code}`);
            return;
        });
    }

    /**
     * @summary Initializing FX
     * @returns Promise
     */
    async initialize() {
        return new Promise((resolve, reject) => {
            this.__dirname = process.cwd();
            // Express initialising
            this.express = require('express');
            // Local Path resolve
            this.path = require("path");
            // Routes
            this.routes = require('../routes');
            // Middlewares
            this.bodyParser = require("body-parser");
            resolve();
        }).catch(err => {
            console.log('Application failed to initialize\n');
            console.dir(err);
            this.stop(1001);
        });
    }

    /**
     * @summary This function to create a App with express Framework
     * @returns Promise
     */
    async createApplication() {
        return new Promise((resolve, reject) => {
            // App initialize
            this.app = this.express();
            // Set Static Folder
            this.app.use(this.express.static(this.path.join(this.__dirname, 'public')));
            // Port Configuration
            this.app.set('port', CONF.APPPORT);
            this.app.set('host', CONF.APPHOST);
            // BodyParser Middleware
            this.app.use(this.bodyParser.json());
            this.app.use(this.bodyParser.urlencoded({ extended: false }));
            this.app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });
            // Routes
            this.app.use('/', this.routes);
            // React view
            this.app.get('*', (req, res) => {
                res.sendFile(this.path.join(this.__dirname, 'public', 'index.html'));
            });
            resolve();
        }).catch(err => {
            console.error('Application failed to Create Server\n');
            this.stop(1002);
        }).then(() => {
            console.log('Application Initialized');
        });
    }

    /**
     * @summary Init method
     * @returns Promise
     */
    async init() {
        return new Promise((resolve, reject) => {
            this.initialize();
            this.createApplication();
            resolve();
        }).catch(err => {
            console.error('Application failed at init\n');
            this.stop(1003);
        }).then(() => {
            console.log('Application ready to start');
        });
    }

    /**
     * @summary Start Application, Port connection and Ngrok Tunnel
     * @returns Promise<any>
     */
    async start() {
        return new Promise((resolve, reject) => {
            this.app.listen(this.app.get('port'), err => {
                if (err) {
                    console.error(`Server initiation failed at listening port\n`);
                    throw err;
                }
            });
            resolve();
        })
            .catch(ex => {
                console.error('Server failed to start\n');
                console.log(ex);
                stop(1004);
            })
            .then(() => {
                console.log(`Application started successfully`);
                console.log(`click here to visit: http://${this.app.get('host')}:${this.app.get('port')}`);
            });
    }

    /**
     * 
     * @param {BigInteger} code 
     */
    stop(code = 0) {
        // Kill process.
        process.exit(code);
    }
}

module.exports = Application;
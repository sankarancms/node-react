const { CONF } = require('../config');
const mysql = require('mysql');
class Database {
    constructor() {
        // Initialize instance
        this.host = CONF.DB_HOST;
        this.user = CONF.DB_USER;
        this.password = CONF.DB_PASS;
        this.database = CONF.DB_NAME;
        this.results = null;
        this.error = null;
        this.fields = null;
        this.init();
        this.connect();
    }

    init() {
        this.db = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }

    connect() {
        // Connect
        this.db.connect((err) => {
            if (err) {
                throw err;
            }
            console.log('MySql Connected Successfully');
        });
        return this.db;
    }

    query(sql, callback) {
        this.db.query(sql, (error, results, fields) => {
            callback(error, results, fields);
        });
    }

    close() {
        this.db.end();
    }

}

exports.Database = Database;
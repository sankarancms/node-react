const { Database } = require('../../lib/Database');
class Channel {
    constructor() {
        this.db = new Database();
    }
    index(callback) {
        this.db.query("SELECT * FROM channels", (error, results, fields) => {
            callback(error, results, fields);
        });
    }
}

exports.Channel = Channel;
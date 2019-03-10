const Application = require('./lib/Application');
const app = new Application();
app.start().then(() => {
    // Started Successfully
}).catch(console.error);
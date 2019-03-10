const express = require('express');
const router = express.Router();

// Index Controller
const { index } = require('../api/controllers')

// Included Channel Controller
const { channels } = require('../api/controllers/channels');

// Routing to index controller when request to APPURL/
router.use('/', index);

// Routing to channels controller when request to APPURL/channels
router.use('/channels', channels);


module.exports = router;
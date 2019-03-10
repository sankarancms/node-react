const express = require('express');
const index = express.Router();
const { Index } = require('../models/Index');
const indexModel = new Index();
index.get('/', (req, res) => {
    res.send(indexModel.index());
});



exports.index = index;
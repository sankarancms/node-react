const express = require('express');
const channels = express.Router();
const { Channel } = require('../models/Channel');
const channelModel = new Channel();
channels.get('', (req, res) => {
    channelModel.index((error, results, fields) => {
        var columns = [
            {
                "label": "S/N",
                "field": "id",
                "sort": "asc",
                "width": 150
            },
            {
                "label": "Rank",
                "field": "Rank",
                "sort": "asc",
                "width": 270
            },
            {
                "label": "Grade",
                "field": "Grade",
                "sort": "asc",
                "width": 270
            },
            {
                "label": "Channel name",
                "field": "Channel name",
                "sort": "asc",
                "width": 270
            },
            {
                "label": "Video Uploads",
                "field": "Video Uploads",
                "sort": "asc",
                "width": 270
            },
            {
                "label": "Subscribers",
                "field": "Subscribers",
                "sort": "asc",
                "width": 270
            },
            {
                "label": "Video views",
                "field": "Video views",
                "sort": "asc",
                "width": 270
            }
        ];
        var rows = results;
        let data = { columns: columns, rows: rows };
        res.json(data);
    });
});



exports.channels = channels;
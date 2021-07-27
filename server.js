const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html')),
        function(err) {
            if (err) {
                res.status(500).send(err)
            }
        };
});
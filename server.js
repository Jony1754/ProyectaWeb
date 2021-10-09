var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.use(function(req, res, next) {
    if ((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect(307, 'https://' + req.get('Host') + req.url);
    } else
        next();
});

var server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});
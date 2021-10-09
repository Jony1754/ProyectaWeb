var path = require('path');
var express = require('express');

var app = express();

app.get('*', function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https')
        res.redirect('https://https://proyectapotencialeshumanos.com' + req.url)
    else
        next() /* Continue to other routes if we're not redirecting */
})
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});
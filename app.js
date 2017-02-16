var express = require('express')
var faceApi = require('./face_api')
var http = require('http');
var path = require('path');
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser')

var publicDir = path.join(__dirname, 'public')

//faceApi('hol', function() {});
app.use(express.static('public'));
app.use(bodyParser.raw({
    type: "image/png",
    limit: "1gb"
}));

app.set('port', process.env.PORT || 3000)
//app.use(bodyParser.json()) //parses json, multi-part (file), url-encoded
app.get('/', function(req, res) {
    res.sendFile(path.join(publicDir, 'index.html'))
});


app.post('/upload', function(req, res) {
    fs.writeFile("./1.png", req.body, function(err) {});
    res.send('POST request done');
});



var server = http.createServer(app)

server.listen(app.get('port'), function() {
    console.log("Web server listening on port " + app.get('port'));
});

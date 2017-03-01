var express = require('express')
var faceApi = require('./face_api')
var http = require('http');
var path = require('path');
var app = express()
var fs = require('fs');
var drawRectangle = require('./drawRectangle');
var bodyParser = require('body-parser')
var socketIo = require('socket.io');


var publicDir = path.join(__dirname, 'public')

//faceApi('hol', function() {});
app.use(express.static('public'));
app.use(bodyParser.raw({
    type: "image/jpeg",
    limit: "1gb"
}));

app.set('port', process.env.PORT || 3000)
//app.use(bodyParser.json()) //parses json, multi-part (file), url-encoded
app.get('/', function(req, res) {
    res.sendFile(path.join(publicDir, 'index.html'))
});

app.post('/upload', function(req, res) {
    console.log("upload received in upload url");
    var filename = Math.random().toString(36).replace(/[^a-z]+/g, '');
    fs.writeFile("./th/test.jpg", req.body, function(err) {});


    faceApi('./th/test.jpg', function(err, rectangle) {
        console.log(rectangle);
        if (err) {
            console.log(err);
        }
        io.sockets.emit('message', {
            top: 10,
            left: 200,
            width: 200,
            height: 100
        })
    });

    res.send('POST request done');


});

var server = http.createServer(app)
var io = socketIo.listen(server);

io.on('connection', function(socket) {
    socket.emit("tweet", {
        user: "hola"
    })


})






/**
io.on('connection', function(socket) {
    socket.on('message', function(data) {
        console.log('message recived');
        drawRectangle();

    })
    console.log("socket connection done")
    socket.emit('message', {});
});


io.on('message', function(data) {
    console.log("socket message received");
    io.sockets.emit('draw_line', data);
});
**/
//initiation server
server.listen(app.get('port'), function() {
    console.log("Web server listening on port " + app.get('port'));
});

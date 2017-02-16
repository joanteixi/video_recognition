var restify = require('restify');
var fs = require('fs');
var request = require('request');
module.exports = function(text, callback) {


    var headers = {
        'Ocp-Apim-Subscription-Key': 'mykey',
        'Content-Type': 'application/octet-stream'
    };

    var url = "https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true"

    var formData = {
        // Pass a simple key-value pair
        // Pass data via Buffers
        my_buffer: new Buffer([1, 2, 3]),
        // Pass data via Streams
        body: fs.createReadStream(__dirname + '/th/face.jpg'),
        // Pass multiple values /w an Array

        // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
        // Use case: for some types of streams, you'll need to provide "file"-related information manually.
        // See the `form-data` README for more information about options: https://github.com/form-data/form-data

    };
    data = fs.ReadStream(__dirname + '/th/face.jpg');
    data.on('end', () => {

        console.log(data.write);
    });

    request({
        url: url,
        method: 'POST',
        body: data,
        headers: {
            'content-type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': '6c9b8672ebbc4a8f9ddfd2bc96dfd10e',
            'body': ''
        }
    }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    });

}
//nothing below...

var fs = require('fs');
var request = require('request');
module.exports = function(file, callback) {

    var Rectangle = function(width, height, top, left) {
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
    }

    callback(null, new Rectangle(10, 10, 15, 15));
    /**
        var headers = {
            'Ocp-Apim-Subscription-Key': '259ae3536cd64a73b931b45b9f1e6959',
            'Content-Type': 'application/octet-stream'
        };
        var qs = {
            returnFaceId: false,
            returnFaceLandmarks: false
        }

        //var url = "https://api.projectoxford.ai/face/v1.0/detect";
        var url = "https://westus.api.cognitive.microsoft.com/face/v1.0/detect";
        //  var url = "http://localhost:3000/test";
        data = fs.readFileSync(__dirname + '/th/face.jpg')

        request.post({
            url: url,
            headers: {
                'content-type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': '6c9b8672ebbc4a8f9ddfd2bc96dfd10e'
            },
            qs: qs,
            body: data
        }, function(err, httpResponse, body) {
            if (err) {
                callback('UploadFailed');
            }
            console.log(body);
            json = JSON.parse(body)[0].faceRectangle;
            callback(null, new Rectangle(json.width, json.height, json.top, json.left));

        })

        /**
        request({
            url: url,
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': '6c9b8672ebbc4a8f9ddfd2bc96dfd10e',

            }
        }, function optionalCallback(err, httpResponse, body) {
            console.log('call to FaceApi done');
            if (err) {
                return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        });
        **/


}
//nothing below...

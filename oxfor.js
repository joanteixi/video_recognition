var oxford = require('project-oxford'),
    client = new oxford.Client('6c9b8672ebbc4a8f9ddfd2bc96dfd10e');

client.face.detect({
    path: './test_picture.jpg',
    analyzesAge: true,
    analyzesGender: true
}).then(function(response) {
    console.log('The age is: ' + response[0].attributes.age);
    console.log('The gender is: ' + response[0].attributes.gender);
});

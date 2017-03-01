module.exports = function(context) {
    // get the Node or Browser canvas
    var canvas = context.canvas;
    var width = canvas.width / 2;
    var height = canvas.height / 2;

    // draw a red circle
    var radius = 100;
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(width, height, radius, 0, Math.PI * 2, false);
    context.fill();
}

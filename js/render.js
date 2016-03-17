var canvas = $('#tutorial')[0];
var ctx = canvas.getContext('2d');
var canvasRect = canvas.getBoundingClientRect();

var fillA = 'rgba(0, 0, 210, 0.55)';
var fillB = 'rgba(210, 0, 0, 0.55)';
var strokeA = 'rgba(0, 0, 255, 0.8)';
var strokeB = 'rgba(255, 0, 0, 0.8)';

function drawRectangle(rect, fill, stroke, text) {
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.fillRect(rect.left, rect.top, rect.width, rect.height);
    ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);

    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, (rect.left+rect.right)/2, (rect.top+rect.bottom)/2); 
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRectangle(rectA, fillA, strokeA, "A");
    drawRectangle(rectB, fillB, strokeB, "B");

    requestAnimationFrame(render);
}

canvas.addEventListener('mousedown', function(e) {
    var eventX = e.clientX - canvasRect.left;
    var eventY = e.clientY - canvasRect.top;
    activateRectangle(eventX, eventY);
});

canvas.addEventListener('mouseup', function(e) {
    deactivateRectangle();
});

canvas.addEventListener('mousemove', function(e) {
    var eventX = e.clientX - canvasRect.left;
    var eventY = e.clientY - canvasRect.top;
    moveActiveRectangle(eventX, eventY);
});


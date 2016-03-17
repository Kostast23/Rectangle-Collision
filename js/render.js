var canvas = $('#tutorial')[0];
var ctx = canvas.getContext('2d');
var canvasRect = canvas.getBoundingClientRect();

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    requestAnimationFrame(render);
}

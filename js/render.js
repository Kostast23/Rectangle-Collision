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

    ctx.font = "16px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, (rect.left+rect.right)/2, (rect.top+rect.bottom)/2); 
}

function colorHTML(conds) {
    var colors = {true: 'green', false: 'red'};

    $('#js-cond-1').css('color', colors[conds[0]]);
    $('#js-cond-2').css('color', colors[conds[1]]);
    $('#js-cond-3').css('color', colors[conds[2]]);
    $('#js-cond-4').css('color', colors[conds[3]]);

    $('#js-opp-cond-1').css('color', colors[!conds[0]]);
    $('#js-opp-cond-2').css('color', colors[!conds[1]]);
    $('#js-opp-cond-3').css('color', colors[!conds[2]]);
    $('#js-opp-cond-4').css('color', colors[!conds[3]]);

    if (conds[0] && conds[1] && conds[2] && conds[3]) {
        $('#js-word-1').addClass('red');
        $('#js-word-2').addClass('blue');
        $('#collision-outcome').html('Collision').css('color', 'green');
    } else {
        $('#js-word-1').removeClass('red');
        $('#js-word-2').removeClass('blue');
        $('#collision-outcome').html('No Collision').css('color', 'red');
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRectangle(rectA, fillA, strokeA, "A");
    drawRectangle(rectB, fillB, strokeB, "B");

    var conds = checkCollision(rectA, rectB);
    colorHTML(conds);

    requestAnimationFrame(render);
}


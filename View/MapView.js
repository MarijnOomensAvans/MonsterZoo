var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
// Box width
var bw = 800;
// Box height
var bh = 800;
// Padding
var p = 10;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function drawBoard(){
    for (var x = 0; x <= bw; x += 80) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 80) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}
drawBoard();
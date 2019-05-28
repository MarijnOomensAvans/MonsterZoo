export default class MapView {
    // Box width
    bw = 800;
    // Box height
    bh = 800;
    // Padding
    p = 10;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    drawBoard() {
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
}
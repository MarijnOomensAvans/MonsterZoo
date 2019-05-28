export default class MapView {

    drawBoard() {
        // Box width
        let bw = 800;
        // Box height
        let bh = 800;
        // Padding
        let p = 10;

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

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
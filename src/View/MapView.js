export default class MapView {

    constructor() {
        //Zoo width and hieght
        this.bw = 800;
        this.bh = 800;
        
        //Padding
        this.p = 10;
        
        this.canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
        
        this.canvas.addEventListener('click', handleClick);
    }
    
    drawBoard() {
        
        for (var x = 0; x <= this.bw; x += 80) {
            this.context.moveTo(0.5 + x + this.p, this.p);
            this.context.lineTo(0.5 + x + this.p, this.bh + this.p);
        }
        
        for (var x = 0; x <= this.bh; x += 80) {
            this.context.moveTo(this.p, 0.5 + x + this.p);
            this.context.lineTo(this.bw + this.p, 0.5 + x + this.p);
        }
        this.context.strokeStyle = "black";
        this.context.stroke();
    }

    getMousePos(c, evt) {
        let rect = c.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    handleClick(e) {
        let pos = getMousePos(this.canvas,e);
        posx = pos.x;
        posy = pos.y;

        alert(posx + " " + posy);
    }
    
}
export class MapView {
  constructor() {
    this.map = document.getElementById("map");
    this.zw = 10;
    this.zh = 10;
    this.readJson();
  }

  readJson() {
    fetch("./map/grid.json")
      .then(response => {
        response.json().then(json => {
          this.grids = json;
          let jsonstring = JSON.stringify(this.grids)
          console.log(JSON.parse(jsonstring).grid[0])
        })
      })
  }

  drawBoard() {
    this.table = document.createElement("table");
    this.table.setAttribute("id", "grid");

    for (let i = 0; i < this.zw; i++) {
      this.tr = document.createElement("tr");
      for (let y = 0; y < this.zh; y++) {
        this.td = document.createElement("td");
        this.td.setAttribute("ondrop", "drop(event)");
        this.td.setAttribute("ondragover", "allowDrop(event)");
        if (i == 5 && y == 5) {
          this.img = document.createElement("img");
          this.img.src =
            "https://evolutionmgt.com/wp-content/uploads/2017/05/e51196e2a1a965f4262dc4947729889f-game-cards-little-monsters.jpg";
          this.img.draggable = true;
          this.img.setAttribute("ondragstart", "drag(event)")
          this.td.appendChild(this.img);
        }
        this.tr.appendChild(this.td);
      }
      this.table.appendChild(this.tr);
    }
    this.map.appendChild(this.table);

    for (let i = 0; i < this.table.rows.length; i++) {
      for (let j = 0; j < this.table.rows[i].cells.length; j++) {
        this.table.rows[i].cells[j].onclick = function(i, j) {
          console.log(i + ":" + j);
        }.bind(null, i, j);
      }
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
  
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  drop(ev) {
    ev.preventDefault();
    this.data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(this.data));
  }

}

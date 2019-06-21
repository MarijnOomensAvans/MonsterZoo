export class MapView {
  constructor() {
    this.map = document.getElementById("map");
    this.zw = 10;
    this.zh = 10;
  }

  readJson() {
    fetch("./map/grid.json")
      .then(response => {
        response.json().then(json => {
          let jsonstring = JSON.stringify(json)
          this.grid = JSON.parse(jsonstring)[0].grid
          this.drawBoard()
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
        this.td.addEventListener("dragover", this.dragover)
        this.td.addEventListener("dragenter", this.dragenter)
        this.td.addEventListener("drop", this.drop)

        if (this.grid[i].Columns[y] == 1) {
          this.img = document.createElement("img");
          this.img.setAttribute("class", "stone")
          this.img.src =
            "http://takfloyd.com/wp-content/uploads/2015/03/JunglerockAlpha.png";
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

  dragover(e) {
    e.preventDefault()
  }
  dragenter(e) {
    e.preventDefault()
  }
  drop() {
    let box = document.getElementsByClassName('stone')[0]
    this.append(box)
  }

}

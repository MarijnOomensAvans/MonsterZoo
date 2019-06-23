export class MapView {
  constructor() {
    this.map = document.getElementById("map");
    this.zw = 10;
    this.zh = 10;

    let jungle = document.getElementById("jungle");
    let desert = document.getElementById("desert");
    let northpole = document.getElementById("northpole");

    jungle.disabled = true;
    jungle.setAttribute("class", "nes-btn is-disabled");

    jungle.addEventListener("click", () => {
      if (jungle.disabled != true) {
        this.loadGrid(0);
        jungle.disabled = true;
        desert.disabled = false;
        northpole.disabled = false;

        jungle.setAttribute("class", "nes-btn is-disabled");
        desert.setAttribute("class", "nes-btn is-warning");
        northpole.setAttribute("class", "nes-btn");
      }
    });

    desert.addEventListener("click", () => {
      if (desert.disabled != true) {
        this.loadGrid(1);
        desert.disabled = true;
        jungle.disabled = false;
        northpole.disabled = false;

        desert.setAttribute("class", "nes-btn is-disabled");
        jungle.setAttribute("class", "nes-btn is-success");
        northpole.setAttribute("class", "nes-btn");
      }
    });

    northpole.addEventListener("click", () => {
      if (northpole.disabled != true) {
        this.loadGrid(2);
        northpole.disabled = true;
        desert.disabled = false;
        jungle.disabled = false;

        northpole.setAttribute("class", "nes-btn is-disabled");
        jungle.setAttribute("class", "nes-btn is-success");
        desert.setAttribute("class", "nes-btn is-warning");
      }
    });
  }

  loadGrid(terrain) {
    fetch("./map/grid.json").then(response => {
      response.json().then(json => {
        let jsonstring = JSON.stringify(json);
        this.grid = JSON.parse(jsonstring)[terrain].grid;
        this.drawBoard(terrain);
      });
    });
  }

  drawBoard(terrain) {
    let oldBoard = document.getElementById("grid");
    if (oldBoard != null) {
      oldBoard.remove();
    }

    this.table = document.createElement("table");
    this.table.setAttribute("id", "grid");

    for (let i = 0; i < this.zw; i++) {
      this.tr = document.createElement("tr");
      for (let y = 0; y < this.zh; y++) {
        this.td = document.createElement("td");
        this.td.addEventListener("dragover", this.dragover);
        this.td.addEventListener("dragenter", this.dragenter);
        this.td.addEventListener("drop", this.drop);

        if (this.grid[i].Columns[y] == 1) {
          this.img = document.createElement("img");
          this.img.setAttribute("class", "stone");
          this.img.setAttribute("id", i + "x" + y);

          switch (terrain) {
            // Jungle
            case 0:
                this.img.src =
                "../src/Resources/junglerock.png";
              break;

            // Desert
            case 1:
                this.img.src =
                "../src/Resources/desertrock.png";
              break;

            // Northpole
            case 2:
                this.img.src =
                "../src/Resources/icechunk.png";
              break;

            default:
              break;
          }

          this.img.draggable = true;
          this.img.addEventListener("dragstart", this.drag);
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

  drag(e) {
    e.dataTransfer.setData("Text", e.target.id);
    console.log(e.dataTransfer.getData("Text"));
  }
  dragover(e) {
    e.preventDefault();
  }
  dragenter(e) {
    e.preventDefault();
  }
  drop(e) {
    if(!this.hasChildNodes()) {
      let data = e.dataTransfer.getData("Text");
      this.append(document.getElementById(data));
    }
  }
}

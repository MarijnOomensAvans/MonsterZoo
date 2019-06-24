export class MapView {
  constructor() {
    this.STORAGE_KEY = "zoo-grid";
    this.map = document.getElementById("map");

    // Zoo width (zw) and zoo height (zh)

    this.zw = 10;
    this.zh = 10;

    // Load buttons from index.html

    let jungle = document.getElementById("jungle");
    let desert = document.getElementById("desert");
    let northpole = document.getElementById("northpole");

    jungle.disabled = true;
    jungle.setAttribute("class", "nes-btn is-disabled");

    // ---------------------------------------------------------------------------------------------------------
    // Buttons for switching between environments
    // ---------------------------------------------------------------------------------------------------------

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
        this.loadGrid(2);
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
        this.loadGrid(1);
        northpole.disabled = true;
        desert.disabled = false;
        jungle.disabled = false;

        northpole.setAttribute("class", "nes-btn is-disabled");
        jungle.setAttribute("class", "nes-btn is-success");
        desert.setAttribute("class", "nes-btn is-warning");
      }
    });

    // ---------------------------------------------------------------------------------------------------------

    // Initialse the map from jungle
    this.loadGrid(0);
  }

  // Fetch the right json grid based on terrian index
  loadGrid(terrain) {
    fetch("./map/grid.json").then(response => {
      response.json().then(json => {
        let jsonstring = JSON.stringify(json);
        this.wholegrid = JSON.parse(jsonstring);
        let storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        if(storage != null) {
          this.grid = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        } else {
          this.grid = this.wholegrid;
        }
        this.selected = this.grid[terrain].grid;
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

        // Drag and drop events

        this.td.addEventListener("dragover", this.dragover);
        this.td.addEventListener("dragenter", this.dragenter);
        this.td.addEventListener("drop", this.drop);
        this.td.setAttribute("id", i + "-" + y);

        if (typeof this.selected[i].Columns[y] === "object") {
          this.img = document.createElement("img");
          this.img.setAttribute("class", "monster");

          //Every monster gets an id based on their coordinates
          this.img.setAttribute("id", i + "x" + y);
          this.img.src = "../src/Resources/orangemonster.png";

          this.img.draggable = true;
          this.img.addEventListener("dragstart", this.drag);
          this.td.appendChild(this.img);
        }

        if (this.selected[i].Columns[y] == 1) {
          this.img = document.createElement("img");
          this.img.setAttribute("class", "stone");

          //Every monster gets an id based on their coordinates
          this.img.setAttribute("id", i + "x" + y);

          switch (terrain) {
            // Jungle
            case 0:
              this.img.src = "../src/Resources/junglerock.png";
              break;

            // Nortpole
            case 1:
              this.img.src = "../src/Resources/icechunk.png";
              break;

            // Desert
            case 2:
              this.img.src = "../src/Resources/cactus.png";
              break;

            default:
              break;
          }
          this.td.appendChild(this.img);
        }

        this.tr.appendChild(this.td);
      }
      this.table.appendChild(this.tr);
    }
    this.map.appendChild(this.table);
  }

  drag(e) {
    e.dataTransfer.setData("Text", e.target.id);
  }
  dragover(e) {
    e.preventDefault();
  }
  dragenter(e) {
    e.preventDefault();
  }
  drop(e) {
    let data = e.dataTransfer.getData("Text");
    let monster = document.getElementById(data);
    if (!this.hasChildNodes() && monster.getAttribute("draggable") === "true") {
      this.append(monster);
    }
  }
}

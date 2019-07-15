export class MapView {
  constructor(zoocontroller, weathercontroller) {
    this.STORAGE_KEY = "zoo-grid";
    this.map = document.getElementById("map");
    this.remove = document.getElementById("remove");

    this.zoocontroller = zoocontroller;
    this.weathercontroller = weathercontroller;

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

    // Initialise the map from jungle
    this.loadGrid(0);
  }

  loadGrid(terrain) {
    // Terrain index: 0 is jungle, 1 is northpole, 3 is desert
    this.terrain = terrain;
    this.zoocontroller.loadGrid(this);
  }

  paintGrid(grid) {
    this.grid = grid;
    this.selected = this.grid[this.terrain].grid;
    this.weathercontroller.updateWeather(this.grid[this.terrain].reference_city);
    this.initRemove();
    this.drawBoard();
  }

  drawBoard() {
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
        this.td.addEventListener("dragover", function(e) {
          e.preventDefault();
        });

        this.td.addEventListener("dragenter", function(e) {
          e.preventDefault();
        });

        let grid = this.grid;
        let terrain = this.terrain;
        let zoocontroller = this.zoocontroller;
        let storageKey = this.STORAGE_KEY;

        this.td.addEventListener("drop", function(e) {
          let data = e.dataTransfer.getData("Text");
          let monster = document.getElementById(data);

          if(monster != null) {
            if (
              !this.hasChildNodes() &&
              monster.getAttribute("draggable") === "true"
            ) {
              let origin = monster.getAttribute("id").split("x");
              let coordid = this.getAttribute("id").split("-");
  
              zoocontroller.addMonsterToGrid(grid, terrain, { Name: "Marijn" }, coordid[0], coordid[1]);
  
              if (monster.getAttribute("id") !== "-1x-1") {
                zoocontroller.deleteMonsterFromGrid(grid, terrain, origin[0], origin[1]);
              }
  
              monster.setAttribute("id", coordid[0] + "x" + coordid[1]);
              this.append(monster);
            }
          }
        });

        this.td.setAttribute("id", i + "-" + y);

        if (typeof this.selected[i].Columns[y] === "object") {
          this.img = document.createElement("img");
          this.img.setAttribute("class", "monster");

          //Every monster gets an id based on their coordinates
          this.img.setAttribute("id", i + "x" + y);
          this.img.src = "../src/Resources/orangemonster.png";

          this.img.draggable = true;
          this.img.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("Text", e.target.id);
          });
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
              document.getElementById("map").style.backgroundColor = "#289150";
              break;

            // Nortpole
            case 1:
              this.img.src = "../src/Resources/icechunk.png";
              document.getElementById("map").style.backgroundColor = "#D8FFFF";
              break;

            // Desert
            case 2:
              this.img.src = "../src/Resources/cactus.png";
              document.getElementById("map").style.backgroundColor = "#EDC9AF";
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

  initRemove() {
    let grid = this.grid;
    let terrain = this.terrain;
    let storageKey = this.STORAGE_KEY;
    let zoocontroller = this.zoocontroller;

    this.remove.addEventListener("drop", function(e) {
      let data = e.dataTransfer.getData("Text");
      let monster = document.getElementById(data);
      let origin = monster.getAttribute("id").split("x");

      zoocontroller.deleteMonsterFromGrid(grid, terrain, origin[0], origin[1]);

      monster.remove();
    });

    this.remove.addEventListener("dragover", function(e) {
      e.preventDefault();
    });

    this.remove.addEventListener("dragenter", function(e) {
      e.preventDefault();
    });
  }
}

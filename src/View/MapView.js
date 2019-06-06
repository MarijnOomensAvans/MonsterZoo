export default class MapView {
  constructor() {
    fetch("http://localhost:8125/src/data/grid")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
    this.map = document.getElementById("map");
    this.zw = 10;
    this.zh = 10;
  }

  drawBoard() {
    this.table = document.createElement("table");
    this.table.setAttribute("id", "grid");

    for (let i = 0; i < this.zw; i++) {
      this.tr = document.createElement("tr");
      for (let y = 0; y < this.zh; y++) {
        this.td = document.createElement("td");
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
}

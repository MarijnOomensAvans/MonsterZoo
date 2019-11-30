export class MapService {
  async loadGrid() {
    let grid = await fetch("./map/grid.json");
    let STORAGE_KEY = "zoo-grid";

    // Put the whole grid from localstorage in a variable
    let storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storage != null) {
      grid = storage;

    // If the grid is not present in localstorage yet, put the whole grid as loaded from the local grid.json file in there
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(grid));
    }

    return grid;
  }

  addMonsterToGrid(grid, terrain, monster, x, y) {
    monster.x = x;
    monster.y = y;
    monster.map = terrain;
    grid[terrain].grid[x].Columns[y] = monster;
    this.saveToLocalStorage(grid);
  }

  deleteMonsterFromGrid(grid, terrain, x, y) {
    grid[terrain].grid[x].Columns[y] = "0";
    this.saveToLocalStorage(grid);
  }

  saveToLocalStorage(grid) {
    let STORAGE_KEY = "zoo-grid";
    localStorage.setItem(STORAGE_KEY, JSON.stringify(grid));
  }

  getMonsterByPosition(grid, map, x, y) {
    return grid[map].grid[x].Columns[y];
  }

}

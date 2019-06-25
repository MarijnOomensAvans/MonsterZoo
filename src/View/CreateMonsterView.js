export class CreateMonsterView {
  // template;
  // monsterform;
  // radio_fire;
  // radio_water;
  // radio_earth;
  // radio_wind;
  // switch_int;

  constructor(controller) {
    this.template = document.getElementById("create_monster");
    this.monsterform = document.getElementById("monster_form");

    this.radio_fire = document.getElementById("element_fire");
    this.radio_water = document.getElementById("element_water");
    this.radio_earth = document.getElementById("element_earth");
    this.radio_wind = document.getElementById("element_wind");

    this.created = document.getElementById("created");

    //events
    this.radio_fire.addEventListener("click", function() {
      document.getElementById("fire_template").style.display = this.checked
        ? "block"
        : "none";
      document.getElementById("water_template").style.display = "none";
      document.getElementById("earth_template").style.display = "none";
      document.getElementById("wind_template").style.display = "none";
    });

    this.radio_water.addEventListener("click", function() {
      document.getElementById("water_template").style.display = this.checked
        ? "block"
        : "none";
      document.getElementById("fire_template").style.display = "none";
      document.getElementById("earth_template").style.display = "none";
      document.getElementById("wind_template").style.display = "none";
    });

    this.radio_earth.addEventListener("click", function() {
      document.getElementById("earth_template").style.display = this.checked
        ? "block"
        : "none";
      document.getElementById("fire_template").style.display = "none";
      document.getElementById("water_template").style.display = "none";
      document.getElementById("wind_template").style.display = "none";
    });

    this.radio_wind.addEventListener("click", function() {
      document.getElementById("wind_template").style.display = this.checked
        ? "block"
        : "none";
      document.getElementById("fire_template").style.display = "none";
      document.getElementById("water_template").style.display = "none";
      document.getElementById("earth_template").style.display = "none";
    });

    let created = this.created;
    this.monsterform.addEventListener("submit", function(e) {
      e.preventDefault();

      if (!created.hasChildNodes()) {
        this.img = document.createElement("img");
        this.img.setAttribute("class", "created");

        let src = "";

        switch (this.element.value) {
          case "fire":
            src = "../src/Resources/orangemonster.png";
            break;
          case "water":
            src = "../src/Resources/bluemonster.png";
            break;
          case "earth":
            src = "../src/Resources/brownmonster.png";
            break;
          case "wind":
            src = "../src/Resources/whitemonster.png";
            break;

          default:
            break;
        }
        this.img.src = src;
        this.img.draggable = true;
        this.img.addEventListener("dragstart", function(e) {
          e.dataTransfer.setData("Text", e.target.id);
        });
        created.appendChild(this.img);
      }
    });
  }
}

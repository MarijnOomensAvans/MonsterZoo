export class CreateMonsterView {

  constructor(controller) {
    this.template = document.getElementById("create_monster");

    this.radio_fire = document.getElementById("element_fire");
    this.radio_water = document.getElementById("element_water");
    this.radio_earth = document.getElementById("element_earth");
    this.radio_wind = document.getElementById("element_wind");

    this.setEvents();
  }

  updateForm() {
    this.monsterform = document.getElementById("monster_form");
    let created = document.getElementById("created");

    this.monsterform.addEventListener("submit", function(e) {
      e.preventDefault();

      if (created.hasChildNodes()) {
        while (created.firstChild) {
          created.removeChild(created.firstChild);
        }
      }
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
      this.img.setAttribute('id', '-1x-1');
      this.img.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("Text", e.target.id);
      });
      created.appendChild(this.img);
    });
  }

  setEvents() {
    //events
    this.radio_fire.addEventListener("click", function() {
      if (this.checked) {
        let firetemp = document.getElementById("fire_template");
        firetemp.style.display = "block";
        firetemp.childNodes[1].setAttribute("id", "monster_form");
        document.getElementById("water_template").style.display = "none";
        document
          .getElementById("water_template")
          .childNodes[1].removeAttribute("id");
        document.getElementById("earth_template").style.display = "none";
        document
          .getElementById("earth_template")
          .childNodes[1].removeAttribute("id");
        document.getElementById("wind_template").style.display = "none";
        document
          .getElementById("wind_template")
          .childNodes[1].removeAttribute("id");
      }
    });

    this.radio_fire.addEventListener("click", this.updateForm);

    this.radio_water.addEventListener("click", function() {
      let watertemp = document.getElementById("water_template");
      watertemp.style.display = "block";
      watertemp.childNodes[1].setAttribute("id", "monster_form");
      document.getElementById("fire_template").style.display = "none";
      document
        .getElementById("fire_template")
        .childNodes[1].removeAttribute("id");
      document.getElementById("earth_template").style.display = "none";
      document
        .getElementById("earth_template")
        .childNodes[1].removeAttribute("id");
      document.getElementById("wind_template").style.display = "none";
      document
        .getElementById("wind_template")
        .childNodes[1].removeAttribute("id");
    });

    this.radio_water.addEventListener("click", this.updateForm);

    this.radio_earth.addEventListener("click", function() {
      let earthtemp = document.getElementById("earth_template");
      earthtemp.style.display = "block";
      earthtemp.childNodes[1].setAttribute("id", "monster_form");
      document.getElementById("fire_template").style.display = "none";
      document
        .getElementById("fire_template")
        .childNodes[1].removeAttribute("id");
      document.getElementById("water_template").style.display = "none";
      document
        .getElementById("water_template")
        .childNodes[1].removeAttribute("id");
      document.getElementById("wind_template").style.display = "none";
      document
        .getElementById("wind_template")
        .childNodes[1].removeAttribute("id");
    });

    this.radio_earth.addEventListener("click", this.updateForm);

    this.radio_wind.addEventListener("click", function() {
      let windtemp = document.getElementById("wind_template");
      windtemp.style.display = "block";
      windtemp.childNodes[1].setAttribute("id", "monster_form");
      document.getElementById("fire_template").style.display = "none";
      document
        .getElementById("fire_template")
        .childNodes[1].removeAttribute("id");
      document.getElementById("water_template").style.display = "none";
      document
        .getElementById("water_template")
        .childNodes[1].removeAttribute("id");
      document.getElementById("earth_template").style.display = "none";
      document
        .getElementById("earth_template")
        .childNodes[1].removeAttribute("id");
    });

    this.radio_wind.addEventListener("click", this.updateForm);
  }
}

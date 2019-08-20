export class CreateMonsterView {

  constructor(controller) {
    this.controller = controller;

    this.template = document.getElementById("create_monster");

    this.radio_fire = document.getElementById("element_fire");
    this.radio_water = document.getElementById("element_water");
    this.radio_earth = document.getElementById("element_earth");
    this.radio_wind = document.getElementById("element_wind");
    this.remove = document.getElementById("remove");

    this.setElementEvents();
    // this.setEvents();
  }

  updateForm(controller) {
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

      console.log(this.element.value)

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

      let name = document.getElementById("name").value;
      let element = document.getElementById("element").value;
      console.log(element);
      console.log(name);
      controller.addMonster(name, element/*this.name.value, this.arms.value, this.tentacles.value, this.legs.value, this.eyes.value, this.swimtype.value, this.fly.value, this.swim.value, this.colour.value, this.map.value, this.x.value, this.y.value*/);

    });
  }

  setElementEvents() {
    this.radio_fire.addEventListener("click", function() {
          if (this.checked) {
            let form = document.getElementById("monster_form");
            // TODO: Remove previous form

            let fieldset = document.createElement("fieldset");
            let namelabel = document.createElement("label");
            namelabel.innerHTML = "Name:";
            let nameinput = document.createElement("input");
            nameinput.setAttribute("id", "name");
            nameinput.setAttribute("name", "name");

            fieldset.appendChild(namelabel);
            fieldset.appendChild(nameinput);

            form.appendChild(fieldset);

            let element = document.createElement("input");
            element.setAttribute("id", "element");
            element.setAttribute("value", "fire");
            element.hidden = true;

            form.appendChild(element);
            
            let fieldset2 = document.createElement("fieldset");
            let armslabel = document.createElement("label");
            armslabel.innerHTML = "Arms:";
            let select = document.createElement("select");
            select.setAttribute("id", "firearms");
            for(let i = 1; i < 7; i++) {
              let option = document.createElement("option");
              option.setAttribute("value", `${i}`);
              option.innerHTML = i;
              select.appendChild(option);
            }

            fieldset2.appendChild(armslabel);
            fieldset2.appendChild(select);

            form.appendChild(fieldset2);

            let fieldset3 = document.createElement("fieldset");
            let typearmslabel = document.createElement("label");
            typearmslabel.innerHTML = "Type arms:"

            let typearmsselect = document.createElement("select");
            typearmsselect.setAttribute("id", "type_arms");
            let option1 = document.createElement("option");
            option1.setAttribute("value", "tentacles");
            option1.innerHTML = "Tentacles";
            let option2 = document.createElement("option");
            option2.setAttribute("value", "claws");
            option2.innerHTML = "Claws";
            let option3 = document.createElement("option");
            option3.setAttribute("value", "claw-wings");
            option3.innerHTML = "Claw-wings";

            typearmsselect.appendChild(option1);
            typearmsselect.appendChild(option2);
            typearmsselect.appendChild(option3);

            fieldset3.appendChild(typearmsselect);

            form.appendChild(typearmslabel);
            form.appendChild(fieldset3);

            let fieldset4 = document.createElement("fieldset");
            let legslabel = document.createElement("label");
            legslabel.innerHTML = "Legs: 2";

            let legsinput = document.createElement("input");
            legsinput.setAttribute("id", "legs");
            legsinput.setAttribute("value", "2");
            legsinput.setAttribute("class", "hidden");

            fieldset4.appendChild(legslabel);
            fieldset4.appendChild(legsinput);
            form.appendChild(fieldset4);

            let fieldset5 = document.createElement("fieldset");
            let furtypelabel = document.createElement("label");
            furtypelabel.innerHTML = "Fur type:";
            let typefurselect = document.createElement("select");
            typefurselect.setAttribute("id", "firefurtype");
            let option11 = document.createElement("option");
            option11.setAttribute("value", "scales");
            option11.innerHTML = "Scales";
            let option22 = document.createElement("option");
            option22.setAttribute("value", "feathers");
            option22.innerHTML = "Feathers";

            typefurselect.appendChild(option11);
            typefurselect.appendChild(option22);

            fieldset5.appendChild(furtypelabel);
            fieldset5.appendChild(typefurselect);
            form.appendChild(fieldset5);

            let fieldset6 = document.createElement("fieldset");
            let flylabel = document.createElement("label");
            flylabel.innerHTML = "Can fly: no";
            let fly = document.createElement("input");
            fly.setAttribute("id", "fly");
            fly.setAttribute("value", "false");
            fly.setAttribute("class", "hidden");

            fieldset6.appendChild(flylabel);
            fieldset6.appendChild(fly);

            form.appendChild(fieldset6);

            let fieldset7 = document.createElement("fieldset");
            let swimlabel = document.createElement("label");
            swimlabel.innerHTML = "Can swim: no";
            let swim = document.createElement("input");
            swim.setAttribute("id", "swim");
            swim.setAttribute("value", "false");
            swim.setAttribute("class", "hidden");

            fieldset6.appendChild(swimlabel);
            fieldset6.appendChild(swim);

            form.appendChild(fieldset7);

            let fieldset8 = document.createElement("fieldset");
            let colourlabel = document.createElement("label");
            colourlabel.innerHTML = "Colour:"

            let colourselect = document.createElement("select");
            colourselect.setAttribute("id", "color");
            let option111 = document.createElement("option");
            option111.setAttribute("value", "red");
            option111.innerHTML = "Red";
            let option222 = document.createElement("option");
            option222.setAttribute("value", "orange");
            option222.innerHTML = "Orange";
            let option333 = document.createElement("option");
            option333.setAttribute("value", "brown");
            option333.innerHTML = "Brown";

            colourselect.appendChild(option111);
            colourselect.appendChild(option222);
            colourselect.appendChild(option333);

            fieldset8.appendChild(colourselect);

            form.appendChild(colourlabel);
            form.appendChild(fieldset8);

            let resetbutton = document.createElement("input");
            resetbutton.setAttribute("type", "reset");
            resetbutton.setAttribute("class", "nes-btn is-error");
            resetbutton.setAttribute("value", "Cancel");

            let submit = document.createElement("input");
            submit.setAttribute("type", "submit");
            submit.setAttribute("class", "nes-btn is-success");
            submit.setAttribute("value", "Submit");

            form.appendChild(resetbutton);
            form.appendChild(submit);
          }
    });

    this.radio_fire.addEventListener("click", this.updateForm(this.controller));
  }

  // setEvents() {
  //   //events
  //   this.radio_fire.addEventListener("click", function() {
  //     if (this.checked) {
  //       let firetemp = document.getElementById("fire_template");
  //       firetemp.style.display = "block";
  //       firetemp.childNodes[1].setAttribute("id", "monster_form");
  //       document.getElementById("water_template").style.display = "none";
  //       document
  //         .getElementById("water_template")
  //         .childNodes[1].removeAttribute("id");
  //       document.getElementById("earth_template").style.display = "none";
  //       document
  //         .getElementById("earth_template")
  //         .childNodes[1].removeAttribute("id");
  //       document.getElementById("wind_template").style.display = "none";
  //       document
  //         .getElementById("wind_template")
  //         .childNodes[1].removeAttribute("id");
  //     }
  //   });

  //   this.radio_fire.addEventListener("click", this.updateForm(this.controller));

  //   this.radio_water.addEventListener("click", function() {
  //     let watertemp = document.getElementById("water_template");
  //     watertemp.style.display = "block";
  //     watertemp.childNodes[1].setAttribute("id", "monster_form");
  //     document.getElementById("fire_template").style.display = "none";
  //     document
  //       .getElementById("fire_template")
  //       .childNodes[1].removeAttribute("id");
  //     document.getElementById("earth_template").style.display = "none";
  //     document
  //       .getElementById("earth_template")
  //       .childNodes[1].removeAttribute("id");
  //     document.getElementById("wind_template").style.display = "none";
  //     document
  //       .getElementById("wind_template")
  //       .childNodes[1].removeAttribute("id");
  //   });

  //   this.radio_water.addEventListener("click", this.updateForm(this.controller));

  //   this.radio_earth.addEventListener("click", function() {
  //     let earthtemp = document.getElementById("earth_template");
  //     earthtemp.style.display = "block";
  //     earthtemp.childNodes[1].setAttribute("id", "monster_form");
  //     document.getElementById("fire_template").style.display = "none";
  //     document
  //       .getElementById("fire_template")
  //       .childNodes[1].removeAttribute("id");
  //     document.getElementById("water_template").style.display = "none";
  //     document
  //       .getElementById("water_template")
  //       .childNodes[1].removeAttribute("id");
  //     document.getElementById("wind_template").style.display = "none";
  //     document
  //       .getElementById("wind_template")
  //       .childNodes[1].removeAttribute("id");
  //   });

  //   this.radio_earth.addEventListener("click", this.updateForm(this.controller));

  //   this.radio_wind.addEventListener("click", function() {
  //     let windtemp = document.getElementById("wind_template");
  //     windtemp.style.display = "block";
  //     windtemp.childNodes[1].setAttribute("id", "monster_form");
  //     document.getElementById("fire_template").style.display = "none";
  //     document
  //       .getElementById("fire_template")
  //       .childNodes[1].removeAttribute("id");
  //     document.getElementById("water_template").style.display = "none";
  //     document
  //       .getElementById("water_template")
  //       .childNodes[1].removeAttribute("id");
  //     document.getElementById("earth_template").style.display = "none";
  //     document
  //       .getElementById("earth_template")
  //       .childNodes[1].removeAttribute("id");
  //   });

  //   this.radio_wind.addEventListener("click", this.updateForm(this.controller));
  // }
}

export class CreateMonsterView {

  constructor(controller) {
    this.controller = controller;

    this.template = document.getElementById("create_monster");

    this.radio_fire = document.getElementById("element_fire");
    this.radio_water = document.getElementById("element_water");
    this.radio_earth = document.getElementById("element_earth");
    this.radio_wind = document.getElementById("element_wind");
    this.remove = document.getElementById("remove");

    this.setElementEvents(controller);
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
      let arms = document.getElementById("arms").value;
      let typearms = document.getElementById("type_arms").value;
      let legs = document.getElementById("legs").value;
      let eyes = document.getElementById("eyes").value;
      let furtype = document.getElementById("furtype").value;
      let fly = document.getElementById("fly").value;
      let swim = document.getElementById("swim").value;
      let colour = document.getElementById("colour").value;
      
      controller.addMonster(name, element, arms, typearms, legs, eyes, furtype, fly, swim, colour, null, null, null);

    });
  }

  clearForm() {
    let form = document.getElementById("monster_form");
    while (form.hasChildNodes()) {
      form.removeChild(form.firstChild);
    }
  }

  setElementEvents(controller) {
    let ownclass = this;
    this.radio_fire.addEventListener("click", function() {
          if (this.checked) {
            ownclass.clearForm();
            ownclass.generalFrom();

            let element = document.getElementById("element");
            element.setAttribute("value", "fire");

            let arms = document.getElementById("arms");

            let amountarms = controller.getArms("fire");

            amountarms.forEach(element => {
              let option = document.createElement("option");
              option.setAttribute("value", `${element}`);
              option.innerHTML = element;
              arms.appendChild(option);
            });
            

            let typearmsselect = document.getElementById("type_arms");

            let armtypes = controller.getTypeArms("fire");

            armtypes.forEach(element => {
              let option = document.createElement("option");
              option.setAttribute("value", `${element}`);
              option.innerHTML = element;
              typearmsselect.appendChild(option);
            });

            let legslabel = document.getElementById("legslabel");
            legslabel.innerHTML = "Legs: " + controller.getLegs("fire");

            let legsinput = document.getElementById("legs");
            legsinput.setAttribute("value", controller.getLegs("fire"));

            let eyesselect = document.getElementById("eyes");

            let eyes = controller.getEyes("fire");

            eyes.forEach(element => {
              let option = document.createElement("option");
              option.setAttribute("value", `${element}`);
              option.innerHTML = element;
              eyesselect.appendChild(option);
            });

            let furtypeselect = document.getElementById("furtype");

            let furtypes = controller.getFurType("fire");

            furtypes.forEach(element => {
              let option = document.createElement("option");
              option.setAttribute("value", `${element}`);
              option.innerHTML = element;
              furtypeselect.appendChild(option);
            });

            let flylabel = document.getElementById("flylabel");
            let fly = document.getElementById("fly");

            flylabel.innerHTML = "Can fly: " + controller.getFly("fire");
            fly.setAttribute("value", controller.getFly("fire"));

            let swimlabel = document.getElementById("swimlabel");
            let swim = document.getElementById("swim");

            swimlabel.innerHTML = "Can swim: " + controller.getSwim("fire");
            swim.setAttribute("value", controller.getSwim("fire"));

            let colourselect = document.getElementById("colour");

            let colours = controller.getColor("fire");

            colours.forEach(element => {
              let option = document.createElement("option");
              option.setAttribute("value", `${element}`);
              option.innerHTML = element;
              colourselect.appendChild(option);
            });
            
          }
    });

    this.radio_fire.addEventListener("click", this.updateForm(this.controller));

    this.radio_water.addEventListener("click", function() {
      if (this.checked) {
        let form = document.getElementById("monster_form");
        ownclass.clearForm();
        ownclass.generalFrom();

        let element = document.getElementById("element");
        element.setAttribute("value", "fire");

        let arms = document.getElementById("arms");
        // for loop with arms
        
        // for(let i = 1; i < 7; i++) {
        //   let option = document.createElement("option");
        //   option.setAttribute("value", `${i}`);
        //   option.innerHTML = i;
        //   arms.appendChild(option);
        // }

        let typearmsselect = document.getElementById("type_arms");

        // let option1 = document.createElement("option");
        // option1.setAttribute("value", "tentacles");
        // option1.innerHTML = "Tentacles";
        // let option2 = document.createElement("option");
        // option2.setAttribute("value", "claws");
        // option2.innerHTML = "Claws";
        // let option3 = document.createElement("option");
        // option3.setAttribute("value", "claw-wings");
        // option3.innerHTML = "Claw-wings";

        // typearmsselect.appendChild(option1);
        // typearmsselect.appendChild(option2);
        // typearmsselect.appendChild(option3);

        let legsinput = document.getElementById("legs");
        // legsinput.setAttribute("value", "2");

        let eyesselect = document.getElementById("eyes");


        // for(let i = 1; i < 5; i++) {
        //   let option = document.createElement("option");
        //   option.setAttribute("value", `${i}`);
        //   option.innerHTML = i;
        //   eyesselect.appendChild(option);
        // }

        let furtypeselect = document.getElementById("furtype");

        // let option11 = document.createElement("option");
        // option11.setAttribute("value", "scales");
        // option11.innerHTML = "Scales";
        // let option22 = document.createElement("option");
        // option22.setAttribute("value", "feathers");
        // option22.innerHTML = "Feathers";

        // typefurselect.appendChild(option11);
        // typefurselect.appendChild(option22);

        let fly = document.getElementById("fly");

        // flylabel.innerHTML = "Can fly: no";
        // let fly = document.createElement("input");
        // fly.setAttribute("value", "false");


        let swim = document.getElementById("swim");

        // swimlabel.innerHTML = "Can swim: no";
        // let swim = document.createElement("input");
        // swim.setAttribute("value", "false");


        let colourselect = document.getElementById("colour");

        // let option111 = document.createElement("option");
        // option111.setAttribute("value", "red");
        // option111.innerHTML = "Red";
        // let option222 = document.createElement("option");
        // option222.setAttribute("value", "orange");
        // option222.innerHTML = "Orange";
        // let option333 = document.createElement("option");
        // option333.setAttribute("value", "brown");
        // option333.innerHTML = "Brown";

        // colourselect.appendChild(option111);
        // colourselect.appendChild(option222);
        // colourselect.appendChild(option333);
      }
});

this.radio_water.addEventListener("click", this.updateForm(this.controller));


this.radio_earth.addEventListener("click", function() {
  if (this.checked) {
    let form = document.getElementById("monster_form");
    ownclass.clearForm();
    ownclass.generalFrom();

    let element = document.getElementById("element");
    element.setAttribute("value", "fire");

    let arms = document.getElementById("arms");
    // for loop with arms
    
    // for(let i = 1; i < 7; i++) {
    //   let option = document.createElement("option");
    //   option.setAttribute("value", `${i}`);
    //   option.innerHTML = i;
    //   arms.appendChild(option);
    // }

    let typearmsselect = document.getElementById("type_arms");

    // let option1 = document.createElement("option");
    // option1.setAttribute("value", "tentacles");
    // option1.innerHTML = "Tentacles";
    // let option2 = document.createElement("option");
    // option2.setAttribute("value", "claws");
    // option2.innerHTML = "Claws";
    // let option3 = document.createElement("option");
    // option3.setAttribute("value", "claw-wings");
    // option3.innerHTML = "Claw-wings";

    // typearmsselect.appendChild(option1);
    // typearmsselect.appendChild(option2);
    // typearmsselect.appendChild(option3);

    let legsinput = document.getElementById("legs");
    // legsinput.setAttribute("value", "2");

    let eyesselect = document.getElementById("eyes");


    // for(let i = 1; i < 5; i++) {
    //   let option = document.createElement("option");
    //   option.setAttribute("value", `${i}`);
    //   option.innerHTML = i;
    //   eyesselect.appendChild(option);
    // }

    let furtypeselect = document.getElementById("furtype");

    // let option11 = document.createElement("option");
    // option11.setAttribute("value", "scales");
    // option11.innerHTML = "Scales";
    // let option22 = document.createElement("option");
    // option22.setAttribute("value", "feathers");
    // option22.innerHTML = "Feathers";

    // typefurselect.appendChild(option11);
    // typefurselect.appendChild(option22);

    let fly = document.getElementById("fly");

    // flylabel.innerHTML = "Can fly: no";
    // let fly = document.createElement("input");
    // fly.setAttribute("value", "false");


    let swim = document.getElementById("swim");

    // swimlabel.innerHTML = "Can swim: no";
    // let swim = document.createElement("input");
    // swim.setAttribute("value", "false");


    let colourselect = document.getElementById("colour");

    // let option111 = document.createElement("option");
    // option111.setAttribute("value", "red");
    // option111.innerHTML = "Red";
    // let option222 = document.createElement("option");
    // option222.setAttribute("value", "orange");
    // option222.innerHTML = "Orange";
    // let option333 = document.createElement("option");
    // option333.setAttribute("value", "brown");
    // option333.innerHTML = "Brown";

    // colourselect.appendChild(option111);
    // colourselect.appendChild(option222);
    // colourselect.appendChild(option333);
  }
});

this.radio_earth.addEventListener("click", this.updateForm(this.controller));


this.radio_wind.addEventListener("click", function() {
  if (this.checked) {
    let form = document.getElementById("monster_form");
    ownclass.clearForm();
    ownclass.generalFrom();

    let element = document.getElementById("element");
    element.setAttribute("value", "fire");

    let arms = document.getElementById("arms");
    // for loop with arms
    
    // for(let i = 1; i < 7; i++) {
    //   let option = document.createElement("option");
    //   option.setAttribute("value", `${i}`);
    //   option.innerHTML = i;
    //   arms.appendChild(option);
    // }

    let typearmsselect = document.getElementById("type_arms");

    // let option1 = document.createElement("option");
    // option1.setAttribute("value", "tentacles");
    // option1.innerHTML = "Tentacles";
    // let option2 = document.createElement("option");
    // option2.setAttribute("value", "claws");
    // option2.innerHTML = "Claws";
    // let option3 = document.createElement("option");
    // option3.setAttribute("value", "claw-wings");
    // option3.innerHTML = "Claw-wings";

    // typearmsselect.appendChild(option1);
    // typearmsselect.appendChild(option2);
    // typearmsselect.appendChild(option3);

    let legsinput = document.getElementById("legs");
    // legsinput.setAttribute("value", "2");

    let eyesselect = document.getElementById("eyes");


    // for(let i = 1; i < 5; i++) {
    //   let option = document.createElement("option");
    //   option.setAttribute("value", `${i}`);
    //   option.innerHTML = i;
    //   eyesselect.appendChild(option);
    // }

    let furtypeselect = document.getElementById("furtype");

    // let option11 = document.createElement("option");
    // option11.setAttribute("value", "scales");
    // option11.innerHTML = "Scales";
    // let option22 = document.createElement("option");
    // option22.setAttribute("value", "feathers");
    // option22.innerHTML = "Feathers";

    // typefurselect.appendChild(option11);
    // typefurselect.appendChild(option22);

    let fly = document.getElementById("fly");

    // flylabel.innerHTML = "Can fly: no";
    // let fly = document.createElement("input");
    // fly.setAttribute("value", "false");


    let swim = document.getElementById("swim");

    // swimlabel.innerHTML = "Can swim: no";
    // let swim = document.createElement("input");
    // swim.setAttribute("value", "false");


    let colourselect = document.getElementById("colour");

    // let option111 = document.createElement("option");
    // option111.setAttribute("value", "red");
    // option111.innerHTML = "Red";
    // let option222 = document.createElement("option");
    // option222.setAttribute("value", "orange");
    // option222.innerHTML = "Orange";
    // let option333 = document.createElement("option");
    // option333.setAttribute("value", "brown");
    // option333.innerHTML = "Brown";

    // colourselect.appendChild(option111);
    // colourselect.appendChild(option222);
    // colourselect.appendChild(option333);
  }
});

this.radio_wind.addEventListener("click", this.updateForm(this.controller));

  }

  generalFrom(){
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
            // Value will be set by element
            element.hidden = true;

            form.appendChild(element);

            let fieldset2 = document.createElement("fieldset");
            let armslabel = document.createElement("label");
            armslabel.innerHTML = "Arms:";
            let select = document.createElement("select");
            select.setAttribute("id", "arms");
            // Amount of options swil be set by element

            fieldset2.appendChild(armslabel);
            fieldset2.appendChild(select);

            form.appendChild(fieldset2);

            let fieldset3 = document.createElement("fieldset");
            let typearmslabel = document.createElement("label");
            typearmslabel.innerHTML = "Type arms:"

            let typearmsselect = document.createElement("select");
            typearmsselect.setAttribute("id", "type_arms");

            fieldset3.appendChild(typearmsselect);

            form.appendChild(typearmslabel);
            form.appendChild(fieldset3);

            let fieldset4 = document.createElement("fieldset");
            let legslabel = document.createElement("label");
            legslabel.setAttribute("id", "legslabel");
            legslabel.innerHTML = "Legs: ";

            let legsinput = document.createElement("input");
            legsinput.setAttribute("id", "legs");
            legsinput.setAttribute("class", "hidden");

            fieldset4.appendChild(legslabel);
            fieldset4.appendChild(legsinput);
            form.appendChild(fieldset4);

            let fieldset9 = document.createElement("fieldset");
            let eyeslabel = document.createElement("label");
            eyeslabel.innerHTML = "Eyes:";
            let select2 = document.createElement("select");
            select2.setAttribute("id", "eyes");
            // Amount of eyes set by element

            fieldset9.appendChild(eyeslabel);
            fieldset9.appendChild(select2);

            form.append(fieldset9);

            let fieldset5 = document.createElement("fieldset");
            let furtypelabel = document.createElement("label");
            furtypelabel.innerHTML = "Fur type:";
            let typefurselect = document.createElement("select");
            typefurselect.setAttribute("id", "furtype");

            fieldset5.appendChild(furtypelabel);
            fieldset5.appendChild(typefurselect);
            form.appendChild(fieldset5);

            let fieldset6 = document.createElement("fieldset");
            let flylabel = document.createElement("label");
            flylabel.setAttribute("id", "flylabel")
            flylabel.innerHTML = "Can fly: ";
            let fly = document.createElement("input");
            fly.setAttribute("id", "fly");
            fly.setAttribute("value", "");
            fly.setAttribute("class", "hidden");

            fieldset6.appendChild(flylabel);
            fieldset6.appendChild(fly);

            form.appendChild(fieldset6);

            let fieldset7 = document.createElement("fieldset");
            let swimlabel = document.createElement("label");
            swimlabel.setAttribute("id", "swimlabel")
            swimlabel.innerHTML = "Can swim: ";
            let swim = document.createElement("input");
            swim.setAttribute("id", "swim");
            swim.setAttribute("value", "");
            swim.setAttribute("class", "hidden");

            fieldset6.appendChild(swimlabel);
            fieldset6.appendChild(swim);

            form.appendChild(fieldset7);

            let fieldset8 = document.createElement("fieldset");
            let colourlabel = document.createElement("label");
            colourlabel.innerHTML = "Colour:"

            let colourselect = document.createElement("select");
            colourselect.setAttribute("id", "colour");

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
            this.updateForm(this.controller);
          }
}

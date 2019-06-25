export class CreateMonsterView {

    // template;
    // monsterform;
    // radio_fire;
    // radio_water;
    // radio_earth;
    // radio_wind;
    // switch_int;


    constructor(controller) {
        this.template = document.getElementById('create_monster');
        this.monsterform = document.getElementById('monster_form');

        this.radio_fire = document.getElementById('element_fire');
        this.radio_water = document.getElementById('element_water');
        this.radio_earth = document.getElementById('element_earth');
        this.radio_wind = document.getElementById('element_wind');
        this.windfurselect = document.getElementById('windfurtype');
        this.firefurselect = document.getElementById('firefurtype');
        this.firearmsselect = document.getElementById('firearms');
        this.waterarmsselect = document.getElementById('waterarms');

        //events
        this.radio_fire.addEventListener('click', function () {
            document.getElementById("fire_template").style.display =
                this.checked ? "block" : "none";
            document.getElementById("water_template").style.display = 'none';
            document.getElementById("earth_template").style.display = 'none';
            document.getElementById("wind_template").style.display = 'none';
        });

        this.radio_water.addEventListener('click', function () {
            document.getElementById("water_template").style.display =
                this.checked ? "block" : "none";
            document.getElementById("fire_template").style.display = 'none';
            document.getElementById("earth_template").style.display = 'none';
            document.getElementById("wind_template").style.display = 'none';
        });

        this.radio_earth.addEventListener('click', function () {
            document.getElementById("earth_template").style.display =
                this.checked ? "block" : "none";
            document.getElementById("fire_template").style.display = 'none';
            document.getElementById("water_template").style.display = 'none';
            document.getElementById("wind_template").style.display = 'none';
        });

        this.radio_wind.addEventListener('click', function () {
            document.getElementById("wind_template").style.display =
                this.checked ? "block" : "none";
            document.getElementById("fire_template").style.display = 'none';
            document.getElementById("water_template").style.display = 'none';
            document.getElementById("earth_template").style.display = 'none';
        });


        this.windfurselect.addEventListener('change', function () {
            var wind_fur = document.getElementById("windfurtype").value;
            if (wind_fur == "Feathers") {
                document.getElementById("windSwim").innerHTML = "no";
                document.getElementById("windSwim").value = false;
            }
            else {
                document.getElementById("windSwim").innerHTML = "yes";
                document.getElementById("windSwim").value = true;
            }
        });

        this.firefurselect.addEventListener('change', function () {
            var fire_fur = document.getElementById("firefurtype").value;
            if (fire_fur == "Feathers") {
                document.getElementById("fireFly").innerHTML = "yes";
                document.getElementById("fireFly").value = true;

            }
            else {
                document.getElementById("fireFly").innerHTML = "no";
                document.getElementById("fireFly").value = true;
            }
        });

        this.waterarmsselect.addEventListener('change', function () {
            var water_int = document.getElementById("waterarms").value;
            if (water_int <= 4) {
                document.getElementById("water_legs").innerHTML = "";
                document.getElementById("options").style.display = 'block';
            }
            else {
                document.getElementById("water_legs").innerHTML = 0;
                document.getElementById("options").style.display = 'none';
                document.getElementById("options").value = 0;
            }
        });

        this.firearmsselect.addEventListener('change', function () {
            var fire_int = document.getElementById("firearms").value;
            if (fire_int <= 2) {
                document.getElementById("fire_legs").innerHTML = 2;
                document.getElementById("fire_legs").value = 2;
            }
            else {
                document.getElementById("fire_legs").innerHTML = 0;
                document.getElementById("fire_legs").value = 0;
            }
        });

        this.monsterform.addEventListener('submit', function (e) {
            e.preventDefault();
            controller.addMonster({
                name: this.name.value,
                element: this.element.value,
                arms: this.arms.value,
                type_arms: this.type_arms.value,
                legs: this.legs.value,
                eyes: this.eyes.value,
                furtype: this.furtype.value,
                fly: this.fly.value,
                swim: this.swim.value,
                color: this.color.value
            })
        })
    }
}
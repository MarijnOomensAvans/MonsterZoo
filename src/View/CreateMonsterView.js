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
        this.fire_arms = document.getElementById('fire_arms');

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
class CreateMonsterView
{
    template;
    checkbox_fire;
    checkbox_water;
    checkbox_earth;
    checkbox_wind;
    monsterform;

    constructor(controller){
        this.template = document.getElementById('create_monster');
        this.monsterform = document.getElementById('monster_form');
        this.checkbox_fire = document.getElementById('element_fire');
        this.checkbox_water = document.getElementById('element_water');
        this.checkbox_earth = document.getElementById('element_earth');
        this.checkbox_wind = document.getElementById('element_wind');
        
        //events
        this.checkbox_fire.addEventListener('click', function(){
            document.getElementById("fire_template").style.display = 
                this.checked ? "block" : "none";
        });
        
        this.checkbox_water.addEventListener('click', function(){
            document.getElementById("water_template").style.display = 
                this.checked ? "block" : "none";
        });
        this.checkbox_earth.addEventListener('click', function(){
            document.getElementById("earth_template").style.display = 
                this.checked ? "block" : "none";
        });
        this.checkbox_wind.addEventListener('click', function(){
            document.getElementById("wind_template").style.display = 
                this.checked ? "block" : "none";
        });

        this.monsterform.addEventListener('submit', function(e){
            e.preventDefault();
            controller.addMonster({
                element: this.element.value,
                type: this.type.value,
                name: this.name.value,
                arms: this.arms.value
                
            })
        })
    }
}


let create = new CreateMonsterView();
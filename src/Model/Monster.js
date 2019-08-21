export class Monster{
    // MonsterData consists of element, name, arms, type_arms, legs, eyes, skintype, ability to fly, ability to swim, colour ,map, x coordinate, y coordinate
    constructor(name, element, arms, typearms, legs, eyes, furtype, fly, swim, colour, map, x, y){
        this.name = name;
        this.element = element;
        this.arms = arms;
        this.typearms = typearms;
        this.legs = legs;
        this.eyes = eyes;
        this.furtype = furtype;
        this.fly = fly;
        this.swim = swim;
        this.colour = colour;
        this.map = map;
        this.x = x;
        this.y = y;
    }
}

class fireMonster extends Monster{
    constructor(){
        this.arms = [1,2,3,4,5,6];
        this.typearms = [Tentacles,Claws,Claw-wings];
        this.legs = 2;
        this.eyes = [1,2,3,4];
        this.furtype = [Scales,Feathers];
        this.fly = "yes";
        this.swim = "no";
        this.color = ["Red","Orange","Brown"];
    }
}

class waterfireMonster extends Monster{
    constructor(){
        this.arms = [1,2,3,4,5,6,7,8];
        this.typearms = [Tentacles,Fins];
        this.legs = [1,2,3,4];
        this.eyes = [1,2,3,4,5,6,7,8];
        this.furtype = [Scales,Slime];
        this.fly = "no";
        this.swim = "yes";
        this.color = ["Blue","Red","Green"];
    }
}

class earthMonster extends Monster{
    constructor(){
        this.arms = [1,2,3,4,5,6,7,8];
        this.typearms = [Tentacles,Fins];
        this.legs = [1,2,3,4];
        this.eyes = [1,2,3,4,5,6,7,8];
        this.furtype = [Scales,Slime];
        this.fly = "no";
        this.swim = "yes";
        this.color = ["Blue","Red","Green"];
    }
}

class windMonster extends Monster{
    constructor(){
        this.arms = [1,2,3,4,5,6,7,8];
        this.typearms = [Tentacles,Fins];
        this.legs = [1,2,3,4];
        this.eyes = [1,2,3,4,5,6,7,8];
        this.furtype = [Scales,Slime];
        this.fly = "no";
        this.swim = "yes";
        this.color = ["Blue","Red","Green"];
    }
}
export class Monster{
    // MonsterData exists of element, name, arms, type_arms, legs, eyes, skintype, ability to fly, ability to swim,color ,map, coördinaten
    constructor(element, name, arms, type_arms, legs, eyes, skintype, fly, swim, colour, map, x, y){
        this.element = element;
        this.name = name;
        this.arms = arms;
        this.type_arms = type_arms;
        this.legs = legs;
        this.eyes = eyes;
        this.skintype = skintype;
        this.fly = fly;
        this.swim = swim;
        this.map = map;
        this.colour = colour;
        this.x = x;
        this.y = y;
    }
}

// class fireMonster extends Monster{

// }
// class waterfireMonster extends Monster{
    
// }
// class earthMonster extends Monster{
    
// }
// class windMonster extends Monster{
    
// }
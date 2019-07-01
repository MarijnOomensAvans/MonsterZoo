class Monster{
    // MonsterData exists of element, name, arms, type_arms, legs, eyes, skintype, ability to fly, ability to swim,color ,map, coördinaten
    constructor(monsterdata){
        Object.assign(this, monsterdata);
    }
}

class fireMonster extends Monster{

}
class waterfireMonster extends Monster{
    
}
class earthMonster extends Monster{
    
}
class windMonster extends Monster{
    
}
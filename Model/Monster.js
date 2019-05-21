class Monster{
    // MonsterData exists of element, name, arms, type_arms, legs, eyes, skintype, ability to fly, ability to swim,color ,map, coördinaten
    constructor(MonsterData){
        Object.assign(this.MonsterData)
    }
}

class MosterService {
    getmonsters() {
        return [
            
        ]
    }
    saveMonsters(monster){
        console.log(monster);
    }
}

class MonsterCreate{
    createMonster(element,name,arms,type_arms,legs,eyes,skintype,fly,swim,color, map, xcoördinaat, ycoördinaat){
        return [
            new Monster({type: element, name: name, arms: arms, type_arms: type_arms, legs: legs, eyes: eyes, skintype: skintype, fly: fly, swim: swim, color: color, map: map, xcoördinaat: xcoördinaat, ycoördinaat: ycoördinaat})
        ]
    }
    
    
}
    

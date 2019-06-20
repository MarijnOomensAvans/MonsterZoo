class Monster{
    // MonsterData exists of element, name, arms, type_arms, legs, eyes, skintype, ability to fly, ability to swim,color ,map, coördinaten
    constructor(MonsterData){
        Object.assign(this.MonsterData)
    }
}

class MosterService {
    getmonsters() {
        return [
            new Monster({name: 'Marijn', element: 'fire', arms: 2, type_arms: 'tentacles', legs: 2, eyes: 4, furtype: 'scales', fly: 'no', swim: 'no', color: 'orange', map: 0, xcoördinaat: 1, ycoördinaat: 1}),
            new Monster({name: 'Thijs', element: 'fire',  arms: 6, type_arms: 'claw-wings', legs: 0, eyes: 3, furtype: 'feathers', fly: 'yes', swim: 'no', color: 'brown', map: 0, xcoördinaat: 2, ycoördinaat: 2})
        ]
    }
    saveMonsters(monster){
        console.log(monster);
    }
}
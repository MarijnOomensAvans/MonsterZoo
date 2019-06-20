import { Monster } from './Monster';


export class MonsterService
{
    constructor(){
        this.monsters = [
            new Monster({type: 'fire', name: 'Marijn', arms: 2, type_arms: 'tentakels', legs: 2, eyes: 4, skintype: 'schubben', fly: 'nee', swim: 'nee', color: 'oranje', map: 0, xcoördinaat: 1, ycoördinaat: 1}),
            new Monster({type: 'fire', name: 'Thijs', arms: 6, type_arms: 'klauw-vleugels', legs: 0, eyes: 3, skintype: 'veren', fly: 'ja', swim: 'nee', color: 'bruin', map: 0, xcoördinaat: 2, ycoördinaat: 2})
        ]
    }

    getMonsters()
    {
        return this.monsters;
    }

    saveMonster(monster){
       this.monsters.push(monster);
    }
}
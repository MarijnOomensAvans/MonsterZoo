import { Monster } from './Monster';


export class MonsterService
{
    constructor(){
        this.monsters = [
            new Monster("fire", "Marijn", 2, "tentacles", 2, 4, "scales", false, false, "orange", 0, 1, 1)
        ]
    }

    getMonsters()
    {
        return this.monsters;
    }

    saveMonster(monster){
       this.monsters.push(monster);
    }

    getLastMonster() {
        console.log(this.monsters[this.monsters.length -1])
        return this.monsters[this.monsters.length -1];
    }
}

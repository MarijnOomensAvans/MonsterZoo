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

    saveMonster(name, element, arms, typearms, legs, eyes, furtype, fly, swim, colour, map, x, y){
        let newMonster = new Monster(name, element, arms, typearms, legs, eyes, furtype, fly, swim, colour, map, x, y);
        this.monsters.push(newMonster);
    }

    getLastMonster() {
        return this.monsters[this.monsters.length -1];
    }
}

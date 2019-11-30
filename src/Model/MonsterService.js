import { Monster } from './Monster';
export class MonsterService
{
    constructor(){
        this.monsters = []
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
    
    getAllMonsters(grid, map) {
        let monsters = [];
        let columns = [];
        let columns3 = [];


        let columns2 = grid[map].grid;

        columns2.forEach(element => {
            for (let i = 0; i < 10; i++) {
                columns.push(element);
            }
        });

        columns.forEach(element => {
            columns3.push(element);
        });

        return monsters;
    }
    
}

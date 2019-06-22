import { MonsterService } from '../model/MonsterService'
import { CreateMonsterView } from '../view/CreateMonsterView';
import { MapView } from '../view/MapView';

export default class ZooController
{
    //el constructor
    constructor(){
        this.monsterservice = new MonsterService();
        this.createmonsterview =  new CreateMonsterView(this);
        this.mapview = new MapView();
        this.mapview.drawBoard();
    }

    addMonster(data){
        var newMonster = new Monster(data);
        this.monsterservice.saveMonster(newMonster);
    }
}
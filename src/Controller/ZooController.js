import { MonsterService } from '../model/MonsterService'
import { CreateMonsterView } from '../view/CreateMonsterView';
import { MapView } from '../view/MapView';

export default class ZooController
{
    //el constructor
    constructor(){
        this.monsterservice = new MonsterService();
        this.createmonsterview =  new CreateMonsterView(this);
        this.mapview = new MapView(this);
        this.mapview.drawBoard();
    }

    addMonster(data){
        this.monsterservice.saveLama(new Monster(data));
    }
}
import { MonsterService } from '../model/MonsterService'
import { CreateMonsterView } from '../view/CreateMonsterView';
import { MapView } from '../view/MapView';
import { WeatherController } from './WeatherController';

export default class ZooController
{
    //el constructor
    constructor(){
        this.monsterservice = new MonsterService();
        this.createmonsterview =  new CreateMonsterView(this);
        this.mapview = new MapView();

        this.weathercontroller = new WeatherController();
    }

    addMonster(data){
        let newMonster = new Monster(data);
        this.monsterservice.saveMonster(newMonster);
    }
}
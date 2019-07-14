import { MonsterService } from '../model/MonsterService'
import { CreateMonsterView } from '../view/CreateMonsterView';
import { MapView } from '../view/MapView';
import { WeatherController } from './WeatherController';
import { MapService } from '../Model/MapService';

export default class ZooController
{
    //el constructor
    constructor(){
        this.weathercontroller = new WeatherController();

        this.monsterservice = new MonsterService();
        this.createmonsterview =  new CreateMonsterView(this);
        this.mapservice = new MapService();

        this.mapview = new MapView(this, this.weathercontroller);
    }

    addMonster(data){
        let newMonster = new Monster(data);
        this.monsterservice.saveMonster(newMonster);
    }

    loadGrid(mapview) {
        this.mapservice.loadGrid().then(function(grid) {
            mapview.paintGrid(grid);
        });
    }
}
import { MonsterService } from '../model/MonsterService'
import { CreateMonsterView } from '../view/CreateMonsterView';
import { MapView } from '../view/MapView';
import { WeatherDataService } from '../Model/WeatherDataService';

export default class ZooController
{
    //el constructor
    constructor(){
        this.monsterservice = new MonsterService();
        this.createmonsterview =  new CreateMonsterView(this);
        this.mapview = new MapView();
        this.mapview.loadGrid(0);

        this.weather = new WeatherDataService();
        console.log(this.weather.getCurrentWeather('Amsterdam'));
    }

    addMonster(data){
        var newMonster = new Monster(data);
        this.monsterservice.saveMonster(newMonster);
    }
}
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

    addMonsterToGrid(grid, terrain, x, y) {
        this.mapservice.addMonsterToGrid(grid, terrain, this.getLastMonster(), x, y);
    }

    addExistingMonsterToGrid(grid, terrain, ox, oy, x, y) {
        this.mapservice.addMonsterToGrid(grid, terrain, this.getMonsterByPosition(grid, terrain, ox, oy), x, y);
    }

    deleteMonsterFromGrid(grid, terrain, x, y) {
        this.mapservice.deleteMonsterFromGrid(grid, terrain, x, y);
    }

    addMonster(name, element, arms, typearms, legs, eyes, furtype, fly, swim, colour, map, x, y){
        this.monsterservice.saveMonster(name, element, arms, typearms, legs, eyes, furtype, fly, swim, colour, map, x, y);
    }

    loadGrid(mapview) {
        this.mapservice.loadGrid().then(function(grid) {
            mapview.paintGrid(grid);
        });
    }

    getLastMonster() {
        return this.monsterservice.getLastMonster();
    }

    getMonsterByPosition(grid, map, x, y) {
        return this.mapservice.getMonsterByPosition(grid, map, x, y);
    }

    getArms(value){

    }

    getTypeArms(value){
        
    }

    getLegs(value){
        
    }

    getEyes(value){
        
    }

    getFurType(value){
        
    }

    getFly(value){
        
    }

    getSwim(value){
        
    }

    getColor(value){
        
    }
}
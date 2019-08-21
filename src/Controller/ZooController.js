import { MonsterService } from '../model/MonsterService'
import { CreateMonsterView } from '../view/CreateMonsterView';
import { MapView } from '../view/MapView';
import { WeatherController } from './WeatherController';
import { MapService } from '../Model/MapService';
import { FireMonster } from '../Model/Monster';
import { WaterMonster } from '../Model/Monster';
import { EarthMonster } from '../Model/Monster';
import { WindMonster } from '../Model/Monster';

export default class ZooController
{
    //el constructor
    constructor(){
        this.weathercontroller = new WeatherController();

        this.monsterservice = new MonsterService();
        this.createmonsterview =  new CreateMonsterView(this);
        this.mapservice = new MapService();
        this.fireMonster = new FireMonster();
        this.waterMonster = new WaterMonster();
        this.earthMonster =  new EarthMonster();
        this.windMonster = new WindMonster();

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
        let arms;
        switch(value) {
            case fire:
                arms = this.fireMonster.arms;
                break;
            case water:
                arms = this.waterMonster.arms;
                break;
            case wind:
                arms = this.windMonster.arms;
                break;
            case earth:
                arms = this.earthMonster.arms
                break;
            default:
                arms = 0;
          }
        return arms;
    }

    getTypeArms(value){
        let typeArms;
        switch(value) {
            case fire:
                typeArms = this.fireMonster.typearms;
                break;
            case water:
                typeArms = this.waterMonster.typearms;
                break;
            case wind:
                typeArms = this.windMonster.typearms;
                break;
            case earth:
                typeArms = this.earthMonster.typearms;
                break;
            default:
                typeArms = 0;
          }
        return typeArms;        
    }

    getLegs(value){
        let legs;
        switch(value) {
            case fire:
                legs = this.fireMonster.legs;
                break;
            case water:
                legs = this.waterMonster.legs;
                break;
            case wind:
                legs = this.windMonster.legs;
                break;
            case earth:
                legs = this.earthMonster.legs;
                break;
            default:
                legs = 0;
          }
        return legs;
    }

    getEyes(value){
        let eyes;
        switch(value) {
            case fire:
                eyes = this.fireMonster.eyes;
                break;
            case water:
                eyes = this.waterMonster.eyes;
                break;
            case wind:
                eyes = this.windMonster.eyes;
                break;
            case earth:
                eyes = this.earthMonster.eyes;
                break;
            default:
                eyes = 0;
          }
        return eyes;
    }

    getFurType(value){
        let furType;
        switch(value) {
            case fire:
                furType = this.fireMonster.furtype;
                break;
            case water:
                furType = this.waterMonster.furtype;
                break;
            case wind:
                furType = this.windMonster.furtype;
                break;
            case earth:
                furType = this.earthMonster.furtype;
                break;
            default:
                furType = 0;
          }
        return furType;
    }

    getFly(value){
        let fly;
        switch(value) {
            case fire:

                break;
            case water:

                break;
            case wind:

                break;
            case earth:

                break;
            default:
                fly = 0;
          }
        return fly;
    }

    getSwim(value){
        let swim;
        switch(value) {
            case fire:

                break;
            case water:

                break;
            case wind:

                break;
            case earth:

                break;
            default:
                swim = 0;
          }
        return swim;
    }

    getColor(value){
        let color;
        switch(value) {
            case fire:

                break;
            case water:

                break;
            case wind:

                break;
            case earth:

                break;
            default:
                color = 0;
          }
        return color;
    }
}
import { WeatherDataService } from "../Model/WeatherDataService";

export class WeatherController {
    constructor() {
        this.weatherdata = new WeatherDataService();
    }
}
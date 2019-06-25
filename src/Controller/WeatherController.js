import { WeatherDataService } from "../Model/WeatherDataService";
import { WeatherView } from "../View/WeatherView";

export class WeatherController {
    constructor() {
        this.weatherdata = new WeatherDataService();
        this.weatherview = new WeatherView();
    }

    updateWeather(city) {
        let temp = ths.weatherdata.getTemp(city);
        let type = this.weatherdata.getType(city);
        this.weatherview.updateWeather(temp, type);
    }
}
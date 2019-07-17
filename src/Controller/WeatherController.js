import { WeatherDataService } from "../Model/WeatherDataService";
import { WeatherView } from "../View/WeatherView";

export class WeatherController {
    constructor() {
        this.weatherdata = new WeatherDataService();
        this.weatherview = new WeatherView();
    }

    updateWeather(city) {
        let weatherview = this.weatherview;
        this.weatherdata.getCurrentWeather(city).then(function(data) {
            weatherview.updateWeather(data.main.temp, data.weather[0].main);
        });
    }
}
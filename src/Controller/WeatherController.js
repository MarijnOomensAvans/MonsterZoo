import { WeatherDataService } from "../Model/WeatherDataService";
import { WeatherView } from "../View/WeatherView";

export class WeatherController {
    constructor() {
        this.weatherdata = new WeatherDataService();
        this.weatherview = new WeatherView();
    }

    async updateWeather(city) {
        let weatherview = this.weatherview;
        let data = await this.weatherdata.getCurrentWeather(city);
        weatherview.updateWeather(data.main.temp, data.weather[0].main);
    }
}
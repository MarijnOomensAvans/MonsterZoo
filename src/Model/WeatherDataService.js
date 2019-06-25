export class WeatherDataService {

    constructor() {
        this.apikey = '6efc35c3c2611e414ea66da76b2e3f0b';
        this.units = 'metric';
    }

    async getCurrentWeather(cityName) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}&units=${this.units}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson;
        });
      }
}
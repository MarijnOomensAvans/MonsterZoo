export class WeatherView {

    constructor() {
        this.img = document.getElementById('weatherimg');
        this.temp = document.getElementById('temp');
    }

    updateWeather(temp) {
        this.temp.innerText = `${temp}° Celcius`;
    }
}
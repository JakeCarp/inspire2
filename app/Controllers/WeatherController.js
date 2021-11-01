import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//private
function _drawWeather() {
    let weather = ProxyState.weather
    let template = ``
    template += weather.Template
    document.getElementById('weather').innerHTML = template
}


export class WeatherController {
    constructor() {
        this.getWeather()
        ProxyState.on('celsius', this.getWeather)
        ProxyState.on('weather', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error('[GET WEATHER ERROR]', error.message)
        }
    }
    toggleWeather() {
        weatherService.toggleWeather()
    }
}
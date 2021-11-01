import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js"



class WeatherService {

    async getWeather() {
        const res = await sandboxApi.get('weather')
        console.log(res.data);
        let weatherData = {
            temp: res.data.main.temp,
            description: res.data.weather[0].description
        }
        let weather = new Weather(weatherData)
        ProxyState.weather = weather
    }
    toggleWeather() {
        ProxyState.celsius = !ProxyState.celsius
    }
}

export const weatherService = new WeatherService()
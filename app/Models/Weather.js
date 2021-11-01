import { ProxyState } from "../AppState.js"


export class Weather {
    constructor(data) {
        this.temp = data.temp
        this.description = data.description
    }

    get Template() {
        return `
        <div class="card bg-primary text-white">
        <button class="btn btn-secondary" onclick="app.weatherController.toggleWeather()">${ProxyState.celsius ? '°C' : '°F'}</button>
        ${this.getConvertedTemp()}
        <p>${this.description.toUpperCase()}</p>
        </div>
        `

    }

    getConvertedTemp() {
        if (!ProxyState.celsius) {
            let convertF = Math.floor((this.temp - 273.15) * 9 / 5 + 32)
            return `<p>${convertF}°F</p>`
        } else {
            let convertC = Math.floor(this.temp - 273.15)
            return `<p>${convertC}°C</p>`
        }
    }
}


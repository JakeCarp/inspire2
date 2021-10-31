import { ProxyState } from "../AppState.js"
import { Clock } from "../Models/Clock.js"


class ClockService {
    setTime() {
        let clockVersion = ProxyState.clock12
        let d = new Date()
        let hours = d.getHours()
        let minutes = d.getMinutes()
        let year = d.getFullYear()
        let day = d.getDay()
        let date = d.getDate()
        let month = d.getMonth()
        if (clockVersion) {
            hours <= 12 ? '' : hours -= 12
        }
        ProxyState.clock = new Clock({
            hours: hours,
            minutes: minutes,
            year: year,
            day: day,
            date: date,
            month: month
        })
        ProxyState.clock = ProxyState.clock
    }
}

export const clockService = new ClockService()
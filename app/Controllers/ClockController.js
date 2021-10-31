import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";



//private
function _drawClock() {
    let template = ''
    let clock = ProxyState.clock
    template += clock.Template
    document.getElementById('clock').innerHTML = template
    if (!ProxyState.clock12) {
        document.getElementById('toggle-button').innerText = "12"
    } else {
        document.getElementById('toggle-button').innerText = "24"
    }
}
let _clockInterval




export class ClockController {
    constructor() {
        this.setTime()
        _drawClock()
        this.setClockInterval()
        ProxyState.on('clock12', this.setTime)
    }
    setClockInterval() {
        _clockInterval = setInterval(() => { _drawClock(), this.setTime() }, 1000)
    }

    setTime() {
        clockService.setTime()
    }
    toggleClock() {
        clockService.toggleClock()
    }
}
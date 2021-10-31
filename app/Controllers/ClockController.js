import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";



//private
function _drawClock() {
    let template = ''
    let clock = ProxyState.clock
    template += clock.Template
    document.getElementById('clock').innerHTML = template
}
// let _clockInterval
// function _setClockInterval() {
//     _clockInterval = setInterval('this.setTime', 1000)
// }



export class ClockController {
    constructor() {
        this.setTime()
        // _setClockInterval()
        ProxyState.on('clock', _drawClock)
        ProxyState.on('clock12', this.setTime)
    }

    setTime() {
        clockService.setTime()
    }
}
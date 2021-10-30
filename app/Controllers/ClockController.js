import { ProxyState } from "../AppState.js";



//private
function _drawClock() {
    let template = ''
    let clock = ProxyState.clock
    let clock12 = ProxyState.clock12
    if (clock12) {
        template += clock.Template
    }
}



export class ClockController {
    constructor() {


    }
}
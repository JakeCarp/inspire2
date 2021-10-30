import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

//private
//get quote from proxy state and render to the screen
function _drawQuote() {
    let quote = ProxyState.quote
    let template = quote.Template
    document.getElementById('quote').innerHTML = template
}

export class QuotesController {
    constructor() {
        this.getQuote()
        ProxyState.on('quote', _drawQuote)
    }

    //get a new quote and set it to the app state
    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error('[GET QUOTE ERROR]', error.message)
        }
    }
}
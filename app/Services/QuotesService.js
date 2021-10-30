import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuotesService {

    //grab a quote from the sandbox api and set it to app state
    async getQuote() {
        const res = await sandboxApi.get('quotes')
        console.log(res.data);
        ProxyState.quote = new Quote(res.data)
    }
}


export const quotesService = new QuotesService
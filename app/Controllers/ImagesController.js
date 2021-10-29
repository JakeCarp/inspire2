import { imagesService } from "../Services/ImagesService.js";
import { ProxyState } from "../AppState.js"

//private
function _setBgImage() {
    let image = ProxyState.bgImg
    let body = document.getElementById('body')
    body.setAttribute("style", `background-image : url(${image.imgUrl})`)
}

export class ImagesController {
    constructor() {
        this.getNewBgImage()
        ProxyState.on('bgImg', _setBgImage)
    }

    async getNewBgImage() {
        try {
            await imagesService.getNewBgImage()
        } catch (error) {
            console.error('[GET NEW IMG ERROR', error.message)
        }
    }
}
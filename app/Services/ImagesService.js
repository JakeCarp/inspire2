import { ProxyState } from "../AppState.js";
import { BgImg } from "../Models/BgImg.js";
import { sandboxApi } from "./AxiosService.js";



class ImagesService {

    async getNewBgImage() {
        const res = await sandboxApi.get('images')
        console.log(res.data);
        let image = new BgImg(res.data)
        ProxyState.bgImg = image
    }
}


export const imagesService = new ImagesService()
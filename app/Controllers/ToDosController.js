import { toDosService } from "../Services/ToDosService.js";


export class ToDosController {
    constructor() {
        console.log('Hello from todo controller', toDosService);
    }
}
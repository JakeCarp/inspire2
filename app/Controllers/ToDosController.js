import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";

//private
//Grab the todos out of proxy state and render them into the collapse element
function _drawToDos() {
    let todos = ProxyState.todos
    let template = ``
    todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = tempalate
}


let template

export class ToDosController {
    //register listeners and related draw functions
    constructor() {

        ProxyState.on('todos', _drawToDos)
    }


    async addToDo() {
        window.event.preventDefault()
        let form = window.event.target
        let todoData = {
            description: form.todo.value,
            completed: false
        }
        try {
            await toDosService.addToDo(todoData)
        } catch (error) {
            console.error('[ADD TODO ERROR]', error.message)
        }
    }
}
import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";

//private
//Grab the todos out of proxy state and render them into the collapse element
function _drawToDos() {
    let todos = ProxyState.todos
    let template = ``
    todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
}


let template

export class ToDosController {
    //register listeners and related draw functions
    constructor() {
        this.getAllToDos()
        ProxyState.on('todos', _drawToDos)
    }

    //call to service to remove todo by id
    async deleteToDo(id) {
        try {
            await toDosService.deleteToDo(id)
        } catch (error) {
            console.error('[DELETE TODO ERROR]', error.message)
        }
    }

    //call service to get all todos to render
    async getAllToDos() {
        try {
            await toDosService.getAllToDos()
        } catch (error) {
            console.error('[GET ALL TODOS ERROR', error.message)
        }
    }

    //clean up the form data then send to the service for post request
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
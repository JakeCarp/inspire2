import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class ToDosService {
    //Post a todo to the sandbox api and add it to the app state array
    async addToDo(todoData) {
        const res = await sandboxApi.post('jakeC/todos', todoData)
        console.log(res.data)
        let todo = new ToDo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }

    //GET all todos from the sandbox api and set into the app state array
    async getAllToDos() {
        const res = await sandboxApi.get('jakeC/todos')
        console.log(res.data);
        let todos = res.data.map(t => new ToDo(t))
        ProxyState.todos = todos
    }

    //PUT request to sandbox api to updated completed status of target todo
    async toggleToDo(id) {
        let todo = ProxyState.todos.find(t => t.id == id)
        todo.completed = !todo.completed
        const res = await sandboxApi.put('jakeC/todos/' + id, todo)
        console.log(res.data);
        let index = ProxyState.todos.findIndex(t => t.id == id)
        ProxyState.todos.splice(index, 1, todo)
        ProxyState.todos = ProxyState.todos
    }

    //DELETE a todo from sandbox api and app state array
    async deleteToDo(id) {
        await sandboxApi.delete('jakeC/todos/' + id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }
}

export const toDosService = new ToDosService()
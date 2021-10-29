import { ProxyState } from "../AppState";
import { ToDo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class ToDosService {
    //Post a todo to the sandbox api and add it to the app state array
    async addToDo(todoData) {
        console.log(todoData)
        const res = await sandboxApi.post("jakeC/todos", todoData)
        console.log(res.data)
        let todo = new ToDo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }
}

export const toDosService = new ToDosService()


export class ToDo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return `
        <div class="col-12 text-white mb-2 ms-2">
            <div class="row text-wrap">
                <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.toDosController.toggleToDo('${this.id}')" class="col-1 align-self-center">
                <label class="col-10 ps-2">${this.description}</label>
               <i class="mdi mdi-trash-can col-1 p-0 align-self-center" onclick="app.toDosController.deleteToDo('${this.id}')"></i>
            </div>
        </div>
        `
    }
}
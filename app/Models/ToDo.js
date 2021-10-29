

export class ToDo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return `
        <div class="col-12 text-white">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.toDosController.toggleToDo('${this.id}')">
        <label  for="${this.id}">${this.description}</label>
        <i class="mdi mdi-trash-can" onclick="app.toDosController.deleteToDo('${this.id}')"></i>
        </div>
        `
    }
}
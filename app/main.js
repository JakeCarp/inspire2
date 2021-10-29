import { ImagesController } from "./Controllers/ImagesController.js";
import { ToDosController } from "./Controllers/TodosController.js";


class App {
  imagesController = new ImagesController()
  toDosController = new ToDosController()
}

window["app"] = new App();

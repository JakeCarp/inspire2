import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/TodosController.js";


class App {
  imagesController = new ImagesController()
  toDosController = new ToDosController()
  quoteController = new QuotesController()
}

window["app"] = new App();

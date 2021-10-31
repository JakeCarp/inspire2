import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/TodosController.js";


class App {
  imagesController = new ImagesController()
  toDosController = new ToDosController()
  quotesController = new QuotesController()
  clockController = new ClockController()
}

window["app"] = new App();

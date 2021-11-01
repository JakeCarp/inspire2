import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  imagesController = new ImagesController()
  toDosController = new ToDosController()
  quotesController = new QuotesController()
  clockController = new ClockController()
  weatherController = new WeatherController()
}

window["app"] = new App();

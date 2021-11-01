import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/BgImg').Image} */
  bgImg = null
  /** @type {import('./Models/Todo').Todo[]} */
  todos = []
  /** @type {import('./Models/Quote').Quote} */
  quote = null
  clock12 = true
  /** @type {import('./Models/Clock').Clock} */
  clock = null
  /** @type {import('./Models/Weather').Weather} */
  weather = null
  celsius = false
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

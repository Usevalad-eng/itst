import {Animal} from "./animal.js";

class Cat extends Animal {
    hide() {
      alert(`${this.name} прячется!`);
    }
  }

export {Cat};
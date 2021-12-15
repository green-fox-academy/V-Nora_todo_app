import { argv } from "./app.js";

export default class Todo {
  constructor(todo = argv[1], isCompleted = false) {
    this.todo = todo;
    this.isCompleted = isCompleted;
  }

  changeCompleted() {
    this.isCompleted = true;
  }
}
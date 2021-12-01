import Todo from './Todo.js';
import { parsedAllTodo } from "./file-manipulations/readFile.js";
import { writeToTheList } from "./file-manipulations/writeFile.js";
import { argv } from './app.js';

export default class TodoList {
  constructor() {
    this.todoListArray = [];
  }

  listAllTodo() {
    if (parsedAllTodo.length == 0) {
      console.log('Nincs mára tennivalód! :)');
    } else {
      parsedAllTodo.forEach((item, index) => {
        console.log(`${index + 1} - ${item.todo}`);
      });
    }
  }

  addNewTodo() {
    if (argv[1] != undefined) {
      parsedAllTodo.push(new Todo()); 
      let todoString = JSON.stringify(parsedAllTodo);
      writeToTheList(todoString);
    } 
  }
}
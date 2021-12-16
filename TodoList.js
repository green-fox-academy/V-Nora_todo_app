import Todo from './Todo.js';
import { parsedAllTodo } from "./file-manipulations/readFile.js";
import { writeToTheList } from "./file-manipulations/writeFile.js";
import { argv } from './app.js';

export default class TodoList {

  listAllTodo() {
    if (parsedAllTodo.length == 0) {
      console.log('Nincs mára tennivalód! :)');

    } else {
      parsedAllTodo.forEach((item, index) => {
        console.log(`${index + 1} - [${item.isCompleted ? 'x' : ' '}] ${item.todo}`);
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

  checkParams(number) {
    if (number === undefined) {
      console.error('Nem lehetséges az eltávolítás: nem adott meg indexet!')

    } else if (number > parsedAllTodo.length) {
      console.error('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!')

    } else if (isNaN(number)) {
      console.error('Nem lehetséges az eltávolítás: a megadott index nem szám!')
    }
  }

  deleteTodo(number) {
    if (number !== undefined && number <= parsedAllTodo.length && !isNaN(number)) {
      parsedAllTodo.splice(number - 1, 1);
      writeToTheList(JSON.stringify(parsedAllTodo));
    
    } else {
      this.checkParams(number);
    }
  }

  changeToCompleted(number) {
    if (number !== undefined && number <= parsedAllTodo.length && !isNaN(number)) {
      parsedAllTodo[number - 1].isCompleted = true;
      writeToTheList(JSON.stringify(parsedAllTodo));
    
    } else {
      this.checkParams(number);
    }
  }
}
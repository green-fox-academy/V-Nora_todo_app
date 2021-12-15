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

  deleteTodo(number) {
    if (number === undefined) {
      console.error('Nem lehetséges az eltávolítás: nem adott meg indexet!')

    } else if (number > parsedAllTodo.length) {
      console.error('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!')

    } else if (isNaN(number)) {
      console.error('Nem lehetséges az eltávolítás: a megadott index nem szám!')
    }
    
    else {
      parsedAllTodo.splice(number - 1, 1);
      writeToTheList(JSON.stringify(parsedAllTodo));
    }
  }

  changeToCompleted(number) {
  }
}
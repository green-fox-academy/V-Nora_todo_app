import { usage } from "./file-manipulations/readFile.js";
import TodoList from "./TodoList.js";

export const argv = process.argv.slice(2);

let theTodoList;

if (!(theTodoList instanceof TodoList)) {
  theTodoList = new TodoList();
}

if (argv[0] === "-l") {
  theTodoList.listAllTodo();

} else if (argv[0] === "-a") {
  theTodoList.addNewTodo();

} else {
  console.log(usage);
}

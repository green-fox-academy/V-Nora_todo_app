import { usage } from "./file-manipulations/readFile.js";
import TodoList from "./TodoList.js";

export const argv = process.argv.slice(2);

let theTodoList;

if (!(theTodoList instanceof TodoList)) {
  theTodoList = new TodoList();
}

const argumentsList = ["-l", "-a", "-r", "-c"]

if (argv[0] === "-l") {
  theTodoList.listAllTodo();

} else if (argv[0] === "-a") {
  theTodoList.addNewTodo();

} else if (argv[0] === "-r") {
  theTodoList.deleteTodo(argv[1]);

} else if (argv[0] === "-c") {
  theTodoList.changeToCompleted(argv[1]);

} else if (!(argumentsList.includes(argv[0]))) {
  console.error('Nem támogatott argumentum!');
  console.log(usage);

} else {
  console.log(usage);
}
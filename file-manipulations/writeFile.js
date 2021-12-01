import fs from "fs";

export function writeToTheList(todo) {
  fs.writeFileSync("./data/todos.json", todo);
}
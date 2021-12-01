import fs from "fs";

export const usage = fs.readFileSync("./data/usage.txt", "utf-8");

export let allTodo = fs.readFileSync("./data/todos.json", "utf-8");
export let parsedAllTodo = JSON.parse(allTodo);
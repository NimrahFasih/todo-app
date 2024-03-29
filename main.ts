#! /usr/bin/env node

import inquirer from "inquirer";
let todo = [];
let condition = true;

while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What do  you want to add in your todo list?",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do You want to add more?",
      default: "false",
    },
  ]);

  todo.push(addTask.todo);

  condition = addTask.addMore;
  console.log(todo);
}
let delTask = await inquirer.prompt([
  {
    name: "delete",
    type: "confirm",
    message: "Do You Want To Delete the last added Task?",
    default: "false",
  },
]);
if (delTask.delete == true) {
  todo.pop();
}

console.log(todo);

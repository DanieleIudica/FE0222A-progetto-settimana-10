// importo interface
import { Todo } from "../interface/todo";
// array todos
export let todos: Todo[] = [];
// metodo add todo che pusha nuovo task nell'array
export async function addTodo(task: string): Promise<Todo> {
  return new Promise ((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = {
        title: task,
        id: todos.length +1,
        completed: false
      };
      todos.push(newTodo);
      res(newTodo);
    }, 2000);
  })
}

export async function getTodo(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}

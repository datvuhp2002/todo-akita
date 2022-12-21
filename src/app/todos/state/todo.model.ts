import { guid } from "@datorama/akita";

export interface Todo {
  filter(arg0: (t: any) => any): Todo[];
  id?: string;
  title?: string | number;
  completed?: boolean;
}

export function createTodo(params: Partial<Todo>) {
  return {
    id: guid(),
    title: params.title,
    completed: false
  } as Todo;
}

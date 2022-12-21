import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { VISIBILITY_FILTER } from '../filter/filter.module';
import { createTodo, Todo } from './todo.model';
import { TodoStore } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private todoStore: TodoStore) {
  }


  add(title: string) {
    const todo = createTodo({title});
    this.todoStore.add(todo);
  }

  update(id: any, todo: Partial<Todo>) {
    this.todoStore.update(id, todo);
  }

  remove(id: ID) {
    this.todoStore.remove(id);
  }

}

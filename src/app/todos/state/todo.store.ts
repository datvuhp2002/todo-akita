import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.module';
import { Todo } from './todo.model';

export interface TodoState extends EntityState<Todo>  {
  ui: {
    filter: VISIBILITY_FILTER
  };
}
const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo' })
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super(initialState);
  }

} 

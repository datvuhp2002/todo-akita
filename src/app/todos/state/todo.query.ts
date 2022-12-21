import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from '../filter/filter.module';
import { Todo } from './todo.model';
import { TodoStore, TodoState } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState> {
  todos$ = this.selectAll();
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  constructor(protected override store: TodoStore) {
    super(store);
  }

  public getVisibleTodos(filter:any) {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_ALL:
        return this.todos$ = this.selectAll({
          filterBy: ({ completed }) => completed === true || completed === false
        })
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return this.todos$ = this.selectAll({
          filterBy: ({ completed }) => completed === true
        })
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return this.todos$ = this.selectAll({
          filterBy: ({ completed }) => completed === false
        })
      default:
        return this.todos$
    }
  }

}

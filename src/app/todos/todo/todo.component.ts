import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Todo } from '../state/todo.model';
import { TodoService } from '../state/todo.service';
import { TodoQuery } from '../state/todo.query';
import { Observable } from 'rxjs';
import { initialFilters, VISIBILITY_FILTER } from '../filter/filter.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  public inputField !: FormControl;
  todos$ !: Observable<Todo[]>;
  activeFilter$ !: Observable<VISIBILITY_FILTER> ;
  filters = initialFilters;
  constructor(private fb: FormBuilder, private todoQuery: TodoQuery, private todoService: TodoService) {
   }

  ngOnInit(): void {
    this.inputField = new FormControl();
    this.todos$ = this.todoQuery.getVisibleTodos('All');
    this.activeFilter$ = this.todoQuery.selectVisibilityFilter$;
    console.log(this.filters)
  }
  changeFilter(filter: VISIBILITY_FILTER ):void {
    this.todos$ = this.todoQuery.getVisibleTodos(filter);
  }
  add(): void {
    const title = this.inputField.value;
    if (title?.trim()) {
      this.todoService.add(title);
      this.inputField.reset();
    }
  }
  onComplete(todo: Todo): void {
    this.todoService.update(todo.id, todo);
  }
  onDelete(id: String): void {
    this.todoService.remove(id.toString());
  }

  // call api (xử lý dữ liệu)
  // akita (statement) xử lý ui

 
}

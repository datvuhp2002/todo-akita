import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  formControl !: FormControl;
  @Input() todo !: Todo;
  @Output() completeTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<string | number>();
  constructor() { 
  }
  ngOnInit(): void {
    this.formControl = new FormControl(this.todo.completed);
    this.formControl.valueChanges.subscribe((completed: boolean) => {
      this.completeTodo.emit({ ...this.todo, completed });
    });
  }

}

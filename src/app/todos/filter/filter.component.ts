import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoFilter, VISIBILITY_FILTER } from './filter.module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos-filters',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFiltersComponent implements OnInit {
  @Input() filters!: TodoFilter[];
  @Input() active :  VISIBILITY_FILTER | undefined | null;
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();
  control!: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.active);
    this.control.valueChanges.subscribe(c => {
      this.update.emit(c);
    });
  }
}

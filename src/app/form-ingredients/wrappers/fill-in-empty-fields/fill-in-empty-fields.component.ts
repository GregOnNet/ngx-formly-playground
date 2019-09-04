import { Component, OnInit } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith
} from 'rxjs/operators';

@Component({
  selector: 'app-fill-in-empty-fields',
  templateUrl: './fill-in-empty-fields.component.html',
  styleUrls: ['./fill-in-empty-fields.component.scss']
})
export class FillInEmptyFieldsComponent extends FieldWrapper implements OnInit {
  amountOfEmptyFields$: Observable<number> | undefined;

  ngOnInit() {
    this.amountOfEmptyFields$ = this.form.valueChanges.pipe(
      startWith(0),
      debounceTime(300),
      distinctUntilChanged(),
      map(() => this.countEmptyFieldsRecursive(this.field, 0))
    );
  }

  countEmptyFieldsRecursive(field: FormlyFieldConfig, count: number): number {
    return !!field.fieldGroup
      ? field.fieldGroup.reduce(
          (sum, nestedField) =>
            this.countEmptyFieldsRecursive(nestedField, sum),
          count
        )
      : count + (!!field.formControl.value ? 0 : 1);
  }
}

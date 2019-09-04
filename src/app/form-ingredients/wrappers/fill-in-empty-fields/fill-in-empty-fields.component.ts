import { Component, OnInit } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-fill-in-empty-fields',
  templateUrl: './fill-in-empty-fields.component.html',
  styleUrls: ['./fill-in-empty-fields.component.scss']
})
export class FillInEmptyFieldsComponent extends FieldWrapper implements OnInit {
  amountOfEmptyFields = 0;

  ngOnInit() {
    this.amountOfEmptyFields = this.countEmptyFieldsRecursive(this.field, 0);
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

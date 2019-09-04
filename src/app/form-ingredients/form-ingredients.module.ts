import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { LabeledTextComponent } from './read-only/labeled-text/labeled-text.component';
import { FillInEmptyFieldsComponent } from './wrappers/fill-in-empty-fields/fill-in-empty-fields.component';
import { LabeledSectionComponent } from './wrappers/labeled-section/labeled-section.component';

@NgModule({
  declarations: [
    LabeledSectionComponent,
    LabeledTextComponent,
    FillInEmptyFieldsComponent
  ],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'labeled-text', component: LabeledTextComponent }],
      wrappers: [
        { name: 'labeled-section', component: LabeledSectionComponent },
        { name: 'fill-in-empty-fields', component: FillInEmptyFieldsComponent }
      ]
    })
  ],
  exports: []
})
export class FormIngredientsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { LabeledTextComponent } from './read-only/labeled-text/labeled-text.component';
import { LabeledSectionComponent } from './wrappers/labeled-section/labeled-section.component';

@NgModule({
  declarations: [LabeledSectionComponent, LabeledTextComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [{ name: 'labeled-text', component: LabeledTextComponent }],
      wrappers: [
        { name: 'labeled-section', component: LabeledSectionComponent }
      ]
    })
  ],
  exports: []
})
export class FormIngredientsModule {}

import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-labeled-section',
  templateUrl: './labeled-section.component.html',
  styleUrls: ['./labeled-section.component.scss']
})
export class LabeledSectionComponent extends FieldWrapper {}

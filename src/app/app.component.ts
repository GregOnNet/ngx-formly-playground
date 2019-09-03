import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { config, FormlyMeta } from './app.component.formly-config';

export interface EmailModel {
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-detail';

  form: FormGroup;
  model: EmailModel;
  forms: FormlyMeta;

  constructor(private fb: FormBuilder) {
    this.forms = config;
    this.form = this.fb.group({});
    this.model = { email: 'email@gmail.com' };
  }

  submit(model: EmailModel) {
    console.log(model);
  }
}

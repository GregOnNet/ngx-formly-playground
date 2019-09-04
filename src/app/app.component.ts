import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';
import { config, FormlyMeta } from './app.component.formly-config';

export interface ContactForm {
  contact: {
    email: string;
    twitter: string;
    firstName: string;
    lastName: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-detail';
  isInEditMode = false;

  form: FormGroup;
  model: ContactForm;
  forms: FormlyMeta;

  constructor(private fb: FormBuilder) {
    this.forms = config;
    this.form = this.fb.group({});
    this.model = {
      contact: {
        email: 'email@gmail.com',
        twitter: 'GregOnNet',
        firstName: 'Gregor',
        lastName: 'Woiwode'
      }
    };
  }

  toggleEditMode(state: MatSlideToggleChange) {
    this.isInEditMode = state.checked;
  }

  submit(model: ContactForm) {
    console.log(model);
  }
}

import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormlyMeta {
  view: FormlyFieldConfig[];
  edit: FormlyFieldConfig[];
}

export const config: FormlyMeta = {
  view: [
    {
      key: 'email',
      type: 'text-with-label'
    }
  ],
  edit: [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        disabled: false,
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    }
  ]
};

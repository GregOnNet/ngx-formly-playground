import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormlyMeta {
  view: FormlyFieldConfig[];
  edit: FormlyFieldConfig[];
}

export const config: FormlyMeta = {
  view: [
    {
      key: 'contact',
      wrappers: ['labeled-section'],
      templateOptions: { label: 'Contact' },
      fieldGroup: [
        {
          key: 'email',
          type: 'labeled-text',
          templateOptions: {
            label: 'E-Mail address'
          }
        }
      ]
    }
  ],
  edit: [
    {
      key: 'contact',
      wrappers: ['labeled-section'],
      templateOptions: { label: 'Contact' },
      fieldGroup: [
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
    }
  ]
};

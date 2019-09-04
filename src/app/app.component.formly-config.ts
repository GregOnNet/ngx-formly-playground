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
        },
        {
          wrappers: ['labeled-section'],
          templateOptions: { label: 'Full name' },
          fieldGroupClassName: 'formly__one-line-group',
          fieldGroup: [
            {
              key: 'firstName',
              type: 'labeled-text'
            },
            { key: 'lastName', type: 'labeled-text' }
          ]
        }
      ]
    }
  ],
  edit: [
    {
      key: 'contact',
      wrappers: ['labeled-section'],
      templateOptions: { label: 'Contact' },
      fieldGroup: [firstName(), lastName(), email()]
    }
  ]
};

function email() {
  return {
    key: 'email',
    type: 'input',
    templateOptions: {
      disabled: false,
      label: 'Email address',
      placeholder: 'Enter email',
      required: true
    }
  };
}

function lastName() {
  return {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      disabled: false,
      label: 'Last Name',
      placeholder: 'Enter your last name please',
      required: true
    }
  };
}

function firstName() {
  return {
    key: 'firstName',
    type: 'input',
    templateOptions: {
      disabled: false,
      label: 'First name',
      placeholder: 'Enter your first name please',
      required: true
    }
  };
}

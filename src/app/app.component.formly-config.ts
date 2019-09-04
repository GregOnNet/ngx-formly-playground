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
        },
        {
          key: 'twitter',
          type: 'labeled-text',
          templateOptions: {
            label: 'Twitter'
          }
        },
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
      fieldGroup: [firstName(), lastName(), twitter(), email()]
    }
  ]
};

function email() {
  return {
    key: 'email',
    type: 'input',
    templateOptions: {
      disabled: false,
      label: 'Email',
      placeholder: 'Enter email',
      required: true
    }
  };
}

function twitter() {
  return {
    key: 'twitter',
    type: 'input',
    templateOptions: {
      disabled: false,
      label: 'Twitter',
      placeholder: 'Enter your twitter handle',
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

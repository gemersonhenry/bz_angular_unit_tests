import { FormControl, Validators, ValidationErrors } from '@angular/forms';
import { EMAIL_ERROR_MESSAGES } from './login-error-messages';
import { emailValidator } from '../validators/email-validator';

export class EmailControl extends FormControl {

  constructor() {
    super('');
    this.addValidations();
  }

  private addValidations() {
    this.setValidators([
      Validators.required,
      emailValidator()
    ]);
  }

  public get errorMessage(): string {
    const errors = this.errors as ValidationErrors;
    if (errors) {
      console.log('errors: ', errors);
      const keys = Object.keys(errors);
      const currentKey = keys[0];
      const { showErrorMessage } = this;
      return showErrorMessage ? EMAIL_ERROR_MESSAGES[currentKey] : '';
    }
    return '';
  }

  public get showErrorMessage() {
    const { invalid, dirty, touched } = this;
    return invalid && (dirty || touched);
  }
}

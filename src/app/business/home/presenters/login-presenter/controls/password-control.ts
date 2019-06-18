import { FormControl, Validators, ValidationErrors } from '@angular/forms';
import { PASSWORD_ERROR_MESSAGES } from '../login-error-messages';

export class PasswordControl extends FormControl {

  constructor() {
    super('');
    this.addValidations();
  }

  private addValidations() {
    this.setValidators([
      Validators.required
    ]);
  }

  public get errorMessage(): string {
    const errors = this.errors as ValidationErrors;
    if (errors) {
      const keys = Object.keys(errors);
      const currentKey = keys[0];
      const { showErrorMessage } = this;
      return showErrorMessage ? PASSWORD_ERROR_MESSAGES[currentKey] : '';
    }
    return '';
  }

  public get showErrorMessage() {
    const { invalid, dirty, touched } = this;
    return invalid && (dirty || touched);
  }
}

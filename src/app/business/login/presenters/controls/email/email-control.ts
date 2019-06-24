import { FormControl, Validators } from '@angular/forms';
import { customEmailValidator } from '../validators/custom-email-validator';
import { EMAIL_ERROR_MESSAGES } from '../error-messages/control-error-messages';

export class EmailControl extends FormControl {

  constructor() {
    super();
    this.addValidators();
  }

  private addValidators() {
    this.setValidators([
      Validators.required,
      Validators.email,
      customEmailValidator(),
    ]);
  }

  public get errorMessage(): string {
    if (this.errors) {
      const keys = Object.keys(this.errors);
      const currentKey = keys[0];
      return EMAIL_ERROR_MESSAGES[currentKey];
    }
    return '';
  }
}

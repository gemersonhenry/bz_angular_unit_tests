import { FormControl } from '@angular/forms';

export class PasswordControl extends FormControl {

  constructor() {
    super();
  }

  private addValidators() {
    this.setValidators([]);
  }

  public get errorMessage(): string {
    return '';
  }
}

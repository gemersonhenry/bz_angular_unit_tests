import { AbstractControl } from '@angular/forms';

export function emailValidator() {
  return (control: AbstractControl) => {
    const emailRegExp = /^([a-zA-Z0-9]+([_]|[.]))+[a-zA-Z0-9]+@([a-zA-Z]+([.]))+[a-zA-Z]+$/g;
    return emailRegExp.test(control.value) ? null : { emailValidator: true };
  };
}

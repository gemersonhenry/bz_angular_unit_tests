import { ValidatorFn, AbstractControl } from '@angular/forms';
import { EMAIL_REG_EXP } from '../../../constants/validator-constants';

export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const { value } = control;
    const objReturn = { customEmailValidator: true };
    return EMAIL_REG_EXP.test(value) ? null : objReturn;
  };
}

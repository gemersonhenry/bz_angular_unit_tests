import { ValidatorFn, AbstractControl } from '@angular/forms';
import {
  LOW_PASSWORD_REG_EXP, MEDIUM_PASSWORD_REG_EXP, HIGH_PASSWORD_REG_EXP
} from '../../../constants/validator-constants';

export function customLowPasswordValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = LOW_PASSWORD_REG_EXP.test(control.value);
    return isValid ? null : { low_security: true };
  };
}

export function customMediumPasswordValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = MEDIUM_PASSWORD_REG_EXP.test(control.value);
    return isValid ? null : { medium_security: true };
  };
}

export function customHighPasswordValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = HIGH_PASSWORD_REG_EXP.test(control.value);
    return isValid ? null : { high_security: true };
  };
}

export function customPasswordValidator(): ValidatorFn {
  // const REG_EXP_1 = /[a-z]/g;
  const ESTRICT_REG_EXP_1 = /^[a-z]$/g;
  // const REG_EXP_2 = /[A-Z0-9]/g;
  const ESTRICT_REG_EXP_2 = /^[A-Z]$/g;
  // const REG_EXP_3 = /[@#$%&?¿!¡_.=*+/-]/g;
  const ESTRICT_REG_EXP_3 = /^[@#$%&?¿!¡_.=*+/-]$/g;
  return (control: AbstractControl) => {
    const { value } = control;
    // validando si solo cumplen con una expresión
    if (ESTRICT_REG_EXP_1.test(value) || ESTRICT_REG_EXP_2.test(value) || ESTRICT_REG_EXP_3.test(value)) {
      return {
        basic_validation: true,
      };
    }
    return null;
  };
}

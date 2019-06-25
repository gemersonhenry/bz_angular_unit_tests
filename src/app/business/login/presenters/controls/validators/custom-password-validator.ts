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

// EJEMPLO DE UNA IMPLEMENTACIÓN EN UN SOLO "VALIDATOR"
// export function customPasswordValidator(): ValidatorFn {
//   return (control: AbstractControl) => {
//     if (!LOW_PASSWORD_REG_EXP.test(control.value)) {
//       return {
//         low_security: true,
//       };
//     }
//     if (!MEDIUM_PASSWORD_REG_EXP.test(control.value)) {
//       return {
//         medium_security: true,
//       };
//     }
//     if (!HIGH_PASSWORD_REG_EXP.test(control.value)) {
//       return {
//         high_security: true,
//       };
//     }
//     return null;
//   };
// }

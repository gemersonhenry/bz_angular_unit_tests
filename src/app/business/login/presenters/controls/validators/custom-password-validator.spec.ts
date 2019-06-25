import {
  customLowPasswordValidation, customMediumPasswordValidation, customHighPasswordValidation
} from './custom-password-validator';
import { FormControl } from '@angular/forms';

fdescribe('CustomPasswordValidator', () => {

  let control: FormControl;

  beforeEach(() => {
    control = new FormControl();
  });

  // LOW VALIDATION
  it('customLowPasswordValidation() debe aceptar el password "BZgemerson123"', () => {
    control.setValidators([ customLowPasswordValidation() ]);
    control.setValue('bzgemerson123');
    expect(control.valid).toBeTruthy();
  });

  // MEDIUM VALIDATION
  it('customMediumPasswordValidation() debe aceptar el password "BZ.gemerson-12_34"', () => {
    control.setValidators([ customMediumPasswordValidation() ]);
    control.setValue('BZ.gemerson-12_34');
    expect(control.valid).toBeTruthy();
  });

  it('customMediumPasswordValidation() debe aceptar el password "_2019_BZ.G3M3RS0N-EE"', () => {
    control.setValidators([ customMediumPasswordValidation() ]);
    control.setValue('_2019_BZ.G3M3RS0N-EE');
    expect(control.valid).toBeTruthy();
  });

  it('customMediumPasswordValidation() debe aceptar el password "_C0tufa-t3am.2o19_"', () => {
    control.setValidators([ customMediumPasswordValidation() ]);
    control.setValue('_C0tufa-t3am.2o19_');
    expect(control.valid).toBeTruthy();
  });

  // HIGH VALIDATION
  it('customHighPasswordValidation() debe aceptar el password "$$BZ.gemerson-12_34"', () => {
    control.setValidators([ customHighPasswordValidation() ]);
    control.setValue('$$BZ.gemerson-12_34');
    expect(control.valid).toBeTruthy();
  });

  it('customHighPasswordValidation() debe aceptar el password "M@b31.m@th3_#$2o19"', () => {
    control.setValidators([ customHighPasswordValidation() ]);
    control.setValue('M@b31.m@th3_#$2o19');
    expect(control.valid).toBeTruthy();
  });

  it('customHighPasswordValidation() debe aceptar el password "BZ@@gemerson-2.0.1.9$$"', () => {
    control.setValidators([ customHighPasswordValidation() ]);
    control.setValue('BZ@@gemerson-2.0.1.9$$');
    expect(control.valid).toBeTruthy();
  });

  it('customHighPasswordValidation() no debe aceptar el password "BZ.gemerson-12_34"', () => {
    control.setValidators([ customHighPasswordValidation() ]);
    control.setValue('BZ.gemerson-12_34');
    expect(control.valid).toBeFalsy();
  });

});

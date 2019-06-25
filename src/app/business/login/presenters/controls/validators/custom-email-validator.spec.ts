import { customEmailValidator } from './custom-email-validator';
import { AbstractControl, FormControl } from '@angular/forms';

describe('CUSTOM EMAIL VALIDATOR: validación de una expresión regular', () => {

  let control: FormControl;
  // emails to invalid Tests
  const invalidEmail01 = 'gemerson..bendezu@gmail.com';
  const invalidEmail02 = 'gemersonbendezu@gmail..com';
  const invalidEmail03 = 'gemersonbendezu.@gmail.com';
  const invalidEmail04 = 'gemersonbendezu_@gmail.com';
  const invalidEmail05 = 'gemerson__bendezu@gmail.com';
  const invalidEmail06 = 'gemerson_.bendezu@gmail.com';
  // emails to valid tests
  const validEmail01 = 'gemerson_bendezu_2019.33@peru.com.pe';
  const validEmail02 = 'gemersonbendezu@gmail.com';

  beforeEach(() => {
    control = new FormControl('', [
      customEmailValidator(),
    ]);
  });

  /**
   * INVALID TESTS
   */

  it('El valor inicial "" debe ser invalido', () => {
    expect(control.valid).toBeFalsy();
  });

  it(`El correo "${invalidEmail01}" debe ser invalido`, () => {
    control.setValue(invalidEmail01);
    expect(control.valid).toBeFalsy();
  });

  it(`El correo "${invalidEmail02}" debe ser invalido`, () => {
    control.setValue(invalidEmail02);
    expect(control.valid).toBeFalsy();
  });

  it(`El correo "${invalidEmail03}" debe ser invalido`, () => {
    control.setValue(invalidEmail03);
    expect(control.valid).toBeFalsy();
  });

  it(`El correo "${invalidEmail04}" debe ser invalido`, () => {
    control.setValue(invalidEmail04);
    expect(control.valid).toBeFalsy();
  });

  it(`El correo "${invalidEmail05}" debe ser invalido`, () => {
    control.setValue(invalidEmail05);
    expect(control.valid).toBeFalsy();
  });

  it(`El correo "${invalidEmail06}" debe ser invalido`, () => {
    control.setValue(invalidEmail06);
    expect(control.valid).toBeFalsy();
  });

  /**
   * VALID TESTS
   */

  it(`El correo "${validEmail01}" debe ser valido`, () => {
    control.setValue(validEmail01);
    expect(control.valid).toBeTruthy();
  });

  it(`El correo "${validEmail02}" debe ser valido`, () => {
    control.setValue(validEmail02);
    expect(control.valid).toBeTruthy();
  });
});

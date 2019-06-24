import { PasswordControl } from './password-control';
import { PASSWORD_ERROR_MESSAGES } from '../error-messages/control-error-messages';

describe('PasswordControl', () => {

  let passwordControl: PasswordControl;

  beforeEach(() => {
    passwordControl = new PasswordControl();
  });

  it(`El campo vacio debe mostrar el mensaje de error: "${PASSWORD_ERROR_MESSAGES.required}"`, () => {
    passwordControl.updateValueAndValidity();
    const errorMessage = passwordControl.errorMessage;
    expect(errorMessage).toBe(PASSWORD_ERROR_MESSAGES.required);
  });

  it(`El contraseña "123456" debe mostrar el mensaje de error "${PASSWORD_ERROR_MESSAGES.minLength}"`, () => {
    passwordControl.setValue('123456');
    const errorMessage = passwordControl.errorMessage;
    expect(errorMessage).toBe(PASSWORD_ERROR_MESSAGES.minLength);
  });

  it(`El correo "henry1234" debe mostrar el mensaje de error "${PASSWORD_ERROR_MESSAGES.low_security}"`, () => {
    passwordControl.setValue('henry1234');
    const errorMessage = passwordControl.errorMessage;
    expect(errorMessage).toBe(PASSWORD_ERROR_MESSAGES.low_security);
  });

  it(`El correo "henry.bendezu_1234" debe mostrar el mensaje de error "${PASSWORD_ERROR_MESSAGES.medium_security}"`, () => {
    passwordControl.setValue('henry.bendezu_1234');
    const errorMessage = passwordControl.errorMessage;
    expect(errorMessage).toBe(PASSWORD_ERROR_MESSAGES.medium_security);
  });

  it(`El correo "$henry.bendezu_1234@" debe mostrar el mensaje de error "${PASSWORD_ERROR_MESSAGES.high_security}"`, () => {
    passwordControl.setValue('$henry.bendezu_1234@');
    const errorMessage = passwordControl.errorMessage;
    expect(errorMessage).toBe(PASSWORD_ERROR_MESSAGES.high_security);
  });

});

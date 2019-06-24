import { EmailControl } from './email-control';
import { EMAIL_ERROR_MESSAGES } from '../error-messages/control-error-messages';

describe('EmailControl', () => {

  let emailControl: EmailControl;

  beforeEach(() => {
    emailControl = new EmailControl();
  });

  it(`El campo vacio debe mostrar el mensaje de error: "${EMAIL_ERROR_MESSAGES.required}"`, () => {
    emailControl.updateValueAndValidity();
    const errorMessage = emailControl.errorMessage;
    expect(errorMessage).toBe(EMAIL_ERROR_MESSAGES.required);
  });

  it(`El correo "bzgemerson" debe mostrar el mensaje de error "${EMAIL_ERROR_MESSAGES.email}"`, () => {
    emailControl.setValue('bzgemerson');
    const errorMessage = emailControl.errorMessage;
    expect(errorMessage).toBe(EMAIL_ERROR_MESSAGES.email);
  });

  it(`El correo "bzgemerson._2019@gmail.com" debe mostrar el mensaje de error "${EMAIL_ERROR_MESSAGES.customEmailValidator}"`, () => {
    emailControl.setValue('bzgemerson._2019@gmail.com');
    const errorMessage = emailControl.errorMessage;
    expect(errorMessage).toBe(EMAIL_ERROR_MESSAGES.customEmailValidator);
  });
});

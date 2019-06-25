const e1 = '[a-zA-Z0-9]';

const e2 = `${e1}*[._-]+`;
const e3 = `${e1}*[@#$%&+=¿?]+`;
const e7 = `[a-zA-Z0-9@#$%&+=¿?._-]*`;

const e4 = `((${e2}${e3}|${e3}${e2}){2})`;
const e5 = `(${e2}${e2}${e3}${e3})`;
const e6 = `(${e3}${e3}${e2}${e2})`;

export const EMAIL_REG_EXP = /^([a-zA-Z0-9]+([_.]))*[a-zA-Z0-9]+@([a-zA-Z]+([.]))+[a-zA-Z]+$/g;

// letras minúsculas o mayúsculas o números
export const LOW_PASSWORD_REG_EXP = new RegExp(`^(${e1}){8,}$`, 'g');

// letras minúsculas o mayúsculas o números y al menos 2 caracteres . ó - ó _
export const MEDIUM_PASSWORD_REG_EXP = new RegExp(`^(${e2}){2,}${e1}*$`, 'g');

export const HIGH_PASSWORD_REG_EXP = new RegExp(`^(${e4}|${e5}|${e6})${e7}$`, 'g');







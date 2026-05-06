// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: (123) 456-7890 is valid', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: 123-456-7890 is valid', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: 12345678 is not valid', () => {
  expect(isPhoneNumber('12345678')).toBe(false);
});

test('isPhoneNumber: abc-def-ghij is not valid', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('isEmail: test@example.com is valid', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail: user@domain.org is valid', () => {
  expect(isEmail('user@domain.org')).toBe(true);
});

test('isEmail: notanemail is not valid', () => {
  expect(isEmail('notanemail')).toBe(false);
});

test('isEmail: missing@@domain.com is not valid', () => {
  expect(isEmail('missing@@domain.com')).toBe(false);
});

// isStrongPassword
test('isStrongPassword: Abcd1234 is valid', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('isStrongPassword: valid_pw is valid', () => {
  expect(isStrongPassword('valid_pw')).toBe(true);
});

test('isStrongPassword: 1invalid starts with number, not valid', () => {
  expect(isStrongPassword('1invalid')).toBe(false);
});

test('isStrongPassword: ab is too short, not valid', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('isDate: 1/1/2021 is valid', () => {
  expect(isDate('1/1/2021')).toBe(true);
});

test('isDate: 12/31/2020 is valid', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('isDate: 2021-01-01 is not valid', () => {
  expect(isDate('2021-01-01')).toBe(false);
});

test('isDate: 13/2021 is not valid', () => {
  expect(isDate('13/2021')).toBe(false);
});

// isHexColor
test('isHexColor: #FFF is valid', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor: aabbcc is valid', () => {
  expect(isHexColor('aabbcc')).toBe(true);
});

test('isHexColor: #GGGGGG is not valid', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('isHexColor: 12345 is not valid (5 chars)', () => {
  expect(isHexColor('12345')).toBe(false);
});

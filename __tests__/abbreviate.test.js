const abbrevName = require('../Abbreviate_a_Two_Word_Name/abbreviate');

describe('Name abbreviation', () => {
  // Happy

  test('Abbreviate two names', () => {
    expect(abbrevName('Yosmel Chiang')).toBe('Y.C');
  });

  // Invalid
  test('Must be string', () => {
    expect(abbrevName(123)).toBe('Invalid input');
  });
});
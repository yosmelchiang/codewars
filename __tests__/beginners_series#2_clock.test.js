const past = require('../beginners_series#2_clock/beginners_series#2_clock.js');

describe('Time past midnight', () => {
  //Happy days
  test('Given a correct input, return the time past midnight', () => {
    expect(past(0,1,1)).toBe(61000);
    expect(past(1,1,1)).toBe(3661000);
    expect(past(0,0,0)).toBe(0);
    expect(past(1,0,1)).toBe(3601000);
    expect(past(1,0,0)).toBe(3600000);
  });

  //Erronous
  test('Given an invalid input, throw an error', () => {
    expect(() => {past(-1, 0, 1);}).toThrow(); // Using a negative number should throw an error
    expect(() => {past('a', 0, 1);}).toThrow(); // Using a negative number should throw an error
  });
});
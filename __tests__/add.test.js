const addTwoNums = require('../add/add.js')

describe('Add two numbers', () => {
  test('Sum of two numbers is correct', () => {
    expect(addTwoNums(2, 2)).toBe(4)
  })
})
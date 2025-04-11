const { nameShuffler, nameShufflerV2 } = require('../name_shuffler/app.js');

describe('Name shuffler', () => {
  test('Destructuring and template literals', () => {
    expect(nameShuffler('john McClane')).toBe('McClane john');
  });

  test('Array.reverse()', () => {
    expect(nameShufflerV2('john McClane')).toBe('McClane john');
  });
});
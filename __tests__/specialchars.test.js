const htmlspecialchars = require('../htmlspecialchars/specialchars');

describe('Basic tests', () => {
  test('Simple tests', () => {
    expect(htmlspecialchars('<h2>Hello World</h2>')).toBe('&lt;h2&gt;Hello World&lt;/h2&gt;');
    expect(htmlspecialchars('Hello, how would you & I fare?')).toBe('Hello, how would you &amp; I fare?');
    expect(htmlspecialchars('How was "The Matrix"?  Did you like it?')).toBe('How was &quot;The Matrix&quot;?  Did you like it?');
    expect(htmlspecialchars('<script>alert(\'Website Hacked!\');</script>')).toBe('&lt;script&gt;alert(\'Website Hacked!\');&lt;/script&gt;');
  });
});
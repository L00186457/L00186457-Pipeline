const greet = require('./app');

test('should return greeting message', () => {
  expect(greet()).toBe('Hello, World!');
});
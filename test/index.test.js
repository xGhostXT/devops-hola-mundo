const fs = require('fs');
const path = require('path');

test('HTML contiene "Hola Mundo"', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  expect(html).toMatch(/Hola Mundo/);
});

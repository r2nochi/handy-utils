'use strict';

const assert = require('assert');
const { slugify, clamp, formatBytes } = require('../src');

assert.strictEqual(slugify('Hola Mundo!'), 'hola-mundo');
assert.strictEqual(slugify('  Árboles y Ríos  '), 'arboles-y-rios');
assert.strictEqual(clamp(12, 0, 10), 10);
assert.strictEqual(clamp(-3, 0, 10), 0);
assert.strictEqual(clamp(5, 0, 10), 5);

assert.strictEqual(formatBytes(0), '0 B');
assert.strictEqual(formatBytes(1536), '1.5 KB');
assert.strictEqual(formatBytes(1048576), '1 MB');

console.log('Todos los tests pasaron ✔');

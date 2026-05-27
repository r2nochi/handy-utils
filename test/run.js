'use strict';

const assert = require('assert');
const { slugify, clamp, formatBytes, truncate, capitalize } = require('../src');

assert.strictEqual(slugify('Hola Mundo!'), 'hola-mundo');
assert.strictEqual(slugify('  Árboles y Ríos  '), 'arboles-y-rios');
assert.strictEqual(clamp(12, 0, 10), 10);
assert.strictEqual(clamp(-3, 0, 10), 0);
assert.strictEqual(clamp(5, 0, 10), 5);

assert.strictEqual(formatBytes(0), '0 B');
assert.strictEqual(formatBytes(1536), '1.5 KB');
assert.strictEqual(formatBytes(1048576), '1 MB');

assert.strictEqual(truncate('hola', 10), 'hola');
assert.strictEqual(truncate('hola mundo', 6), 'hola …');

assert.strictEqual(capitalize('hola mundo'), 'Hola Mundo');
assert.strictEqual(capitalize('JAVA script'), 'Java Script');

console.log('Todos los tests pasaron ✔');

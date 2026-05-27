'use strict';

const assert = require('assert');
const { slugify, clamp } = require('../src');

assert.strictEqual(slugify('Hola Mundo!'), 'hola-mundo');
assert.strictEqual(slugify('  Árboles y Ríos  '), 'arboles-y-rios');
assert.strictEqual(clamp(12, 0, 10), 10);
assert.strictEqual(clamp(-3, 0, 10), 0);
assert.strictEqual(clamp(5, 0, 10), 5);

console.log('Todos los tests pasaron ✔');

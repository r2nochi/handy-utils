'use strict';
module.exports = function isEmail(s) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(s)); };


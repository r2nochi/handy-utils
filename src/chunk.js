'use strict';
module.exports = function chunk(arr, size) { var out = []; for (var i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size)); return out; };


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines[0]);
const m = parseInt(lines[1]);

console.log(n - m);
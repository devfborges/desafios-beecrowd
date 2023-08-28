var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const t = parseInt(lines[0]);
const clicksLink1 = (t*2) *2;

console.log(clicksLink1);
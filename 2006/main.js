var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const tipoCha = parseInt(lines[0]);
const palpites = lines[1].split(' ');

let acertos = 0;

for (let i of palpites) {
    if (parseInt(i) === tipoCha) {
        acertos++;
    }
}

console.log(acertos);
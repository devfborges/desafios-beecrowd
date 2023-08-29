var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [_, s] = lines[0].split(' ');

let montante = parseInt(s);
let menorValor = montante;

for (let i = 1; i < lines.length; i++) {
    montante += parseInt(lines[i]);
    if (montante < menorValor) menorValor = montante;
}

console.log(menorValor);


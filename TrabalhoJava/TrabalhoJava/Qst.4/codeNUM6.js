const prompt = require("prompt-sync")(); 

let numeros = [];
for (let i = 0; i < 30; i++) {
  numeros[i] = parseFloat(prompt(`Número ${i}:`));
}

let maior = numeros[0];
let indiceMaior = 0;

for (let i = 1; i < 30; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
    indiceMaior = i;
  }
}

console.log(`Maior valor: ${maior}, encontrado na posição: ${indiceMaior}`);



const prompt = require("prompt-sync")();

let pares = 0, impares = 0;

for (let i = 0; i < 30; i++) {
  let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
  if (num % 2 === 0) pares++;
  else impares++;
}

console.log(`Pares: ${pares}`);
console.log(`Ímpares: ${impares}`);

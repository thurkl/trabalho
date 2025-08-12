const prompt = require("prompt-sync")(); 

let valores = [];

for (let i = 0; i < 30; i++) {
  let valor = parseFloat(prompt(`Digite o valor ${i}:`));
  if (i % 2 === 0) { // posição par
    valor *= 1.02;
  } else { // posição ímpar
    valor *= 1.05;
  }
  valores[i] = valor;
}

console.log("Vetor atualizado:", valores);

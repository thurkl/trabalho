

const prompt = require("prompt-sync")(); 

let vetor1 = [], vetor2 = [], vetorSoma = [];

for (let i = 0; i < 15; i++) {
  vetor1[i] = parseInt(prompt(`Vetor1 - Posição ${i}:`));
  vetor2[i] = parseInt(prompt(`Vetor2 - Posição ${i}:`));
  vetorSoma[i] = vetor1[i] + vetor2[i];
}

console.log("Vetor soma:", vetorSoma);

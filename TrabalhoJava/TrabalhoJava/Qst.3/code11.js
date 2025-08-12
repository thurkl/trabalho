const prompt = require("prompt-sync")();

let femMaior21 = 0, mascMaior18 = 0;
let totalMasc = 0, totalFem = 0;
let somaIdadeMasc = 0, somaIdadeFem = 0;

for (let i = 0; i < 200; i++) {
  let nome = prompt("Nome:");
  let idade = parseInt(prompt("Idade:"));
  let sexo = prompt("Sexo (M/F):").toUpperCase();

  if (sexo === 'F') {
    totalFem++;
    somaIdadeFem += idade;
    if (idade > 21) femMaior21++;
  } else if (sexo === 'M') {
    totalMasc++;
    somaIdadeMasc += idade;
    if (idade > 18) mascMaior18++;
  }
}

let mediaMasc = somaIdadeMasc / totalMasc;
let mediaFem = somaIdadeFem / totalFem;

console.log(`Feminino e maiores de 21: ${femMaior21}`);
console.log(`Masculino e maiores de 18: ${mascMaior18}`);
console.log(`Média de idade dos homens: ${mediaMasc.toFixed(1)}`);
console.log(`Média de idade das mulheres: ${mediaFem.toFixed(1)}`);

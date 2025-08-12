

const prompt = require("prompt-sync")();
let pessoas = parseInt(prompt("Quantas pessoas?"));
let maisVelhoNome = "", maisNovoNome = "";
let maisVelhoIdade = 0, maisNovoIdade = 999;

for (let i = 0; i < pessoas; i++) {
  let nome = prompt("Nome:");
  let idade = parseInt(prompt("Idade:"));

  if (idade > maisVelhoIdade) {
    maisVelhoIdade = idade;
    maisVelhoNome = nome;
  }

  if (idade < maisNovoIdade) {
    maisNovoIdade = idade;
    maisNovoNome = nome;
  }
}

console.log(`Pessoa mais velha: ${maisVelhoNome}, ${maisVelhoIdade} anos`);
console.log(`Pessoa mais jovem: ${maisNovoNome}, ${maisNovoIdade} anos`);



const prompt = require("prompt-sync")();
let conta, saldo;
let totalNegativo = 0, totalClientes = 0;

do {
  conta = parseInt(prompt("Número da conta (0 para sair):"));
  if (conta !== 0) {
    saldo = parseFloat(prompt("Saldo da conta:"));
    console.log(`Conta: ${conta}, Saldo: ${saldo.toFixed(2)} → ${saldo < 0 ? "Negativo" : "Positivo"}`);
    if (saldo < 0) totalNegativo++;
    totalClientes++;
  }
} while (conta !== 0);

let percentualNegativo = (totalNegativo / totalClientes) * 100;
console.log(`Percentual com saldo negativo: ${percentualNegativo.toFixed(1)}%`);

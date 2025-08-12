const prompt = require("prompt-sync")();

let totalSalario = 0;
for (let i = 1; i <= 20; i++) {
  let codigo = prompt(`Digite o código do funcionário ${i}:`);
  let salario = parseFloat(prompt(`Digite o salário do funcionário ${codigo}:`));
  totalSalario += salario;
}
let media = totalSalario / 20;
console.log(`Total da folha de pagamento: R$ ${totalSalario.toFixed(2)}`);
console.log(`Média salarial: R$ ${media.toFixed(2)}`);

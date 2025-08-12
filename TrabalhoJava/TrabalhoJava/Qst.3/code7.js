

const prompt = require("prompt-sync")();
let a = 1, b = 1;
console.log(a);
console.log(b);

for (let i = 3; i <= 15; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

let alturaRomario = 150; 
let alturaBebeto = 110;  
let crescimentoRomario = 2; 
let crescimentoBebeto = 3;  

let anos = 0;

while (alturaBebeto <= alturaRomario) {
    alturaRomario += crescimentoRomario;
    alturaBebeto += crescimentoBebeto;
    anos++;
}

console.log(`Bebeto será mais alto que Romário em ${anos} anos.`);

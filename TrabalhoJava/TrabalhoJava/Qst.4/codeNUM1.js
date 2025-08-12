

const prompt = require("prompt-sync")(); 

let jogos = ["FIFA", "GTA", "Mario", "Zelda", "Fortnite"];
jogos.push("Call of Duty");          
jogos[1] = "Minecraft";                 
jogos.pop();                            
console.log("Array final:", jogos);
console.log("Tamanho do array:", jogos.length);

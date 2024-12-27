//informações das variaveis 

let Nome = prompt();
let idade = parseInt(prompt("Informe sua idade: "));
let altura = parseFloat(prompt("Informe sua altura: "));
let peso = parseInt(prompt("Informe seu peso: "));

//

console.log(Nome)
console.log(idade) 
console.log(altura)
console.log(peso) 

//

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura*altura)

//

console.log (" Óla " + Nome + " , Voce tem " + idade + " anos , nasceu em " + 1998 + ", tem" + altura + " de altura, pesa "
     + peso + " kg seu imc è " + imc + " kg/m² ")
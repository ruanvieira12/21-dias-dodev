//informações das variaveis 

let Nome = "Ruan Vieira"
let idade = 25
let altura = 1.73
let peso = "63 kg"

//

Nome = prompt("Informe seu nome; ")
idade = parseInt(prompt("Informe sua idade: "));
altura = parseFloat(prompt("Informe sua altura: "));
peso = parseInt(prompt("Informe seu peso: "));

//

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura*altura)

//

console.log (" Óla " + Nome + " , Voce tem " + idade + " anos , nasceu em " + 1998 + " , tem" + altura + " de altura, pesa "
     + peso + " kg seu imc è " + imc + " kg/m² ")
//Calculadora Dodev

//Declarando variaveis
const operação = prompt("Escolha uma operação: \n1. + \n2. - \n3. / \n4. *");


let resultado;
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
//Colocando em execução

switch (operação){
    case "1":
        resultado = num1 + num2
        console.log(`O resultado da soma é: ${resultado}`)
        break
    case "2": 
        resultado = num1 - num2
            console.log(`o resultado da subtração é: ${resultado}`)
            break
    case "3":
        resultado = num1 / num2
        console.log(`O resultado da divisão é: ${resultado}`)      
        break
    case "4": 
        resultado = num1 * num2
        console.log(`O resultado da multiplicação é: ${resultado}`)    
        break
    default:
    console.log("ops...")}

  
    
//Dodev Thru

    //Criando variavel
let opções = prompt("Escolha uma das opções: 1-gasolina; 2-álcool; 3-calibração")


//Criando SWITCHCASE

switch(opções){
    case "1":
        valor = prompt("insira um valor")
        console.log(`O valolr a ser inserido de gasolina é de ${valor}`)
        break
    case "2":
        valor = prompt("insira um valor")
       console.log(`O valor a ser inserido de álcool é de ${valor}`)
        break
    case "3":
        console.log("pneus calibrados com sucesso")
        break
    default :
        console.log("default")
}

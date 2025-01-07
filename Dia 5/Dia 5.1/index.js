//Declarando variaveis
const operação = prompt("Escolha uma operação: \n1. + \n2. - \n3. / \n4. *");


let resultado;

//Colocando em execução

switch (operação){
    case "1":
        num1 = parseFloat(prompt("Digite o primeiro número:"));
        num2 = parseFloat(prompt("Digite o segundo número:"));
        resultado = num1 + num2
        console.log(`O resultado da soma é: ${resultado}`)
        break
    case "2": 
        num1 = parseFloat(prompt("Digite o primeiro número:"));
        num2 = parseFloat(prompt("Digite o segundo número:"));
        resultado = num1 - num2
            console.log(`o resultado da subtração é: ${resultado}`)
            break
    case "3":
        num1 = parseFloat(prompt("Digite o primeiro número:"));
        num2 = parseFloat(prompt("Digite o segundo número:"));
        resultado = num1 / num2
        console.log(`O resultado da divisão é: ${resultado}`)      
        break
    case "4": 
        num1 = parseFloat(prompt("Digite o primeiro número:"));
        num2 = parseFloat(prompt("Digite o segundo número:"));
        resultado = num1 * num2
        console.log(`O resultado da multiplicação é: ${resultado}`)    
        break
    default:
    console.log("ops...")}

   



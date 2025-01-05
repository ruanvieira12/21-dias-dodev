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

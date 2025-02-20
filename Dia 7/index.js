let Semana = Number(prompt("Escolha um dia da semana:"))

switch(Semana){
    case 1: 
        console.log("Hoje é segunda-feira")
        break;
    case 2:
        console.log("Hoje é terça-feira")
        break;
    case 3:
        console.log("Hoje é quarta-feira")
        break;
    case 4:
        console.log("Hoje é quinta-feira") 
        break;
    case 5: 
        console.log("Hoje é sexta-feira")   
        break;
    case 6:
        console.log("Hoje é sabado")
        break;
    case 7: 
        console.log("Hoje é domigo") 
        break;   
    default:
        console.log("Dia da semana não existe")
        break;
}
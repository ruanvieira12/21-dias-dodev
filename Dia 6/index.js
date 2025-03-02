//contagem de 0 ao numero recebido

let num= Number(prompt("Informe um valor:"))

for(i = 0; i < num; i++){
    console.log(i)
}


 //contagem de 0 a 50 de 5 em 5
for(i= 0; i < 50; i+=5){
    console.log(i)
}


//contagem inversa da anterior

for(i= 50; i >= 0; i-=5){
    console.log(i)
}


//criando tabuada 
let tabuada = Number(prompt("Escolha sua tabuada:"))

for(let j = tabuada; j<=tabuada +3; j++){
    console.log("Tabuada do numero: " + j)
for(let i= 0; i<= 20; i++)
    console.log(i + "x" + j + "=" + i*j)
}


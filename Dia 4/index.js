let Estacomfome = prompt('Você esta com fome? (sim/não)')
let Temdinheiro = prompt('Você tem dinheiro ? (sim/não)') 
let Abetorestaurante = prompt('O restaurante está aberto ? (sim/não)')

if(Estacomfome === 'não' || Temdinheiro === 'não'){
    console.log("Hoje a janta será em casa")
}else if(Estacomfome === 'sim' && Temdinheiro === 'sim' && Abetorestaurante === 'sim'){
    console.log("Hoje o janta será no seu restaurante preferido")
} if(Estacomfome === 'sim' && Temdinheiro === 'sim' && Abetorestaurante === 'não'){
    console.log("Peça um delivery")
}



















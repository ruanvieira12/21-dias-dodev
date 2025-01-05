
const estacomFome  = prompt(" Você está com fome? (sim/não)")
const estacomDinheiro = prompt(" Você tem dinheiro? (sim/não)")
const restauranteAberto = prompt(" O restaurante está aberto? (sim/não)")

if (estacomFome === "não" || estacomDinheiro == "não" ) {
    console.log("Hoje a janta será em casa");
}else if (estacomFome === "sim" && restauranteAberto === "não" )
    console.log("Peça um delivery")
else {
        console.log("Hoje o jantar será no seu restaurante preferido")
    }



















//EXEMPLO BÁSICO

let velocidade = 50
let aceleracao = 5

while(velocidade <= 100){
    console.log("estamos a: ",aceleracao, "KM por segundo")
    aceleracao ++
}

//BREAK

let spaceshipName = "Supernova"

for(let i =0; i<spaceshipName.length; 1++) {
    console.log(spaceshipName[i])
    if(spaceshipName[i] === "o") {
        break //ELE PARA A OPERAÇÃO NESSA VALIDAÇÃO
    }
}
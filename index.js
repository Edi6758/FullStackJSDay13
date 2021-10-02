let nomeNave = prompt("Digite o nome da sua nave!")
let nomeNaveInvertido = "";

for(let i = nomeNave.length-1; i>=0; i--){
    if(nomeNave[i] === "o"){
        break
    }
    nomeNaveInvertido += nomeNave[i]

}
console.log(nomeNaveInvertido)